from django.urls import path
from . import views

urlpatterns = [
    path('data', views.get_notes, name='notes'),
    path('data/<id>', views.get_note, name='note'),
    # path('data/create', views.create_note, name='create_notes'),
    # path('data/update/<id>', views.update_note, name='update-note'),
    # path('data/delete/<id>', views.delete_note, name='delete-note'),
]
