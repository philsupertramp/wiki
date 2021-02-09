from django.contrib.auth.decorators import login_required
from django.shortcuts import get_object_or_404, redirect
from django.utils import timezone

from elements.forms import PostForm
from elements.helpers import render_with_tags
from elements.models import Post


def post_list(request):
    """
    view to list all posts
    """
    posts = Post.objects.filter(published_date__lte=timezone.now()).order_by('-published_date')
    return render_with_tags(request, 'elements/post_list.html', {'posts': posts})


def post_filter(request, string):
    posts = Post.objects.filter(tags__name=string).order_by('-published_date')

    return render_with_tags(request, 'elements/post_list.html', {'posts': posts})


def post_author(request, author):
    posts = Post.objects.filter(author__username=author)
    return render_with_tags(request, 'elements/post_list.html', {'posts': posts})


def post_detail(request, pk):
    "view to detail a post"

    post = get_object_or_404(Post, pk=pk)
    return render_with_tags(request, 'elements/post_detail.html', {'post': post})


@login_required(login_url='/accounts/login/')
def post_new(request):
    """view to create a new post"""

    if request.method == "POST":
        data = {
            'text': request.POST.get('content'),
            'content': request.POST.get('content'),
            'title': request.POST.get('title'),
            'tags': list(request.POST.getlist('tags'))
        }
        tags = [int(i) for i in list(request.POST.getlist('tags'))]
        form = PostForm(data)
        if form.is_valid():
            post = form.save(commit=False)
            post.author = request.user
            post.published_date = timezone.now()
            post.save()
            post.tags.set(tags)
            return redirect('post_detail', pk=post.pk)
    else:
        form = PostForm()
    return render_with_tags(request, 'elements/post_edit.html', {'form': form})


@login_required(login_url='/accounts/login/')
def post_edit(request, pk):
    """view to edit a existing post"""

    post = get_object_or_404(Post, pk=pk)
    if request.method == "POST":
        data = {
            'text': request.POST.get('content'),
            'content': request.POST.get('content'),
            'title': request.POST.get('title'),
            'tags': [int(i) for i in list(request.POST.getlist('tags'))]
        }
        form = PostForm(data, instance=post)
        if form.is_valid():
            post = form.save(commit=True)
            post.edit_date = timezone.now()
            post.save()
            return redirect('post_detail', pk=post.pk)
    else:
        form = PostForm(instance=post)
    return render_with_tags(request, 'elements/post_edit.html', {'form': form})


@login_required(login_url='/accounts/login')
def post_delete(request, pk):
    """view to delete a post"""

    post = get_object_or_404(Post, pk=pk)
    if request.user == post.author:
        post.delete()
        return redirect("post_list")
    return redirect("post_list")

