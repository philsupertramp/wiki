import re
from typing import List, Tuple

import markdown
from markdown.extensions.wikilinks import WikiLinksInlineProcessor
from django import template
from django.urls import reverse
from difflib import ndiff

register = template.Library()


def build_url(label, base, end):
    clean_label = re.sub(r'([ ]+_)|(_[ ]+)|([ ]+)', '_', label)
    view, slug = clean_label.split(':')

    name__view__map = {
        'wiki': 'page_detail'
    }

    if view_name := name__view__map.get(view):
        return reverse(view_name, kwargs={'slug': slug})
    return ''


class MyWikiLinkExtension(markdown.extensions.Extension):

    def __init__(self, **kwargs):
        self.config = {
            'base_url': ['/', 'String to append to beginning or URL.'],
            'end_url': ['/', 'String to append to end of URL.'],
            'html_class': ['wikilink', 'CSS hook. Leave blank for none.'],
            'build_url': [build_url, 'Callable formats URL from label.'],
        }

        super().__init__(**kwargs)

    def extendMarkdown(self, md):
        self.md = md
        # append to end of inline patterns
        WIKILINK_RE = r'\[\[\s?(\w+\:?[\w0-9_-]+)\s?\]\]'
        wikilinkPattern = WikiLinksInlineProcessor(WIKILINK_RE, self.getConfigs())
        wikilinkPattern.md = md
        md.inlinePatterns.register(wikilinkPattern, 'wikilink', 75)


def get_anchors(value: str) -> List[Tuple[str, int]]:
    pattern = r'^(#{1,6}[ ]*\s*[\S]+)'
    matches = re.findall(pattern, value, flags=(re.IGNORECASE | re.MULTILINE | re.DOTALL))
    out = []
    for match in matches:
        level = match.count('#')
        val = match.replace('#', '')
        val = val.replace('*', '')
        while val.startswith(' '):
            val = val[1:]
        out.append((val, level))

    return out


@register.filter
def markdown_to_html(value):
    anchors = get_anchors(value)
    out_val = ''
    if isinstance(value, str):
        out_val = markdown.markdown(value, extensions=[
            'markdown.extensions.fenced_code',
            'markdown.extensions.extra',
            'markdown.extensions.codehilite',
            MyWikiLinkExtension(base_url='/wiki/', build_url=build_url)
        ])

    for anchor in anchors:
        # adds id attributes to headers to enable scrolling in DOM using #title
        pattern = r'<h[1-6]{1}>' + anchor[0] + '</h[1-6]{1}>'
        out_val = re.sub(
            pattern,
            f'<h{anchor[1]} id="{anchor[0]}">{anchor[0]}</h{anchor[1]}>',
            out_val,
            flags=(re.IGNORECASE | re.DOTALL)
        )

    return out_val


@register.filter
def hash(dic, key):
    if dic is not None:
        return dic[key]


@register.filter
def gen_diff(a, b):
    diff = ''.join(ndiff([i + '\n' for i in str(a).split('\n')], [i + '\n' for i in str(b).split('\n')]))
    return diff


@register.filter
def format_diff(value):
    backslash = "\n"
    values = [
        f'<span style="color: '
        f'{"red" if i.startswith("-") else "green" if (i.startswith("+") or i.startswith("?")) else "black"}'
        f'">{i[:-1] if i.endswith(backslash) else i}</span><br/>'
        for i in value.split(backslash)]
    return ''.join(values)


@register.filter
def strip_text(value):
    # (REMOVE <SCRIPT> to </script> and variations)
    pattern = r'<[ ]*script.*?\/[ ]*script[ ]*>'  # mach any char zero or more times
    text = re.sub(pattern, '', value, flags=(re.IGNORECASE | re.MULTILINE | re.DOTALL))

    # (REMOVE HTML <STYLE> to </style> and variations)
    pattern = r'<[ ]*style.*?\/[ ]*style[ ]*>'  # mach any char zero or more times
    text = re.sub(pattern, '', text, flags=(re.IGNORECASE | re.MULTILINE | re.DOTALL))

    # (REMOVE HTML <META> to </meta> and variations)
    pattern = r'<[ ]*meta.*?>'  # mach any char zero or more times
    text = re.sub(pattern, '', text, flags=(re.IGNORECASE | re.MULTILINE | re.DOTALL))

    # (REMOVE HTML COMMENTS <!-- to --> and variations)
    pattern = r'<[ ]*!--.*?--[ ]*>'  # mach any char zero or more times
    text = re.sub(pattern, '', text, flags=(re.IGNORECASE | re.MULTILINE | re.DOTALL))

    # (REMOVE HTML DOCTYPE <!DOCTYPE html to > and variations)
    pattern = r'<[ ]*\![ ]*DOCTYPE.*?>'  # mach any char zero or more times
    text = re.sub(pattern, '', text, flags=(re.IGNORECASE | re.MULTILINE | re.DOTALL))

    pattern = r'\n'  # mach any char zero or more times
    value = re.sub(pattern, '', text, flags=(re.IGNORECASE | re.MULTILINE | re.DOTALL))
    cleanr = re.compile('<.*?>')
    cleantext = re.sub(cleanr, '', value)
    cleantext = cleantext.replace('#', '')
    cleantext = cleantext.replace('*', '')
    cleantext = cleantext.replace('_', '')
    cleantext = cleantext.replace('`', '')
    cleantext = cleantext.replace('\r', '')
    cleantext = cleantext.replace('\n', '')
    return cleantext


@register.filter
def shorten(value, length):
    return value[:length]


@register.filter
def dir_val(value):
    print(dir(value))
    return value
