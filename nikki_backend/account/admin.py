from django.contrib import admin
from admin_site import admin_site
from .models import *


class AccountAdmin(admin.ModelAdmin):

    list_display = [
        'email',
        'is_active',
        'is_staff',
        'is_admin',
        'last_login',
        'date_joined',
    ]

    search_fields = [
        'email',
    ]


admin_site.register(Account, AccountAdmin)