import os
from django.contrib.sitemaps import Sitemap
from django.conf import settings
from django.urls import reverse

from pages.models import Page


class StaticSitemap(Sitemap):
    protocol = 'https'

    def items(self):
        return ['page_list', ]

    def location(self, item):
        return reverse(item)


class PageSitemap(Sitemap):
    protocol = 'https'
    changefreq = 'weekly'
    priority = 0.8

    def items(self):
        return Page.objects.filter(is_published=True).order_by('-edited_at')

    def lastmod(self, obj):
        return obj.edited_at

    def location(self, item):
        return reverse('page_detail', kwargs={'slug': item.slug})
