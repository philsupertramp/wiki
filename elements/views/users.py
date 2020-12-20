from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import redirect, render


def register_view(request):
    """registration view"""
    if request.method == 'POST':
        form = UserCreationForm(data=request.POST)
        if form.is_valid():
            # Note: gated registration, mod needs to activate this user for now
            form.is_active = False
            form.save()
            return redirect('login')
    else:
        form = UserCreationForm()
    return render(request, 'registration/register.html', {
        'form': form,
    })

