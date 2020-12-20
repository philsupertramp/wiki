from django.test import TestCase
from django.urls import reverse


class AuthTestCase(TestCase):
    def test_register(self):
        url = reverse('register_view')
        username = 'testUser'
        password = '123qwerts.'

        response = self.client.post(url, data={'username': username, 'password1': password, 'password2': password})

        self.assertEqual(response.status_code, 302)
        self.client.login(username=username, password=password)

    def test_retrieve_register(self):
        url = reverse('register_view')

        response = self.client.get(url)

        self.assertEqual(response.status_code, 200)
