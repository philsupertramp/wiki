from django.conf.urls import url
from django.contrib.auth import views as auth_views
from . import views

urlpatterns = [
    #general urls
    url(r'^$', views.home, name='home'),
    
    
    #post urls
    url(r'^post/$', views.post_list, name='post_list'),
    url(r'^post/list/(?P<tag>[A-Za-z0-9_-]+)/$', views.post_filter, name='post_filter'),
    url(r'^post/author/(?P<author>[A-Za-z0-9_-]+)/$', views.post_author, name='post_author'),
    url(r'^post/(?P<pk>\d+)/$', views.post_detail, name='post_detail'),
    url(r'^post/new/$', views.post_new, name='post_new'),
    url(r'^post/(?P<pk>\d+)/edit/$', views.post_edit, name='post_edit'),
    url(r'^post/(?P<pk>\d+)/delete/$', views.post_delete, name='post_delete'),
    
    #accounting urls
    url(r'^login/$', auth_views.login),
    url(r'^logout/$', views.logout_view),
    url(r'^registration/$', views.register_view, name='register_view'),
    url(r'^accounts/profile/$', views.re,name='re'),
]
