from nikki_backend.base_views import NikkiAPIView
from rest_framework.views import Request, Response


class HomeView(NikkiAPIView):

    def get(self, request:Request, *args, **kwargs):

        return Response(data={"Status":"Under construction"}, status=200)