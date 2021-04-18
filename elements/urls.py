from django.urls import re_path, path
from . import views

urlpatterns = [
    # post urls
    path(r'posts/', views.post_list, name='post_list'),
    re_path(r'^posts/list/(?P<string>[^\/]+)/$', views.post_filter, name='post_filter'),
    re_path(r'^posts/author/(?P<author>[A-Za-z0-9_+]+)/$', views.post_author, name='post_author'),
    re_path(r'^posts/(?P<pk>\d+)/$', views.post_detail, name='post_detail'),
    path(r'posts/new/', views.post_new, name='post_new'),
    re_path(r'^posts/(?P<pk>\d+)/edit/$', views.post_edit, name='post_edit'),
    re_path(r'^posts/(?P<pk>\d+)/delete/$', views.post_delete, name='post_delete'),
    
    # tag urls
    path(r'tags/', views.tag_list, name='tag_list'),
    re_path(r'^tags/(?P<pk>\d+)/$', views.tag_detail, name='tag_detail'),
    path(r'tags/new/', views.tag_new, name='tag_new'),
    re_path(r'^tags/(?P<pk>\d+)/edit/$', views.tag_edit, name='tag_edit'),
    re_path(r'^tags/(?P<pk>\d+)/delete/$', views.tag_delete, name='tag_delete'),

]
