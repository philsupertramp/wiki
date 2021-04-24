import re

import markdown
from django import template
from difflib import unified_diff, Differ, HtmlDiff, ndiff

register = template.Library()


@register.filter
def markdown_to_html(value):
    if isinstance(value, str):
        return markdown.markdown(value)


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
    values = [f'<span style="color: {"red" if i.startswith("-") else "green" if (i.startswith("+") or i.startswith("?")) else "black"}">{i[:-1] if i.endswith(backslash) else i}</span><br/>' for i in value.split(backslash)]
    return ''.join(values)


@register.filter
def strip_text(value):
    cleanr = re.compile('<.*?>')
    cleantext = re.sub(cleanr, '', value)
    cleantext = cleantext.replace('#', '')
    cleantext = cleantext.replace('*', '')
    cleantext = cleantext.replace('_', '')
    return cleantext


@register.filter
def shorten(value, length):
    return value[:length]