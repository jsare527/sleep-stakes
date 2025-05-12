from rest_framework import serializers
from .models import User
from .models import Hangout


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name')
        read_only_fields = ('username', )


class HangoutSerializer(serializers.ModelSerializer):
    created_by = serializers.ReadOnlyField(source='created_by.username')
    class Meta:
        model = Hangout
        fields = ('id', 'name', 'description', 'created_by', 'created_at', 'is_active')
        read_only_fields = ('created_by', 'created_at', "is_active", "id")
