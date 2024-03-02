from django.conf import settings
from django.conf.urls.static import static
from django.urls import include, path
from admin_site import admin_site
from . import views
from racecar_build.views import ComingSoonView

urlpatterns = [
    path('admin/', admin_site.urls),
    path('', ComingSoonView.as_view(), name='home'),
    path('build/', include('racecar_build.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
