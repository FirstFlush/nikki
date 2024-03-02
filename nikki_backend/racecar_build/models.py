from django.db import models


class Subscriber(models.Model):

    email = models.EmailField(max_length=255, unique=True)
    date_created = models.DateTimeField(auto_now_add=True)

    # class Meta:
    #     verbose_name = 'Mailing List'
    #     verbose_name_plural = 'Subscribers'

    def __str__(self) -> str:
        return self.email
    