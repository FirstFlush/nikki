# Generated by Django 5.0.2 on 2024-03-03 21:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('racecar_build', '0002_rename_mailinglist_subscriber'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Subscriber',
        ),
    ]
