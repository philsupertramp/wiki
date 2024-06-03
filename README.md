# Wiki

Self hosted wiki app, to collect information. One wiki, to know everything and to fill with knowledge.

## Disclaimer

This is a study project and will be used to teach necessary aspects of web dev using Django, hence
it is not the goal to provide a fully functional production ready platform.


## Writing articles

To create a new page one needs to be authenticated.

The wiki supports markdown, adds syntax-highlighting for most common programming
languages and is capable of "wikilinks". Full markdown support, with enabled
`<script>...</script>`-tags, to enable things like mathjax.



## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
python`>= 3.8`

### Installing

```bash
# Download the repo
git clone git@github.com:philsupertramp/wiki`

# Create a virtual environment
# for example using `virtualenv`
virtualenv -p python3 .venv

# activate venv
source .venv/bin/activte

# Install requirements
pip install -r requirements.txt

# execute migration graph
./manage.py migrate

# run local dev server
./manage.py runserver
```

A local instance of the wiki is now available at [localhost:8000](localhost:8000)

## Running the tests

```bash
# To run the test suite execute

./manage.py test [-v 2]

# To include a coverage report
pip install coverage

coverage run ./manage.py test -v 2

# To generate reports
coverage report
coverage html
```

## Contributing

### First time contributors
Please fork the project and create a PR based on your repo

### Known contributors
Create your PR branch based on `master`

## Versioning
No versioning for now, see `dev` branch for development build

## Authors
* **Philipp Zettl** - *Initial work* - [philsupertramp](https://gitlab.com/philsupertramp)

See also the list of [contributors](https://gitlab.com/philsupertramp/wiki.time-dev.de/graphs/master) who participated in this project.

## License
See [LICENSE](LICENSE)

