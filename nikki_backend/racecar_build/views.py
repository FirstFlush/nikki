from django.http import HttpRequest
from rest_framework.views import Response
from nikki_backend.base_views import NikkiAPIView
from .models import NikkiImage
from .serializers import NikkiImageSerializer


class GalleryView(NikkiAPIView):

    def get(self, req:HttpRequest, *args, **kwargs):
        imgs = NikkiImage.objects.filter(is_active=True)
        context = {
            'req':req,
        }
        serializer = NikkiImageSerializer(instance=imgs, context=context, many=True)

        print(req.build_absolute_uri('asdffdsa'))
        print('+'*80)
        return Response ({'imgs':serializer.data})