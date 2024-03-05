from django.contrib import admin
from admin_site import admin_site
from .models import NikkiImage


class NikkiImageAdmin(admin.ModelAdmin):

    list_display = [
        'is_active',
        'image',
        'date_created',
    ]

    list_filter = [
        'is_active',
    ]


admin_site.register(NikkiImage, NikkiImageAdmin)