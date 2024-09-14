from django.urls import path

from .views import NoteCreateView, NotesListView

urlpatterns = [
    
    path('api/notecreate/', NoteCreateView.as_view(), name='note-create'),
    path('api/notes/', NotesListView.as_view(), name='notes-list'),
]