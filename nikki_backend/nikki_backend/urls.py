from django.conf import settings
from django.conf.urls.static import static
from django.urls import include, path
from admin_site import admin_site
from . import views


urlpatterns = [
    path('admin/', admin_site.urls),
    # path('', views.ComingSoonView.as_view(), name='coming_soon'),
    path('api/subscribe/', views.EmailSubscribeView.as_view(), name='subscribe'),
    # path('build/', include('racecar_build.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
