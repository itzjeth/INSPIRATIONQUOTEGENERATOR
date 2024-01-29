from django.db import models

# Create your models here.
class BookAuthor (models.Model):
    full_name = models.CharField(max_length=50, null=True)
    age = models.IntegerField(null=True)
    phone = models.CharField(max_length=15, blank=True)
    email = models.EmailField(max_length=33, blank=True) 
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.full_name
    
class BookTitle (models.Model):
    author = models.ForeignKey(BookAuthor, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=50, null=True)
    description = models.CharField(max_length=50, null=True)
    photo = models.ImageField(upload_to='BookTitle/', blank=True)
    release_date = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title
    
class Category (models.Model):
    category_type = models.CharField(max_length=33, null=True)
    title = models.CharField(max_length=50, null=True)
    description = models.CharField(max_length=43, null=True) 
    release_date = models.DateTimeField(auto_now_add=True)
     
    def __str__(self):
        return self.category_type
    
class Copy (models.Model):
    num_of_copies = models.CharField(max_length=33, null=True)
    title = models.CharField(max_length=50, null=True)
    description = models.CharField(max_length=43, null=True)
    release_date = models.DateTimeField(auto_now_add=True)
    media_file = models.FileField(upload_to='Copies/', blank=True)
    def __str__(self):
        return self.num_of_copies
    
class Publisher (models.Model):
    name = models.CharField(max_length=43, null=True)
    phone = models.CharField(max_length=13, blank=True)
    email = models.EmailField(max_length=33, blank=True) 

    def __str__(self):
        return self.name
 
    



