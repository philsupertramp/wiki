from django.shortcuts import render

from elements.models import Tag


def render_with_tags(request, template, context):
    context.update({'tags': Tag.objects.all()})
    return render(request, template, context=context)
