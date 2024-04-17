# from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.renderers import JSONRenderer, JSONOpenAPIRenderer
from rest_framework.throttling import AnonRateThrottle, UserRateThrottle
from rest_framework.views import APIView, Request, Response

from rest_framework_simplejwt.authentication import JWTAuthentication


class NikkiAPIView(APIView):

    authentication_classes = []
    permission_classes = [AllowAny]
    throttle_classes = [AnonRateThrottle, UserRateThrottle]
    

class NikkiAPIAuthView(NikkiAPIView):

    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]