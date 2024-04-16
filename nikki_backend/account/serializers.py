from rest_framework import serializers
from account.models import Subscriber, Account


class LoginSerializer(serializers.Serializer):

    email = serializers.EmailField(max_length=255)
    password = serializers.CharField(max_length=255)


class SubscriberSerializer(serializers.ModelSerializer):

    class Meta:
        model = Subscriber
        fields = [
            'email',
            'name',
            'phone',
            'comments',
        ]