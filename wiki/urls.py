from django.contrib import admin
from django.urls import re_path, path, include
from elements import views as elements_views
from wiki.sitemaps import StaticSitemap, PageSitemap
from django.contrib.sitemaps.views import sitemap

sitemaps = {
    'static': StaticSitemap,
    'pages': PageSitemap,
}

urlpatterns = [
    # Examples:
    # url(r'^$', 'wiki.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    path(r'admin/', admin.site.urls),
    re_path(r'', include('elements.urls')),
    re_path(r'', include('pages.urls')),
    re_path(r'^markdownx/', include('markdownx.urls')),
    path('sitemap.xml', sitemap, {'sitemaps': sitemaps}, name='django.contrib.sitemaps.views.sitemap'),

    # accounting urls
    path('accounts/', include('django.contrib.auth.urls')),
    path('accounts/register', elements_views.register_view, name='register_view'),
]
