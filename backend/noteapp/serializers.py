from rest_framework.serializers import ModelSerializer, PrimaryKeyRelatedField, ChoiceField, CharField
from .models import Note
from django.core.exceptions import ValidationError



class NoteSerializer(ModelSerializer):

    class Meta:
        model = Note
        fields = '__all__'
    
    
    