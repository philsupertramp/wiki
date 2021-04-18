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
    object = None

    def post(self, request, *args, **kwargs):
        self.object = self.get_object()
        form = self.get_form(PageForm)
        form.user = request.user
        if form.is_valid():
            return self.form_valid(form)
        else:
            return self.form_invalid(form)
