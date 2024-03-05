from rest_framework.views import Request, Response
from nikki_backend.base_views import NikkiAPIView
from .models import NikkiImage
from .serializers import NikkiImageSerializer


class GalleryView(NikkiAPIView):

    def get(self, req:Request, *args, **kwargs):
        imgs = NikkiImage.objects.filter(is_active=True)
        serializer = NikkiImageSerializer(instance=imgs, many=True)

        return Response ({'imgs':serializer.data})