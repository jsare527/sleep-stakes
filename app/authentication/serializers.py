from rest_framework import serializers
from .models import User
from .models import Hangout


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ("id", "username", "profile_pic")
        read_only_fields = ("username",)


class HangoutSerializer(serializers.ModelSerializer):
    created_by = UserSerializer(read_only=True)
    members = UserSerializer(many=True, read_only=True)
    members_count = serializers.SerializerMethodField()

    class Meta:
        model = Hangout
        fields = (
            "id",
            "name",
            "description",
            "created_by",
            "created_at",
            "is_active",
            "members",
            "members_count",
        )
        read_only_fields = ("created_by", "created_at", "is_active", "id", "members")

    def get_members_count(self, obj):
        return obj.members.count()
