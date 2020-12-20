from django.contrib.auth.models import User
from django.test import TestCase
from django.urls import reverse

from elements.models import Tag, TagGroup


class TagsTestCase(TestCase):
    @classmethod
    def setUpTestData(cls):
        super().setUpTestData()
        cls.user = User.objects.create_user(username='foo', password='bar')
        cls.group = TagGroup.objects.create(name='QWERTZ')

    def test_list(self):
        tag = Tag.objects.create(name='Foo', group=self.group)

        url = reverse('tag_list')
        response = self.client.get(url)

        self.assertEqual(response.status_code, 200)
        self.assertIn(tag.name, str(response.content))

    def test_detail(self):
        tag = Tag.objects.create(name='Foo', group=self.group)

        url = reverse('tag_detail', kwargs={'pk': tag.id})
        response = self.client.get(url)

        self.assertEqual(response.status_code, 200)
        self.assertIn(tag.name, str(response.content))

    def test_new(self):
        self.client.force_login(self.user)
        name = 'Foo bar'

        url = reverse('tag_new')
        response = self.client.post(url, data={'name': name, 'group': self.group.id})

        self.assertEqual(response.status_code, 302)

        self.assertTrue(Tag.objects.filter(name=name).exists())

    def test_new_retrieve(self):
        self.client.force_login(self.user)

        url = reverse('tag_new')
        response = self.client.get(url)

        self.assertEqual(response.status_code, 200)

    def test_edit(self):
        tag = Tag.objects.create(name='Foo', group=self.group)
        new_name = 'Bar'

        self.client.force_login(self.user)
        url = reverse('tag_edit', kwargs={'pk': tag.id})
        response = self.client.post(url, data={'name': new_name, 'group': self.group.id})

        self.assertEqual(response.status_code, 302)
        tag = Tag.objects.get(id=tag.id)
        self.assertEqual(new_name, tag.name)

    def test_edit_retrieve(self):
        name = 'Bar'
        tag = Tag.objects.create(name=name, group=self.group)

        self.client.force_login(self.user)
        url = reverse('tag_edit', kwargs={'pk': tag.id})
        response = self.client.get(url)

        self.assertEqual(response.status_code, 200)
        self.assertIn(name, str(response.content))

    def test_delete(self):
        tag = Tag.objects.create(name='Foo', group=self.group)
        url = reverse('tag_delete', kwargs={'pk': tag.id})

        response = self.client.get(url)
        self.assertEqual(response.status_code, 302)
        self.assertTrue(Tag.objects.filter(id=tag.id).exists())

        self.client.force_login(self.user)
        response = self.client.get(url)
        self.assertEqual(response.status_code, 302)
        self.assertFalse(Tag.objects.filter(id=tag.id).exists())
