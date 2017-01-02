from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout, login, forms
from django.shortcuts import render, get_object_or_404, redirect
from django.core.urlresolvers import reverse
from django.utils import timezone
from django.http import Http404
from .models import Post
from .forms import PostForm
# Create your views here.


"""
        POST VIEWS
"""


def post_list(request):
    """
    view to list all posts
    """
    if Post.objects.all():
       
        posts = Post.objects.filter(published_date__lte=timezone.now()).order_by('-published_date')
        return render(request, 'elements/post_list.html', {'posts': posts})
    else:
         raise Http404("No matching objects, you need to create new Post-objects.")

def post_filter(request, tag):
    posts = Post.objects.filter(tags=tag)
    return render(request, 'elements/post_list.html',{'posts':posts})

def post_detail(request, pk):
    
    "view to detail a post"
    
    post = get_object_or_404(Post, pk=pk)
    return render(request, 'elements/post_detail.html', {'post':post})


@login_required(login_url='/login/')
def post_new(request):
    
    "view to create a new post"
    
    if request.method == "POST":
        form = PostForm(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            post.author = request.user
            post.published_date = timezone.now()
            post.save()
            return redirect('post_detail', pk=post.pk)
    else:
        form = PostForm()
    return render(request, 'elements/post_edit.html', {'form':form})


@login_required(login_url='/login/')
def post_edit(request, pk):
    
    "view to edit a existing post"
    
    post = get_object_or_404(Post, pk=pk)
    if request.method == "POST":
        form = PostForm(request.POST, instance=post)
        if form.is_valid():
            post = form.save(commit=False)
            post.author = request.user
            post.published_date = timezone.now()
            post.save()
            return redirect('post_detail',pk=post.pk)
    else:
        form = PostForm(instance=post)
    return render(request, 'elements/post_edit.html', {'form': form})

def post_delete(request, pk):
    
    "view to delete a post"
    
    post = get_object_or_404(Post, pk=pk)
    if request.method == "GET":
        post.delete()
        return redirect("post_list")
    else:
        form = PostForm()
    context ={'form': form, 'delete': False}
    return render(request, 'post/post_edit.html', context)


"""

            ACCOUNTING VIEWS

"""

def login_view(request):

    "Login View"

    form = AuthenticationForm(instance=post)
    return render(request, 'registration/login.html', {'form': form})


def logout_view(request):
    
    "Logout view"
    
    logout(request)
    return render(request, 'wiki/home.html', {})

def register_view(request):
    "registration view"
    if request.method == 'POST':
        form = forms.UserCreationForm(data=request.POST)
        if form.is_valid():
            user = form.save()
            return redirect('/login')
    else:
        form = forms.UserCreationForm()
    return render(request, 'registration/register.html',{
        'form': form,
        })


"""
        GENERAL VIEWS
"""

def re(request):
    return redirect('home')



def home(request):
    "index view"
    news = Post.objects.filter(tags="News").order_by('published_date')
    return render(request, 'wiki/home.html', {'news':news})
