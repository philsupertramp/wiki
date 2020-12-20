from unittest import mock

from django.contrib.auth.models import User
from django.test import TestCase
from django.urls import reverse

from elements.models import Post, Tag


class PostTestCase(TestCase):
    @classmethod
    def setUpTestData(cls):
        super().setUpTestData()
        cls.user = User.objects.create_superuser('User', password='password')

    def setUp(self) -> None:
        self.post = Post.objects.create(author=self.user, title='____WHAT?!', content='123')

    def test_create(self):
        self.client.force_login(self.user)
        url = reverse('post_new')
        content = 'FOOOO'
        title = 'test123'

        response = self.client.post(url, data={'title': title, 'tags': 'Test 123', 'content': content})

        self.assertEqual(response.status_code, 302)
        self.assertTrue(Post.objects.filter(author=self.user, title=title).exists())

    def test_delete(self):
        self.client.force_login(self.user)
        url = reverse('post_delete', kwargs={'pk': self.post})

        response = self.client.get(url)

        self.assertEqual(response.status_code, 302)

        self.assertFalse(Post.objects.filter(id=self.post.id).exists())

    def test_edit(self):
        pass

    @mock.patch('elements.helpers.render')
    def test_filter(self, render_mock):
        tag = Tag.objects.create(name='C++')
        post = Post.objects.create(author=self.user)
        post.tags.set([tag])
        url = reverse('post_filter', kwargs={'string': 'C++'})
        self.client.get(url)
        render_mock.assert_called_once()
        self.assertEqual(render_mock.call_args[1], 'C++')

    def test_filter_author(self):
        pass


