# Generated by Django 4.1.7 on 2023-03-25 05:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='item',
            name='author',
        ),
        migrations.AddField(
            model_name='item',
            name='added_user',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='item',
            name='time',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
    ]
