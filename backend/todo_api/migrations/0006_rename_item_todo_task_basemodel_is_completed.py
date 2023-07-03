# Generated by Django 4.1.5 on 2023-06-30 09:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo_api', '0005_remove_basemodel_active'),
    ]

    operations = [
        migrations.RenameField(
            model_name='todo',
            old_name='item',
            new_name='task',
        ),
        migrations.AddField(
            model_name='basemodel',
            name='is_completed',
            field=models.BooleanField(default=False),
        ),
    ]
