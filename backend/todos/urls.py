from . import views
from django.urls import path

urlpatterns = [
    path('', views.ListTodo.as_view()),
    path('<int:pk>', views.DetailTodo.as_view())
]