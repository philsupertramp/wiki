FROM python:3.11-alpine

# unbuffered logging for stdout -> cloudwatch
ENV PYTHONUNBUFFERED 1
ENV PYTHONFAULTHANDLER 1
ENV LIBRARY_PATH=/lib:/usr/lib

RUN apk update && \
    apk add bash coreutils git less uriparser && \
    apk add postgresql-libs build-base pcre-dev jpeg-dev && \
    apk add --virtual .build-deps gcc musl-dev git zlib-dev libffi-dev linux-headers python3-dev py-pip
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY requirements.txt /usr/src/app/

RUN pip install --no-cache-dir --upgrade \
            pip \
            setuptools \
            wheel \
        && \
    pip install --no-cache-dir -r requirements.txt \
        && \
    apk --purge del .build-deps

COPY . /usr/src/app

# NOTE: Application of security updates is down here so that caching has less of a chance to render it a no-op
RUN apk update && apk upgrade

EXPOSE 8080

ENTRYPOINT ["./entrypoint.sh"]

CMD ["gunicorn", "wiki.wsgi", "-b", "0.0.0.0:8080"]