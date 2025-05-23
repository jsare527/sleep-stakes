
# Sleep Stakes 

A full-stack web app where friends can create hangouts and bet on who will fall asleep first.

---

## Tech Stack

- **Frontend**: Angular
- **Backend**: Django + Django REST Framework
- **Database**: PostgreSQL
- **Containerized with**: Docker + Docker Compose

## Requirements

**All you need is docker to be installed.**

You can make your own virtual environment if you want, but it's not needed. Run:

```shell
python -m venv <name>
source venv/bin/activate
pip install -r requirements.txt
```

First line creates the virtual env, the second one activates it. then run ```pip install -r requirements.txt``` in the /app directory

## Commands
### Dev commands

**Use the dev commands for now**

Run and build dev containers:

```shell
docker compose up -d --build
```

After running this command, the application is available at http://localhost:4200/

Django admin is available at http://localhost:8000/admin for superusers

#### Bring containers down

```shell
docker compose down
```

To clear volumes:

```shell
docker compose down -v
```

This will clear everything in your database, including your user - so be careful.

#### Clear database and apply migrations:

```shell
docker compose exec web python manage.py flush --no-input
docker compose exec web python manage.py makemigrations
docker compose exec web python manage.py migrate
```

#### Create a new django app using docker

```shell
docker compose exec web python manage.py startapp <app-name>
```

#### Create new user

**Make sure to do this**

```shell
docker compose exec web python manage.py createsuperuser
```

Follow the prompts, then you will have a new user. Use this info to login into the app.

#### Access database command line:

```shell
docker compose exec db psql -U user -W sleep_stakes_dev
```

The password is **'password'**.

### Production commands

ignore ts (this shit) for now

This builds production ready containers

```shell
docker compose -f docker-compose.prod.yml up -d --build
```

The application will be available at http://localhost:1337/

#### Clear volumes:

```shell
docker compose -f docker-compose.prod.yml down -v
```

#### Apply migrations:

```shell
docker compose -f docker-compose.prod.yml exec web python manage.py migrate --noinput
```
