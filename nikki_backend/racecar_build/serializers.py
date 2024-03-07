from django.http import HttpRequest
from rest_framework import serializers
from .models import NikkiImage

class NikkiImageSerializer(serializers.ModelSerializer):

    # img_url = serializers.CharField(source='image.url', read_only=True)
    img_url = serializers.SerializerMethodField()
    img_url_thumb = serializers.SerializerMethodField()
    date = serializers.DateField(source='date_photo', read_only=True)

    class Meta:
        model = NikkiImage
        fields = [
            'img_url',
            'img_url_thumb',
            'caption',
            'description',
            'date',
        ]



    # def build_url(self, obj:NikkiImage, ):
    #     request:HttpRequest = self.context.get('req')
    #     if request and obj.image:
    #         return request.build_absolute_uri(obj.image.url)
    #     else:
    #         return obj.image.url if obj.image else ''
        


    def get_img_url(self, obj:NikkiImage):
        request:HttpRequest = self.context.get('req')
        if request and obj.image:
            return request.build_absolute_uri(obj.image.url)
        else:
            return obj.image.url if obj.image else ''


    def get_img_url_thumb(self, obj:NikkiImage):
        request:HttpRequest = self.context.get('req')
        if request and obj.image_thumb:
            return request.build_absolute_uri(obj.image_thumb.url)
        else:
            return obj.image_thumb.url if obj.image else ''
        

