from django.shortcuts import render, HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import NoteSerializer
from .models import Note


@api_view(['GET'])
def get_notes(request):
    notes = Note.objects.all()
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_note(request, id):
    notes = Note.objects.filter(id=id)
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data)
