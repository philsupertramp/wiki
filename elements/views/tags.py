from django.contrib.auth.decorators import login_required
from django.shortcuts import get_object_or_404, redirect, render

from elements.forms import TagForm
from elements.helpers import render_with_tags
from elements.models import Tag


def tag_list(request):
    """
    view to list all posts
    """
    tags = Tag.objects.all()
    return render(request, 'tags/tag_list.html', {'tags': tags})


def tag_detail(request, pk):
    "view to detail a Tag"

    tag = get_object_or_404(Tag, pk=pk)
    return render_with_tags(request, 'tags/tag_detail.html', {'tag': tag})


@login_required()
def tag_new(request):
    """view to create a new Tag"""

    if request.method == "POST":
        form = TagForm(request.POST)
        if form.is_valid():
            tag = form.save(commit=False)
            tag.save()
            return redirect('tag_detail', pk=tag.pk)
    else:
        form = TagForm()
    return render_with_tags(request, 'tags/tag_edit.html', {'form': form})


@login_required()
def tag_edit(request, pk):
    """view to edit a existing Tag"""

    tag = get_object_or_404(Tag, pk=pk)
    if request.method == "POST":
        form = TagForm(request.POST, instance=tag)
        if form.is_valid():
            tag = form.save(commit=False)
            tag.save()
            return redirect('tag_detail', pk=tag.pk)
    else:
        form = TagForm(instance=tag)
    return render_with_tags(request, 'tags/tag_edit.html', {'form': form})


@login_required()
def tag_delete(request, pk):
    """view to delete a Tag"""

    tag = get_object_or_404(Tag, pk=pk)
    tag.delete()
    return redirect("tag_list")
