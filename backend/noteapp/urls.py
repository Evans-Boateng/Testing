from django.urls import path

from .views import *

urlpatterns = [
    
    path('api/notecreate/', NoteCreateView.as_view(), name='note-create'),
    path('api/notes/', NotesListView.as_view(), name='notes-list'),
    path('api/updatedelete/<str:pk>/', UpdateDeleteView.as_view(), name='update-delete'),
]