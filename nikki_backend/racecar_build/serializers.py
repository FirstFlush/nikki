from rest_framework import serializers
from .models import Subscriber


class EmailSerializer(serializers.ModelSerializer):

    # email = serializers.EmailField(max_length=255)
    class Meta:
        model = Subscriber
        fields = [
            'email',
        ]