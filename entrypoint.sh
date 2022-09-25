#!/usr/bin/env bash

python manage.py collectstatic --no-input
python manage.py migrate

gunicorn wiki.wsgi -b 0.0.0.0:8000 --reload