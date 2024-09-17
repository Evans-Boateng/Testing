from django.shortcuts import render
from rest_framework import generics, mixins
from .models import  Note
from rest_framework.response import Response
from .serializers import  NoteSerializer

# Create your views here.

class NoteCreateView(generics.CreateAPIView): 
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

class NotesListView(generics.ListAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

    # def get_queryset(self):
    #     return Note.objects.filter(user=self.request.user)

class UpdateDeleteView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer


