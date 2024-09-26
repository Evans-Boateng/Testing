from django.db import models
from django.contrib.auth.models import AbstractUser, AbstractBaseUser, BaseUserManager

class UserManager(BaseUserManager):
    def create_user(self, name, email, password=None):
        if not email:
            raise ValueError("Users must have an email address")
        
        user = self.model(
            email = self.normalize_email(email),
            name = name
        )

        user.set_password(password)
        user.save()
        return user
    
    # def create_superuser(self, email, password=None, **extra_fields):
    #     extra_fields.setdefault('is_staff', True)
    #     extra_fields.setdefault('is_superuser', True)
    #     return self.create_user(email, password, **extra_fields)

class User(AbstractBaseUser):
    name = models.CharField(max_length=100, unique=True)
    email = models.EmailField(unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    objects = UserManager()

    def __str__(self):
        return self.name

    
class Note(models.Model):
    title = models.CharField(max_length=100, unique=True)
    content = models.TextField()
    category = models.CharField(max_length=100)
    completed = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
