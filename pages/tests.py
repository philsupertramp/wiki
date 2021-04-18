from django.contrib.auth.models import User
from django.test import TestCase
from django.urls import reverse
from django.utils.text import slugify

from pages.models import Page


class PageTestCase(TestCase):
    @classmethod
    def setUpTestData(cls):
        cls.user = User.objects.create_superuser('User', password='password')
        cls.page = Page.objects.create(author=cls.user, title='Foo Bar 123', content='My foo')

    def test_str_representation(self):
        page = Page(author=self.user, title='Foo Bar')
        self.assertEqual(str(page), 'Page: Foo Bar')

    def test_slug_generation(self):
        self.assertEqual(self.page.slug, 'foo-bar-123')

    def test_page_update(self):
        title = 'Rewrite'
        slug = 'Enforce-this-slug'
        url = reverse('page_update', args=[self.page.slug])
        self.client.force_login(self.user)

        response = self.client.post(url, data={'title': title, 'slug': slug, 'content': self.page.content}, follow=True)

        self.assertEqual(response.status_code, 200)
        page = Page.objects.get(pk=self.page.pk)
        self.assertEqual(page.editor, self.user)
        self.assertEqual(page.title, title)
        self.assertEqual(page.slug, slugify(slug))

    def test_page_creation(self):
        content = 'FOOOO'
        title = 'test123'
        url = reverse('page_create')
        self.client.force_login(self.user)

        response = self.client.post(url, data={'title': title, 'content': content}, follow=True)

        self.assertEqual(response.status_code, 200)
        self.assertIn(title, str(response.content))
        page = Page.objects.filter(title=title, content=content).first()
        self.assertEqual(page.author_id, self.user.id)

        response = self.client.post(url, data={'title': title, 'content': content}, follow=True)

        self.assertEqual(response.status_code, 200)
        self.assertIn('alert alert-danger', str(response.content))
        self.assertIn('Slug is not unique', str(response.content))

        response = self.client.post(url, data={'title': '', 'content': content}, follow=True)

        self.assertEqual(response.status_code, 200)
        self.assertIn('alert alert-danger', str(response.content))
        self.assertIn('This field is required.', str(response.content))

    def test_page_listing(self):
        self.client.force_login(self.user)

        url = reverse('page_list')
        response = self.client.get(url)

        self.assertEqual(response.status_code, 200)
        self.assertIn(self.page.title, str(response.content))

    def test_page_history_listing(self):
        self.client.force_login(self.user)
        page = Page.objects.create(title='123', slug='___123', author=self.user)

        page.title = 'New title'
        page.save()

        url = reverse('page_history', kwargs={'slug': page.slug})
        response = self.client.get(url)

        self.assertEqual(response.status_code, 200)
        self.assertIn('title', str(response.content))

    def test_page_history_detail(self):
        self.client.force_login(self.user)
        old_title = '123'
        page = Page.objects.create(title=old_title, slug='___123', author=self.user)

        page.title = 'New title'
        page.save()

        url = reverse('page_history_detail', kwargs={'slug': page.slug, 'pk': page.pagehistory_set.last().id})
        response = self.client.get(url)

        self.assertEqual(response.status_code, 200)
        self.assertIn(old_title, str(response.content))
