from django.contrib.auth import get_user_model
from django.contrib.auth.models import Group
from django.db.models.signals import post_save, m2m_changed
from django.dispatch import receiver


@receiver(signal=post_save, sender=get_user_model())
def post_save_user(sender, instance, created, *args, **kwargs):
    mod_user_save(sender, instance, created, *args, **kwargs)


@receiver(signal=m2m_changed, sender=get_user_model().groups.through)
def post_m2m_changed_user(sender, instance, action, *args, **kwargs):
    mod_user_save(sender, instance, False, *args, **kwargs)


def mod_user_save(sender, instance, created, *args, **kwargs):
    if created or (kwargs.get('update_fields') and 'is_superuser' in kwargs.get('update_fields', [])):
        return

    mod_group = Group.objects.get_or_create(
        name='Mods'
    )[0]
    if mod_group in instance.groups.all():
        instance.is_superuser = True
        instance.is_staff = True
        instance.save(update_fields=['is_superuser', 'is_staff'])
