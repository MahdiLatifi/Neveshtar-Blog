from rest_framework import generics, status
from rest_framework.response import Response
from django.contrib.auth import login, logout, authenticate

from .serializers import SignupSerializer, LoginSerializer


class SignupView(generics.CreateAPIView):
    serializer_class = SignupSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(
            {
                'success': True,
                'message': 'حساب کاربری شما با موفقیت ایجاد شد! 🎉'
            },
            status=status.HTTP_201_CREATED)


class LoginView(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        login(request, serializer.validated_data['user'])
        return Response({
            'success': True,
            'message': 'با موفقیت وارد شدید! 🎉'
        })
