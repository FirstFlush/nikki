from django.contrib import admin


class NikkiRacingAdmin(admin.AdminSite):

    site_header = "Nikki Racing Admin Panel"
    site_title = "Nikki Racing"
    index_title = "Nikki Racing"

admin_site = NikkiRacingAdmin(name='nikki_racing_admin')
