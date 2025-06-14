from rest_framework import viewsets, generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.generics import RetrieveAPIView

from .models import User
from .models import Hangout
from .serializers import UserSerializer
from .serializers import HangoutSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]


class UserLogin(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(
            data=request.data, context={"request": request}
        )
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        token = Token.objects.get(user=user)
        return Response({"token": token.key, "id": user.pk, "username": user.username})


class HangoutListCreateViewActive(generics.ListCreateAPIView):
    serializer_class = HangoutSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return (
            Hangout.objects.filter(is_active=True)
            .select_related("created_by")
            .prefetch_related("members")
        )

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)


class HangoutListCreateViewInactive(generics.ListCreateAPIView):
    serializer_class = HangoutSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return (
            Hangout.objects.filter(is_active=False)
            .select_related("created_by")
            .prefetch_related("members")
        )

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)


class HangoutDetailView(RetrieveAPIView):
    queryset = Hangout.objects.select_related('created_by').prefetch_related('members')
    serializer_class = HangoutSerializer
    permission_classes = [IsAuthenticated]


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def check_auth(request):
    return Response(
        {
            "id": request.user.id,
            "username": request.user.username,
        }
    )
