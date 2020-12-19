from django.contrib.auth import logout
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.shortcuts import redirect, render


def login_view(request):
    "Login View"

    form = AuthenticationForm(request)
    return render(request, 'registration/login.html', {'form': form})


def logout_view(request):
    "Logout view"

    logout(request)
    return render(request, 'wiki/home.html', {})


def register_view(request):
    "registration view"
    if request.method == 'POST':
        form = UserCreationForm(data=request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')
    else:
        form = UserCreationForm()
    return render(request, 'registration/register.html', {
        'form': form,
    })

