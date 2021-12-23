from django.conf import settings
from django.core.management.base import BaseCommand
from django.contrib.auth.models import User


class Command(BaseCommand):

    def handle(self, *args, **options):
        if User.objects.count() == 0:
            username = 'root'
            email = 'root@root.root'
            password = 'root'
            print('Creating account for %s (%s)' % (username, email))
            admin = User.objects.create_superuser(username, email, password)
            admin.save()
        else:
            print('Admin accounts can only be initialized if no Accounts exist')
