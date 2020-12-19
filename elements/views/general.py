from django.shortcuts import redirect

from elements.helpers import render_with_tags
from elements.models import Post


def re(request):
    return redirect('home')


def home(request):
    """index view"""
    news = Post.objects.filter(tags__name__icontains="News").order_by('published_date')
    news = news.reverse()
    return render_with_tags(request, 'wiki/home.html', {'news': news})
