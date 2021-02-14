from django.db import IntegrityError
from django.views.generic import ListView, DetailView, CreateView, UpdateView

from pages.forms import PageForm
from pages.models import Page


class PageListView(ListView):
    template_name = 'pages/page_list.html'
    model = Page


class PageDetailView(DetailView):
    template_name = 'pages/page_detail.html'
    model = Page
    slug_field = 'slug'


class PageCreateView(CreateView):
    template_name = 'pages/page_edit.html'
    model = Page
    form_class = PageForm


class PageUpdateView(UpdateView):
    template_name = 'pages/page_edit.html'
    model = Page
    form_class = PageForm
