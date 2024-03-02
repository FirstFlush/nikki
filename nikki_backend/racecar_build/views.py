from django.shortcuts import render
from rest_framework.views import Response, Request
from nikki_backend.base_views import NikkiAPIView
from .serializers import EmailSerializer


class ComingSoonView(NikkiAPIView):

    def get(self, req, *args, **kwargs):
        return Response({'get':'gah'})


    def post(self, request:Request, *args, **kwargs):
        print('in post')
        serializer = EmailSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()

        return Response({'bleh':'blah'})

