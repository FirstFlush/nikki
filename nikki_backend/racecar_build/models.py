from django.db import models


class NikkiImage(models.Model):
    """
    date_photo displays the date the picture was actually taken.
    date_created is the picture's update date.
    """
    caption         = models.CharField(max_length=255, blank=True, default='')
    description     = models.TextField(blank=True, default='')
    image           = models.ImageField(upload_to='images/build/', unique=True)
    is_active       = models.BooleanField(default=True)
    date_photo      = models.DateField(blank=True, null=True)
    date_created    = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.image.path