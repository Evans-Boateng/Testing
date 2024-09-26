from django.shortcuts import render
from rest_framework import generics, mixins
from .models import  Note, User
from rest_framework.response import Response
from .serializers import  NoteSerializer, CreateUserSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated

# Create your views here.

class CreateUserView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = CreateUserSerializer
    permission_classes = [AllowAny]


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


