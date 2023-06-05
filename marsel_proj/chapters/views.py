from django.shortcuts import render
from .models import Animals13, Colors13
from django.views.generic import DetailView

# Create your views here.
def age12view(request):
    return render(request, 'chapters.html', {})

class Animals13View(DetailView):
    template_name = 'tasks.html'
    context_object_name = 'info'
    model = Animals13
    
    
class Colors13View(DetailView):
    template_name = 'tasks.html'
    context_object_name = 'info'
    model = Colors13
    