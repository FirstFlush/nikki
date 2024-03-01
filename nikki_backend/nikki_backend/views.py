from nikki_backend.base_views import NikkiAPIView
from rest_framework.views import Request, Response


class HomeView(NikkiAPIView):

    def get(self, request:Request, *args, **kwargs):

        print('hihihi nikki')

        return Response({"Bleh":"Blob"})