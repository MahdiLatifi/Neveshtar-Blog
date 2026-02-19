from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status

from .serializers import NewsletterSerializer


class NewsletterCreateView(generics.CreateAPIView):
    serializer_class = NewsletterSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response({
            'success': True,
            'message': 'ایمیل شما با موفقیت ثبت شد!'
        }, status=status.HTTP_201_CREATED)