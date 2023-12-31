from django.db import models
from user.models import TodoUser

# Create your models here.
class BaseModel(models.Model):
    is_completed = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

class DeletedManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(is_deleted=False)


class Todo(BaseModel):
    user = models.ForeignKey(TodoUser, on_delete=models.CASCADE)
    task = models.CharField(max_length=108)
    is_deleted =  models.BooleanField(default=False)

    # objects = DeletedManager()
    # all_objects = models.Manager()

    def __str__(self):
        return self.item