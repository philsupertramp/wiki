import re
from typing import List, Tuple

import markdown
from django import template
from difflib import ndiff

register = template.Library()


def get_anchors(value: str) -> List[Tuple[str, int]]:
    pattern = r'^(#{1,6}[ ]*\s*[\S]+)'
    matches = re.findall(pattern, value, flags=(re.IGNORECASE | re.MULTILINE | re.DOTALL))
    out = []
    for match in matches:
        level = match.count('#')
        val = match.replace('#', '')
        while val.startswith(' '):
            val = val[1:]
        out.append((val, level))

    return out


@register.filter
def markdown_to_html(value):
    anchors = get_anchors(value)
    out_val = ''
    if isinstance(value, str):
        out_val = markdown.markdown(value)

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
