from django.urls import path
from django.views.generic import RedirectView

from . import views

urlpatterns = [
    path('', RedirectView.as_view(url='/wiki', permanent=True)),
    path('wiki/', views.PageListView.as_view(), name='page_list'),
    path('wiki/create/', views.PageCreateView.as_view(), name='page_create'),
    path('wiki/<slug:slug>/', views.PageDetailView.as_view(), name='page_detail'),
    path('wiki/<slug:slug>/edit/', views.PageUpdateView.as_view(), name='page_update'),
    path('wiki/<slug:slug>/history/', views.PageHistoryListView.as_view(), name='page_history'),
    path('wiki/<slug:slug>/history/<int:pk>/', views.PageHistoryDetailView.as_view(), name='page_history_detail'),
]
