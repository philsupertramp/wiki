
# Wiki

Our company own wiki, to collect all informations. One wiki, to know everything and to fill with knowledge.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

First of all you need Python 2.7 installed using the command:

Arch:
```
# pacman -S python2
```
GNU/Debian:

```
# apt-get install python2
```

* pip:

Arch:
```
# pacman -S python2-pip
```
GNU/Debian:

```
# apt-get install python-pip
```

* Django itselfs in version 1.8 (LTS):


Arch/GNU/Debian:

```
# pip install Django==1.8
```

* other Django apps:

Arch/GNU/Debian:

```
# pip install django-crispy-forms #(to make the forms more crispier)
# pip install psycopg2 #(for postgresql support)
# pip install django-ckeditor #(a rich texteditor)
```

(Not recommendet)
* Postgresql:

I'm not gonna give a full few on that, if you not want to use PostgreSQL you can change the settings.py file and run it with a sqlite3 DB, which will be described below.

Arch:
```
# pacman -S postgresql
```
GNU/Debian:
```
# apt-get install postgresql
```

* nginx:

Arch:
```
# pacman -S nginx
```
GNU/Debian:
```
# apt-get install nginx
```

* uWSGI:

Arch:

```
# pacman -S uwsgi-plugin-python2
```

GNU/Debian:
```
# pip install uwsgi
```
[Using Django+nginx+uwsgi](http://uwsgi-docs.readthedocs.io/en/latest/tutorials/Django_and_nginx.html) - a greate tutorial for nginx, Django and uWSGI!



### Installing

For quick installation just rename these files
```
$ mv wiki/wiki/settings.py wiki/wiki/settings.py.postgresql && mv wiki/wiki/settings.py.sqlite3 wiki/wiki/settings.py
```

Now we've changed our databastype into `sqlite3` 
after renaming these files go back to the home directory `wiki/`
and start the development server using:
```
$ python manage.py runserver
```
it will start the project and you conntect to it [localhost:8000](localhost:8000) 


## Running the tests

There're no tests ATM.
:(


## Contributing

Please read [CONTRIBUTING.md]() for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Philipp Zettl** - *Initial work* - [philsupertramp](https://gitlab.com/philsupertramp)

See also the list of [contributors](https://gitlab.com/philsupertramp/wiki.time-dev.de/graphs/master) who participated in this project.

## License

No license ATM


