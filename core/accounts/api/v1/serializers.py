from rest_framework import serializers

from accounts.models import User


class SignupSerializer(serializers.ModelSerializer):
    password1 = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)
    first_name = serializers.CharField(write_only=True)
    last_name = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['email', 'password1', 'password2', 'first_name', 'last_name']

    def validate(self, data):
        password1 = data.get('password1')
        password2 = data.get('password2')
        if password1 != password2:
            raise serializers.ValidationError({'password': 'password must be equal'})
        return data

    def create(self, validated_data):
        user = User.objects.create_user(email=validated_data['email'], password=validated_data['password1'])
        user.profile.first_name = validated_data['first_name']
        user.profile.last_name = validated_data['last_name']
        user.profile.save()
        return user
