from django.contrib import admin

# Register your models here.
from pages.models import Page, PageHistory


class PageHistoryInline(admin.TabularInline):
    model = PageHistory
    extra = 0

    def has_add_permission(self, request, obj):
        return False

    has_delete_permission = has_add_permission


class PageAdmin(admin.ModelAdmin):
    inlines = [PageHistoryInline]


admin.site.register(Page, PageAdmin)
admin.site.register(PageHistory)
