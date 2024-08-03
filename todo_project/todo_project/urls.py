from tasks.views import (
    UserRegister,
    UserAuth,
    AddTask,
    )
from django.urls import path


urlpatterns = [
    path('api/register/', UserRegister.as_view(), name='register'),
    path('api/login/', UserAuth.as_view(), name='login'),
    path('api/tasks/', AddTask.as_view(), name='task'),
]
