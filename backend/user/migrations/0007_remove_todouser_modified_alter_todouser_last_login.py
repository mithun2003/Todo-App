# Generated by Django 4.1.5 on 2023-06-30 09:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0006_alter_todouser_last_name'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='todouser',
            name='modified',
        ),
        migrations.AlterField(
            model_name='todouser',
            name='last_login',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
