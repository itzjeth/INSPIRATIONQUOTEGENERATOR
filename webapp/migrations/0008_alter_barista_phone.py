# Generated by Django 4.2.6 on 2023-12-08 11:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webapp', '0007_alter_breakdancer_phone_alter_rapper_phone_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='barista',
            name='phone',
            field=models.CharField(blank=True, max_length=13),
        ),
    ]
