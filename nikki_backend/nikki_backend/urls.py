from django.conf import settings
from django.conf.urls.static import static
from django.urls import include, path
from admin_site import admin_site
from . import views

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [
    path('api/zzzyx_nikkiadmin/', admin_site.urls),
    # path('', views.ComingSoonView.as_view(), name='coming_soon'),
    # path('api/test', views.TestView.as_view(), name='test'),
    path('api/subscribe/', views.SubscribeView.as_view(), name='subscribe'),
    path('api/nikki/', include('racecar_build.urls')),
    # path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
