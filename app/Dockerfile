FROM python:3.11.4-slim-buster

WORKDIR /usr/src/app

# set environment variables
# first one makes it so it doesnt make pyc files
# second one prevents stdout and stderr buffering
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apt-get update && apt-get install -y netcat

# install dependencies
RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install -r requirements.txt

# copy entrypoint.sh
COPY ./entrypoint.sh .
RUN sed -i 's/\r$//g' /usr/src/app/entrypoint.sh
RUN chmod +x /usr/src/app/entrypoint.sh

# copy project
COPY . .

ENTRYPOINT ["/usr/src/app/entrypoint.sh"]