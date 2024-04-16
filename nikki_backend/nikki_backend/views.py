from nikki_backend.base_views import NikkiAPIView
from rest_framework.views import Request, Response, status

from django.shortcuts import render
from rest_framework.views import Response, Request
from nikki_backend.base_views import NikkiAPIView
from account.serializers import SubscriberSerializer


class ComingSoonView(NikkiAPIView):

    def get(self, req:Request, *args, **kwargs):
        return Response({})


class SubscribeView(NikkiAPIView):

    def post(self, req:Request, *args, **kwargs):

        serializer = SubscriberSerializer(data=req.data)
        if serializer.is_valid():
            serializer.save()

        return Response(status=status.HTTP_400_BAD_REQUEST)

