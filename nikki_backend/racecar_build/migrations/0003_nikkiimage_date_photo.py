# Generated by Django 5.0.2 on 2024-03-05 07:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('racecar_build', '0002_nikkiimage_is_active'),
    ]

    operations = [
        migrations.AddField(
            model_name='nikkiimage',
            name='date_photo',
            field=models.DateField(blank=True, null=True),
        ),
    ]
