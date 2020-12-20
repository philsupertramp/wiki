from django.contrib.auth.models import User
from django.test import TestCase
from django.urls import reverse
from django.utils import timezone

from elements.models import Post, Tag


class GeneralViewTestCase(TestCase):
    @classmethod
    def setUpTestData(cls):
        cls.user = User.objects.create_user(username='test', password='123')
        tag = Tag.objects.create(name='News 123')
        cls.post = Post.objects.create(title='123', content='qwertz', published_date=timezone.now())
        cls.post.tags.set([tag])

    def test_home(self):
        url = reverse('home')

        response = self.client.get(url)

        self.assertEqual(response.status_code, 200)
        self.assertIn(self.post.title, str(response.content))
