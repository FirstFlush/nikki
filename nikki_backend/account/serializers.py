from rest_framework import serializers
from account.models import Subscriber


class SubscriberSerializer(serializers.ModelSerializer):

    

    class Meta:
        model = Subscriber
        fields = [
            'email',
            'name',
            'phone',
            'comments',
        ]