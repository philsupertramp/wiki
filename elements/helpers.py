from django.contrib.auth.models import Group
from django.shortcuts import render

from elements.models import Tag


def render_with_tags(request, template, context):
    context.update({'tags': Tag.objects.all()})
    return render(request, template, context=context)


def is_mod_user(user) -> bool:
    mod_group = Group.objects.get_or_create(name='Mods')[0]
    return mod_group in user.groups.all()
