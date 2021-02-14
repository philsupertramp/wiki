from django.urls import path

from . import views

urlpatterns = [
    path('wiki/', views.PageListView.as_view(), name='page_list'),
    path('wiki/create/', views.PageCreateView.as_view(), name='page_create'),
    path('wiki/<slug:slug>/', views.PageDetailView.as_view(), name='page_detail'),
    path('wiki/<slug:slug>/edit', views.PageUpdateView.as_view(), name='page_update'),
]
