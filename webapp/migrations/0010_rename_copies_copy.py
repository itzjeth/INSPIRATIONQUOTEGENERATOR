# Generated by Django 4.2.6 on 2023-12-08 11:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('webapp', '0009_bookauthor_booktitle_category_copies_publisher_and_more'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Copies',
            new_name='Copy',
        ),
    ]
