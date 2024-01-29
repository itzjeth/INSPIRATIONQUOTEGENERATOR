from django.http import HttpResponse
from django.shortcuts import render


def home(request):
    return render(request, template_name= 'pages/home.html')

def about(request):
    return render(request, template_name= 'pages/about.html')

def skills(request):
     return render(request, template_name= 'pages/service.html')

def projexts(request):
    return render(request, template_name= 'pages/contact.html')

