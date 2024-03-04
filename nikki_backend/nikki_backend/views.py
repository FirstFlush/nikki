from nikki_backend.base_views import NikkiAPIView
from rest_framework.views import Request, Response


from django.shortcuts import render
from rest_framework.views import Response, Request
from nikki_backend.base_views import NikkiAPIView
from account.serializers import EmailSerializer


class ComingSoonView(NikkiAPIView):

    def get(self, req:Request, *args, **kwargs):
        return Response({'get':'gah'})


class EmailSubscribeView(NikkiAPIView):

    def post(self, req:Request, *args, **kwargs):
        serializer = EmailSerializer(data=req.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
        return Response({'bleh':'blah'})


class TestView(NikkiAPIView):

    def get(self, req:Request, *args, **kwargs):
        print('hohihhi')
        return Response({"Ok":"All Good"})