from django.shortcuts import render, redirect
from django.contrib.auth import authenticate
from rest_framework.views import Request, Response, status
from nikki_backend.base_views import NikkiAPIView

from .serializers import LoginSerializer


class LoginView(NikkiAPIView):

    def post(self, request:Request, *args, **kwargs):

        serializer = LoginSerializer(data=request.data)

        print(request.data)

        if serializer.is_valid():
            user = authenticate(
                request, 
                email=serializer.validated_data['email'], 
                password=serializer.validated_data['password']
            )
            if user:
                return Response(status=status.HTTP_204_NO_CONTENT)
            else:
                return Response(status=status.HTTP_401_UNAUTHORIZED)

        return Response(status=status.HTTP_400_BAD_REQUEST)
    

class LogoutView(NikkiAPIView):

    def post(self, request:Request, *args, **kwargs):
        ...