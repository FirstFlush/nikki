from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager


class MyAccountManager(BaseUserManager):

    def create_user(self, email, password=None):
        if not email:
            raise ValueError('User must have a valid email address!')

        user = self.model(
            email = self.normalize_email(email),
        )
        user.set_password(password)
        user.save(using=self._db)
        return user
    

    def create_superuser(self, email, password):
        user = self.create_user(
            email = self.normalize_email(email),
            password = password,
        )
        user.is_admin = True
        user.is_active = True
        user.is_staff = True
        user.is_superadmin = True
        user.save(using=self._db)
        return user


class Account(AbstractBaseUser):
    # username            = models.CharField(max_length=255, unique=True)
    email               = models.EmailField(max_length=255, unique=True)
    company             = models.CharField(max_length=255, blank=True, null=True)
    mailing_list        = models.BooleanField(default=False)
    # Required by Django:
    date_joined         = models.DateTimeField(auto_now_add=True)
    last_login          = models.DateTimeField(auto_now=True)
    is_admin            = models.BooleanField(default=False)
    is_staff            = models.BooleanField(default=False)
    is_active           = models.BooleanField(default=False)
    is_superadmin       = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = MyAccountManager()

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return self.is_admin

    def has_module_perms(self, add_label):
        return True



class Subscriber(models.Model):

    name            = models.CharField(max_length=255)
    email           = models.EmailField(max_length=255, unique=True)
    phone           = models.CharField(max_length=255)
    is_active       = models.BooleanField(default=False)
    comments        = models.TextField(null=True, blank=True)
    date_created    = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.email
    
