# Generated by Django 4.1.5 on 2023-06-30 09:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0004_rename_phone_number_todouser_phone_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todouser',
            name='last_name',
            field=models.CharField(max_length=30, null=True),
        ),
    ]
