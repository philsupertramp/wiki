from django.db.models import Q
from django.shortcuts import get_object_or_404
from django.views.generic import ListView, DetailView, CreateView, UpdateView
from django.contrib.auth.mixins import LoginRequiredMixin


from pages.forms import PageForm
from pages.models import Page, PageHistory


class PageListView(ListView):
    queryset = Page.objects.filter(is_published=True)
    template_name = 'pages/page_list.html'
    model = Page
    ordering = '-created_at'


class PageHistoryListView(ListView):
    template_name = 'pages/page_history_list.html'
    model = PageHistory
    ordering = '-created_at'

    def get_queryset(self):
        if self.request.user.is_authenticated:
            return super().get_queryset().filter(page__slug=self.kwargs.get('slug'))

        return super().get_queryset().filter(page__slug=self.kwargs.get('slug'), page__is_published=True)


class PageHistoryDetailView(DetailView):
    template_name = 'pages/page_history_detail.html'
    model = PageHistory

    def get_object(self, queryset=None):
        if self.request.user.is_authenticated:
            obj = PageHistory.objects.filter(pk=self.kwargs.get('pk'))
            return obj.first() if obj.exists() else None
        obj = PageHistory.objects.filter(pk=self.kwargs.get('pk'), page__is_published=True)

        return obj.first() if obj.exists() else None


class PageDetailView(DetailView):
    template_name = 'pages/page_detail.html'
    model = Page
    slug_field = 'slug'

    def get_queryset(self):
        qs = super().get_queryset()
        if self.request.user.is_authenticated:
            return qs

        return qs.filter(is_published=True)

    def get_object(self, queryset=None):
        if self.request.user.is_authenticated:
            obj = get_object_or_404(Page, slug=self.kwargs.get('slug'))
            return obj

        return get_object_or_404(Page, Q(slug=self.kwargs.get('slug'), is_published=True))


class PageCreateView(LoginRequiredMixin, CreateView):
    template_name = 'pages/page_edit.html'
    model = Page
    form_class = PageForm
    object = None

    def post(self, request, *args, **kwargs):
        form = self.get_form(PageForm)
        if form.is_valid():
            form.user = request.user
            return self.form_valid(form)
        else:
            return self.form_invalid(form)


class PageUpdateView(LoginRequiredMixin, UpdateView):
    template_name = 'pages/page_edit.html'
    model = Page
    form_class = PageForm
    object = None

    def post(self, request, *args, **kwargs):
        self.object = self.get_object()
        form = self.get_form(PageForm)
        if form.is_valid():
            form.user = request.user
            return self.form_valid(form)
        else:
            return self.form_invalid(form)
