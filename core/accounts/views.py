from django.shortcuts import render, redirect
from django.views.decorators.http import require_POST
from django.http.response import JsonResponse
from django.db import IntegrityError
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.decorators import login_required

from .models import User


# Create your views here.
@require_POST
def signup_view(request):
    data = request.POST
    if data.get('password1') != data.get('password2'):
        return JsonResponse({
            'success': False,
            'errors': 'رمز عبور ها باید یکسان باشند'
        })

    try:
        user = User.objects.create_user(data.get('email'), data.get('password1'))
        user.first_name = data.get('first_name')
        user.last_name = data.get('last_name')
        user.save()
        return JsonResponse({
            'success': True,
            'message': 'حساب کاربری شما با موفقیت ایجاد شد! 🎉'
        })
    except IntegrityError:
        return JsonResponse({
            'success': False,
            'errors': 'این ایمیل قبلاً ثبت شده است.'
        })

def logout_view(request):
    logout(request)
    return redirect('index')
