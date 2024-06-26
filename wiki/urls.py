from django.contrib import admin
from django.conf import settings
from django.urls import re_path, path, include
from django.conf.urls.static import static
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

    path('sitemap.xml', sitemap, {'sitemaps': sitemaps}, name='django.contrib.sitemaps.views.sitemap'),

    path(r'admin/', admin.site.urls),
    re_path(r'', include('pages.urls')),
    re_path(r'', include('elements.urls')),
    re_path(r'^mdeditor/', include('mdeditor.urls')),

    # accounting urls
    path('accounts/', include('django.contrib.auth.urls')),
    path('accounts/register', elements_views.register_view, name='register_view'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
