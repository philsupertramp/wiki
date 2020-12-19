from django.urls import re_path, path, include
from . import views

urlpatterns = [
    path(r'', views.home, name='home'),
    
    # post urls
    path(r'post/', views.post_list, name='post_list'),
    re_path(r'^post/list/(?P<string>[\w\-"+"]+)/$', views.post_filter, name='post_filter'),
    re_path(r'^post/author/(?P<author>[A-Za-z0-9_"+"]+)/$', views.post_author, name='post_author'),
    re_path(r'^post/(?P<pk>\d+)/$', views.post_detail, name='post_detail'),
    path(r'post/new/', views.post_new, name='post_new'),
    re_path(r'^post/(?P<pk>\d+)/edit/$', views.post_edit, name='post_edit'),
    re_path(r'^post/(?P<pk>\d+)/delete/$', views.post_delete, name='post_delete'),
    
    # accounting urls
    path('accounts/', include('django.contrib.auth.urls')),
]
