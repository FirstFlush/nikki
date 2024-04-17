from django.http import HttpRequest
from rest_framework.views import Response

from nikki_backend.base_views import NikkiAPIView, NikkiAPIAuthView
from .models import NikkiImage
from .serializers import NikkiImageSerializer


class GalleryView(NikkiAPIAuthView):

    def get(self, req:HttpRequest, *args, **kwargs):
        imgs = NikkiImage.objects.filter(is_active=True)
        context = {
            'req':req,
        }
        serializer = NikkiImageSerializer(instance=imgs, context=context, many=True)

        return Response ({'imgs':serializer.data})