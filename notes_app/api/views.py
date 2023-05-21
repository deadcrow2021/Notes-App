from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import NoteSerializer
from .models import Note


@api_view(['GET', 'POST'])
def get_notes(request):
    if request.method == 'GET':
        notes = Note.objects.all().order_by('-updated')
        serializer = NoteSerializer(notes, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        data = request.data
        notes = Note.objects.create(
            body=data['body']
        )
        serializer = NoteSerializer(notes, many=False)
        return Response(serializer.data)


@api_view(['GET', 'PUT', 'DELETE'])
def get_note(request, id):
    if request.method == 'GET':
        notes = Note.objects.filter(id=id)
        serializer = NoteSerializer(notes, many=True)
        return Response(serializer.data)

    if request.method == 'PUT':
        data = request.data
        note = Note.objects.filter(id=id)
        serializer = NoteSerializer(instance=note, data=data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)
    
    if request.method == 'DELETE':
        note = Note.objects.filter(id=id)
        note.delete()
        return Response("Note was deleted")


# @api_view(['POST'])
# def create_note(request):
#     data = request.data
#     notes = Note.objects.create(
#         body=data['body']
#     )
#     serializer = NoteSerializer(notes, many=False)
#     return Response(serializer.data)

# @api_view(['PUT'])
# def update_note(request, id):
#     data = request.data
#     note = Note.objects.filter(id=id)
#     serializer = NoteSerializer(instance=note, data=data)
    
#     if serializer.is_valid():
#         serializer.save()
#     return Response(serializer.data)

# @api_view(['DELETE'])
# def delete_note(request, id):
#     note = Note.objects.filter(id=id)
#     note.delete()
#     return Response("Note was deleted")
