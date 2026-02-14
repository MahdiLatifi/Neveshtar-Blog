from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from .users import User
from .skills import Skill


class Profile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    image = models.ImageField(null=True, blank=True)
    description = models.TextField()
    my_story = models.TextField(default="")
    skills = models.ManyToManyField(Skill)
    is_main_writer = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.user.email

    @property
    def full_name(self):
        return self.first_name + ' ' + self.last_name


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)
