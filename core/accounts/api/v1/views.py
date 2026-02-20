from rest_framework import generics, status
from rest_framework.response import Response

from .serializers import SignupSerializer


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
