from django.apps import AppConfig


class ElementsConfig(AppConfig):
    name = 'elements'
    verbose_name = 'Elements'

    def ready(self):
        from .signals import post_m2m_changed_user, post_save_user
        super().ready()
