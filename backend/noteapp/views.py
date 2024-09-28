from django.shortcuts import render
from rest_framework import generics, mixins
from .models import  Note, User
from rest_framework.response import Response
from .serializers import  NoteSerializer, CreateUserSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.http import JsonResponse

class LoginView(TokenObtainPairView):
    
    serializer_class = TokenObtainPairSerializer
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        data = response.data
        refresh_token = data.get('refresh')
        
        # Create a new response object
        response = JsonResponse(data)
        
        # Set the refresh token in an HttpOnly cookie
        response.set_cookie(
            key='refresh_token',
            value=refresh_token,
            httponly=True,
            secure=True,  # Use secure=True in production
            samesite='Strict'  # Adjust SameSite attribute as needed
        )
        
        # Remove the refresh token from the response body
        del data['refresh']
        
        return response


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = CreateUserSerializer
    permission_classes = [AllowAny]


class NoteCreateView(generics.CreateAPIView): 
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

class NotesListView(generics.ListAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

    def get_queryset(self):
        return Note.objects.filter(user=self.request.user)

class UpdateDeleteView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer


