# Generated by Django 5.0.2 on 2024-03-05 06:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('racecar_build', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='nikkiimage',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
    ]
