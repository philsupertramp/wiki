from django.test import TestCase
from django.utils import timezone

from elements.models import Post, Tag, TagGroup


class ModelRepresentationMixin:
    example_object = None
    expected_representation = None

    def test_representation(self):
        assert self.example_object, "Needs example object, created in `setUpTestData`"
        assert self.expected_representation, "Needs representation string!"

        self.assertEqual(self.expected_representation, str(self.example_object))


class PostRepresentationTestCase(ModelRepresentationMixin, TestCase):
    @classmethod
    def setUpTestData(cls):
        super().setUpTestData()
        title = 'foo'
        cls.example_object = Post.objects.create(title=title)
        cls.expected_representation = title


class TagRepresentationTestCase(ModelRepresentationMixin, TestCase):
    @classmethod
    def setUpTestData(cls):
        super().setUpTestData()
        group_name = 'Bar'
        name = 'foo'
        cls.example_object = Tag.objects.create(name=name, group=TagGroup.objects.create(name=group_name))
        cls.expected_representation = f'{group_name}: {name}'


class TagGroupRepresentationTestCase(ModelRepresentationMixin, TestCase):
    @classmethod
    def setUpTestData(cls):
        super().setUpTestData()
        group_name = 'Bar'
        cls.example_object = TagGroup.objects.create(name=group_name)
        cls.expected_representation = f'Tag group: {group_name}'


class PostModelTestCase(TestCase):
    @classmethod
    def setUpTestData(cls):
        super().setUpTestData()
        cls.post = Post.objects.create(title='123')

    def test_publish(self):
        self.post.publish()

        self.assertLess((timezone.now() - self.post.published_date).seconds, 1)
