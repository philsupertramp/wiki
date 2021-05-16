from django.shortcuts import render


def blog(request, path):
    return render(request, f'blog_build/{path}/index.html')

def blog_tags(request, path):
    return render(request, f'blog_build/tags/{path}/index.html')


def blog_home(request):
    return render(request, f'blog_build/index.html')

