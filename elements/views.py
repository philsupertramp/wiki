from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout, login
from django.shortcuts import render, get_object_or_404, redirect
from django.core.urlresolvers import reverse
from django.utils import timezone
from .models import Post
from .forms import PostForm
# Create your views here.

def home(request):
	return render(request, 'wiki/home.html', {})

def post_list(request):
	posts = Post.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
	return render(request, 'elements/post_list.html', {'posts': posts})


def post_detail(request, pk):
	post = get_object_or_404(Post, pk=pk)
	return render(request, 'elements/post_detail.html', {'post':post})


@login_required(login_url='/login/')
def post_new(request):
    if request.method == "POST":
        form = PostForm(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            post.author = request.user
            post.published_date = timezone.now()
            post.save()
            return render('post_detail', pk=post.pk)
    else:
        form = PostForm()
    return render(request, 'elements/post_edit.html', 
{'form':form})


@login_required(login_url='/login/')
def post_edit(request, pk):
    post = get_object_or_404(Post, pk=pk)
    if request.method == "POST":
        form = PostForm(request.POST, instance=post)
        if form.is_valid():
            post = form.save(commit=False)
            post.author = request.user
            post.published_date = timezone.now()
            post.save()
            return reverse('post_detail', pk=post.pk)
    else:
        form = PostForm(instance=post)
    return render(request, 'elements/post_edit.html', {'form': form})


def logout_view(request):
	logout(request)
	return render(request, 'wiki/home.html', {})

def login_view(request):
	form = AuthenticationForm(instance=post)
	return render(request, 'registration/login.html', {'form': form})
