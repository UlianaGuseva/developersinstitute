"""
URL configuration for marsel project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from chapters.views import age12view, Animals13View, Colors13View, homePageView, Animals13ViewAll, Colors13ViewAll

urlpatterns = [
    path('admin/', admin.site.urls),
    path('1-2/', age12view, name="1-2years"),
    path('1-2/animals/<int:pk>', Animals13View.as_view(), name="1-2years-animals-one"),
    path('1-2/colors/<int:pk>', Colors13View.as_view(), name="1-2years-colors-one"),
    path('3-4/', age12view, name="3-4years"),
    path('5-6/', age12view, name="5-6years"),
    path('', homePageView, name="home"),
    path('1-2/animals/', Animals13ViewAll.as_view(), name="all_animals"),
    path('1-2/colors/', Colors13ViewAll.as_view(), name="all_colors"),
    
    
]
