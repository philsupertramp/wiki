import os

from django.conf import settings
from django.http import HttpResponse
from django.shortcuts import render


def blog(request, path):
    if '.' in path:
        if path.split('.')[-1].lower() in ['jpg', 'png', 'ico']:
            with open(os.path.join(settings.BASE_DIR, f'templates/blog_build/{path}'), 'rb') as file:
                content = file.read()
                return HttpResponse(content, content_type='application/octet-stream')
        return render(request, f'blog_build/{path}')
    return render(request, f'blog_build/{path}/index.html')


def blog_tags(request, path):
    return render(request, f'blog_build/tags/{path}/index.html')


def blog_home(request):
    return render(request, 'blog_build/index.html')


def blog_sitemap(request):
    return HttpResponse(open(os.path.join(settings.BASE_DIR, 'templates/blog_build/sitemap.xml')).read(), content_type='text/xml')
