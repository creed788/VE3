from django.urls import path
from . import views
from .views import PlotView

urlpatterns = [
    path('', views.upload_csv, name='upload_csv'),
     path('plots/', PlotView.as_view(), name='plots'),   
]
