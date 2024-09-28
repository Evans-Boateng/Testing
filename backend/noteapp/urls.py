from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from .views import *

urlpatterns = [
    
    path('api/notecreate/', NoteCreateView.as_view(), name='note-create'),
    path('api/notes/', NotesListView.as_view(), name='notes-list'),
    path('api/updatedelete/<str:pk>/', UpdateDeleteView.as_view(), name='update-delete'),
    path('api/usercreate/', CreateUserView.as_view(), name='createuser'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token-refresh'),
    path('api/token/', LoginView.as_view(), name="access-token")
]