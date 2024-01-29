from django.contrib import admin
from .models import BookAuthor, BookTitle, Category, Copy, Publisher



admin.site.register(BookAuthor)
admin.site.register(BookTitle)
admin.site.register(Category)
admin.site.register(Copy)
admin.site.register(Publisher)