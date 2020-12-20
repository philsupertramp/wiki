from unittest import mock

from django.contrib.auth.models import User
from django.test import TestCase
from django.urls import reverse
from django.utils import timezone

from elements.models import Post, Tag


class PostTestCase(TestCase):
    @classmethod
    def setUpTestData(cls):
        super().setUpTestData()
        cls.user = User.objects.create_superuser('User', password='password')

    def setUp(self) -> None:
        self.post_title = '____WHAT?!'
        self.post = Post.objects.create(author=self.user, title=self.post_title, content='123')

    def test_retrieve(self):
        self.client.force_login(self.user)
        url = reverse('post_detail', kwargs={'pk': self.post.id})

        response = self.client.get(url)

        self.assertEqual(response.status_code, 200)
        self.assertIn(self.post_title, str(response.content))

        url = reverse('post_detail', kwargs={'pk': 999999999999999})

        response = self.client.get(url)

        self.assertEqual(response.status_code, 404)

    def test_create(self):
        self.client.force_login(self.user)
        url = reverse('post_new')
        content = 'FOOOO'
        title = 'test123'
        tag = Tag.objects.create(name='Foo')

        response = self.client.post(url, data={'title': title, 'tags': [tag.id], 'content': content})

        self.assertEqual(response.status_code, 302, response.content)
        self.assertTrue(Post.objects.filter(author=self.user, title=title).exists())

    def test_retrieve_creation_form(self):
        tag = Tag.objects.create(name='Foo')
        self.client.force_login(self.user)
        url = reverse('post_new')

        response = self.client.get(url)

        self.assertTrue(response.status_code, 200)
        self.assertIn(tag.name, str(response.content))

    def test_retrieve_edit_form(self):
        tag = Tag.objects.create(name='Foo')
        post = Post.objects.create(author=self.user, title='foo')
        self.client.force_login(self.user)
        url = reverse('post_edit', kwargs={'pk': post.id})

        response = self.client.get(url)

        self.assertTrue(response.status_code, 200)
        self.assertIn(tag.name, str(response.content))

    def test_delete(self):
        post_1 = Post.objects.create(title='1', content='1', author=self.user)
        post_2 = Post.objects.create(title='2', content='2', author=self.user)
        post_3 = Post.objects.create(title='3', content='3')

        # authenticated
        url = reverse('post_delete', kwargs={'pk': post_1.id})
        self.client.force_login(self.user)
        response = self.client.get(url)
        self.client.logout()

        self.assertEqual(response.status_code, 302)
        self.assertFalse(Post.objects.filter(id=post_1.id).exists())

        # unauthenticated
        url = reverse('post_delete', kwargs={'pk': post_2.id})
        response = self.client.get(url)

        self.assertEqual(response.status_code, 302)
        self.assertTrue(Post.objects.filter(id=post_2.id).exists())

        # authenticated wrong user
        url = reverse('post_delete', kwargs={'pk': post_3.id})
        self.client.force_login(self.user)
        response = self.client.get(url)
        self.client.logout()

        self.assertEqual(response.status_code, 302)
        self.assertTrue(Post.objects.filter(id=post_3.id).exists())

    def test_post_list(self):
        Post.objects.create(published_date=timezone.now(), author=self.user, title=self.post_title, content='123')
        url = reverse('post_list')

        self.client.force_login(self.user)
        response = self.client.get(url)

        self.assertEqual(response.status_code, 200)
        self.assertIn(self.post.title, str(response.content))

    def test_edit(self):
        content = 'FOOOO'
        title = 'test123'
        tag = Tag.objects.create(name='Foo')
        post = Post.objects.create(author=self.user, content=content, title=title)
        post.tags.set([tag])
        new_title = 'Test 123'
        new_content = '# Foooo'

        self.client.force_login(self.user)

        url = reverse('post_edit', kwargs={'pk': post.id})

        response = self.client.post(url, data={'title': new_title, 'content': new_content, 'tags': [tag.id]})

        self.assertEqual(response.status_code, 302)

        post = Post.objects.get(id=post.id)
        self.assertEqual(new_title, post.title)
        self.assertEqual(new_content, post.content)

    def test_filter(self):
        tag = Tag.objects.create(name='C++')
        post = Post.objects.create(author=self.user)
        post.tags.set([tag])
        expected_url = reverse('post_detail', kwargs={'pk': post.id})

        url = reverse('post_filter', kwargs={'string': 'C++'})
        response = self.client.get(url)

        self.assertIn(expected_url, str(response.content))

    def test_filter_author(self):
        post = Post.objects.create(author=self.user)
        expected_url = reverse('post_detail', kwargs={'pk': post.id})

        url = reverse('post_author', kwargs={'author': self.user.username})
        response = self.client.get(url)

        self.assertIn(expected_url, str(response.content))
