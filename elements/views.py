from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout, login, forms
from django.contrib.auth.forms import AuthenticationForm
from django.shortcuts import render, get_object_or_404, redirect
from django.utils import timezone
from django.http import Http404

from .helpers import render_with_tags
from .models import Post
from .forms import PostForm
# Create your views here.


"""
        POST VIEWS
"""



"""

            ACCOUNTING VIEWS

"""




"""
        GENERAL VIEWS
"""

