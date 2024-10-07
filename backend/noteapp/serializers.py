from rest_framework.serializers import ModelSerializer, PrimaryKeyRelatedField, ChoiceField, CharField
from .models import Note, User
from django.core.exceptions import ValidationError

class CreateUserSerializer(ModelSerializer):
    password = CharField(write_only=True)

    class Meta:
        model = User
        fields = ['name', 'email', 'password']
    
    def create(self, validated_data):
        user = User.objects.create_user(
            name = validated_data['name'],
            email = validated_data['email'],
            password = validated_data['password']
        )
        return user

class NoteSerializer(ModelSerializer):

    class Meta:
        model = Note
        fields = '__all__'
        read_only_fields = ['user']
    
    
    