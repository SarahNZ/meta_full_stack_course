from django.shortcuts import render
from myapp.forms import CommentForm
from .models import UserComments
from django.http import JsonResponse

def form_view(request):
    form = CommentForm()
    
    if request.method == 'POST':
        form = CommentForm(request.POST)
        if form.is_valid():
            # cleaned_data is an attribute of the form object
            # When you call form.is_valid(), Django automatically populates the cleaned_data dictionary attribute with the validated and cleaned form data
            cd = form.cleaned_data
            uc = UserComments(
                first_name = cd['first_name'],
                last_name = cd['last_name'],
                comment = cd['comment'],
            )
            # Save the data to the database
            uc.save()
        
        return render(request, 'blog.html', {'form': form})