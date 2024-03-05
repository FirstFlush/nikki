from rest_framework import serializers
from .models import NikkiImage

class NikkiImageSerializer(serializers.ModelSerializer):

    img = serializers.CharField(source='image.url', read_only=True)
    date = serializers.DateField(source='date_photo', read_only=True)

    class Meta:
        model = NikkiImage
        fields = [
            'img',
            'caption',
            'description',
            'date',
        ]