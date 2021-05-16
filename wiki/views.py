from django.shortcuts import render


def blog(request, path):
    return render(request, f'blog/public/{path}/index.html')

def blog_tags(request, path):
    return render(request, f'blog/public/tags/{path}/index.html')


def blog_home(request):
    return render(request, f'blog/public/index.html')

