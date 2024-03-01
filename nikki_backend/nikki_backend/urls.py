
# from django.contrib import admin
from django.urls import include, path
from admin_site import admin_site
from . import views


urlpatterns = [
    path('admin/', admin_site.urls),
    path('', views.HomeView.as_view(), name='home'),
    path('build/', include('racecar_build.urls')),
]
