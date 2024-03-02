from django.contrib import admin
from admin_site import admin_site
from .models import Subscriber


class SubscriberAdmin(admin.ModelAdmin):

    list_display = [
        'email',
        'date_created',
    ]

    search_fields = [
        'email',
    ]


admin_site.register(Subscriber, SubscriberAdmin)