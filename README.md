# webDactor

[English](README.md) · [العربية](README_AR.md) · [File index](docs/INDEX.md)

Dental clinic website with a React/CRACO frontend and a FastAPI backend using MongoDB.

## Repository contents

- [frontend](frontend)
- [backend/server.py](backend/server.py)
- [backend/requirements.txt](backend/requirements.txt)
- [frontend/package.json](frontend/package.json)

## Setup and use

Run the frontend and backend separately. The frontend manifest declares Yarn 1.22.22.

```sh
cd frontend
yarn install
yarn start
```

In another terminal, create and activate a Python virtual environment, then:

```sh
cd backend
python -m pip install -r requirements.txt
python -m uvicorn server:app --reload --port 8000
```

The backend reads `MONGO_URL` and `DB_NAME` from `backend/.env`; also review `CORS_ORIGINS`. The dependency list includes an environment-specific integration package, so dependency availability must be checked in the target environment.

## License

The repository currently has no root license file. This documentation does not assign a new license.

## Contributing and navigation

[CONTRIBUTING.md](CONTRIBUTING.md) · [Documentation index](docs/INDEX.md) · [Public project index](https://github.com/InfoSecNazir/InfoSecNazir/blob/main/PROJECTS.md)

## Verification scope

Repository organization checked file paths, documentation links, and available dependency manifests. This update did not run or deploy the application.
