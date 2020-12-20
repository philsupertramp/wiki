from unittest import mock

from django.contrib.auth.models import User, Group
from django.test import TestCase

from elements.helpers import render_with_tags, is_mod_user
from elements.models import Tag


class HelpersTestCase(TestCase):
    @classmethod
    def setUpTestData(cls):
        super().setUpTestData()
        cls.tag = Tag.objects.create(name='C++')

    @mock.patch('elements.helpers.render')
    def test_render_with_tags(self, render_mock):
        render_with_tags(mock.Mock(), 'elements/post_list.html', {})

        render_mock.assert_called_once()
        self.assertIn('tags', render_mock.call_args[1]['context'])
        self.assertIn(self.tag, render_mock.call_args[1]['context']['tags'])
        self.assertEqual(render_mock.call_args[1]['context']['tags'].count(), 1)

    def test_post_save_user_signal(self):
        user = User.objects.create_user(username='foo', password='bar')
        user.groups.add(Group.objects.create(name='Mods'))
        user.save()

        self.assertTrue(user.is_superuser)
        self.assertTrue(user.is_staff)

    def test_is_mod_user(self):
        user = User.objects.create_user(username='foo', password='bar')
        user.groups.add(Group.objects.create(name='Mods'))
        user.save()

        self.assertTrue(is_mod_user(user))
