from django.shortcuts import render
from rest_framework import generics, mixins
from .models import  Note
from rest_framework.response import Response
from .serializers import  NoteSerializer

# Create your views here.

class NoteCreateView(generics.CreateAPIView): 
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

class NotesListView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    # def get_queryset(self):
    #     return Note.objects.filter(user=self.request.user)


