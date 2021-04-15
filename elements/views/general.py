from elements.helpers import render_with_tags
from elements.models import Post


def home(request):
    """index view"""
    news = Post.objects.all().order_by('-published_date')
    return render_with_tags(request, 'wiki/home.html', {'news': news})
