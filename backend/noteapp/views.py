from django.shortcuts import render
from rest_framework import generics, mixins
from .models import  Note, User
from rest_framework.response import Response
from .serializers import  NoteSerializer, CreateUserSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.http import JsonResponse
from datetime import timedelta
from django.utils import timezone
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator


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
            expires=timezone.now() + timedelta(days=7),
            secure=False,  # Use secure=True in production
            samesite='None', 
        )
        
        return response
    

# @method_decorator(csrf_exempt, name='dispatch')
# class CustomTokenRefreshView(TokenRefreshView):
#     def post(self, request, *args, **kwargs):
#         refresh_token = request.COOKIES.get('refresh_token')
#         print(refresh_token)

#         if not refresh_token: 
#             refresh_token = request.data.get('refresh')

#         if not refresh_token:
#             return Response({'detail':'Refresh token is missing'}, status=400)
        
#         request.data['refresh'] = refresh_token
#         response = super().post(request, *args, **kwargs) 
#         return response

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = CreateUserSerializer
    permission_classes = [AllowAny]


class NoteCreateView(generics.CreateAPIView): 
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class NotesListView(generics.ListAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Note.objects.filter(user=self.request.user)

class UpdateDeleteView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]


