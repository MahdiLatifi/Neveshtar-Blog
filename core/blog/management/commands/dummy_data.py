from django.core.management.base import BaseCommand
from django.core.files import File
from django.conf import settings
from faker import Faker
from random import choice, sample

from accounts.models import User, Profile, Skill
from blog.models import Category, Post, Tag

category_list = ['برنامه ‌نویسی', 'توسعه وب', 'توسعه اپلیکیشن موبایل', 'طراحی سایت', 'امنیت', 'هوش مصنوعی', ]
tag_list = [
    'جاوا', 'پایتون', 'جاوااسکریپت', 'الگوریتم', 'گیت', 'پایگاه داده ', 'django', 'swift', 'mysql', 'ری‌اکت', 'اندروید'
]


class Command(BaseCommand):
    help = "Insertin dummy data"

    def __init__(self):
        super().__init__()
        self.faker = Faker('fa_IR')

    def add_arguments(self, parser):
        parser.add_argument('--count', type=int)

    def handle(self, *args, **options):
        user, is_created = User.objects.get_or_create(
            email='test@test.com',
            password='test124!',
        )

        profile = Profile.objects.get(user=user)
        if is_created:
            skills = [Skill.objects.get_or_create(name=word)[0] for word in
                      str(self.faker.sentence(nb_words=5)).split(' ')]

            profile.first_name = str(self.faker.first_name())
            profile.last_name = str(self.faker.last_name())

            image_path = settings.BASE_DIR / f'static/images/main-author.jpg'

            with open(image_path, 'rb') as f:
                profile.image.save(
                    f'author.jpg',
                    File(f),
                    save=True
                )


            profile.description = str(self.faker.paragraph(nb_sentences=5))
            profile.my_story = str(self.faker.paragraph(nb_sentences=50))
            profile.skills.set(skills)
            profile.is_main_writer = True
            profile.save()
            user.save()

        for name in category_list:
            Category.objects.get_or_create(name=name)

        tags = []
        for tag_name in tag_list:
            tag, _ = Tag.objects.get_or_create(name=tag_name)
            tags.append(tag)


        for _ in range(options['count'] or 10):
            post = Post.objects.create(
                title=str(self.faker.sentence(nb_words=8)),
                content=str(self.faker.paragraph(nb_sentences=50)),
                user=profile,
                estimated_reading_time=15,
                published_at=self.faker.date_time(),
                category=Category.objects.get(name=choice(category_list)),
                is_featured=True,
                status='published',
            )

            image_number = self.faker.random_int(min=1, max=6)
            image_path = settings.BASE_DIR / f'static/images/post-{image_number}.jpg'

            with open(image_path, 'rb') as f:
                post.image.save(
                    f'post-{image_number}.jpg',
                    File(f),
                    save=True
                )

            post.tags.set(sample(tags, 3))
