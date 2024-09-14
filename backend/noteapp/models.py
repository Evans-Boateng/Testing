from django.db import models

    
class Note(models.Model):
    title = models.CharField(max_length=100, unique=True)
    content = models.TextField()
    category = models.CharField(max_length=100)
    completed = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
