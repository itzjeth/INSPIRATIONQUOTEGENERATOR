from django.urls import path
from .models import BookAuthor, BookTitle, Category, Copy, Publisher
from . import views

urlpatterns = [
    path ('', views.home, name="homePage"),
    path ('about/', views.about, name="aboutPage"),
    path ('service/', views.skills, name="servicePage"),
    path ('contact/', views.projexts, name="contactPage"),
    
]