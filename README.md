# MetricSIM
## About
This is an opensource data display application.

## License
MIT License

## Developer Guide
This repository is connected to the Firebase realtie database.
### Change firebase credentials
create a `.env` file using the following template
```sh
REACT_APP_API_KEY=your_api_key
REACT_APP_AUTH_DOMAIN=your_auth_domain
REACT_APP_DATABASE_URL=your_database_url
REACT_APP_PROJECT_ID=your_project_id
REACT_APP_STORAGE_BUCKET=your_bucket
REACT_APP_MESSAGIN_SENDER_ID=your_sender_id
REACT_APP_APP_ID=your_app_id
```
### Change useData service

Adapt this service to your application needs

### Adapt the CustomChart component

Adapt the `data` prop following the [tremor](https://www.tremor.so/) documentation

## Installation
### Steps
- `git clone  https://github.com/PabloSanchi/OWFWeb metric_sim`
- `npm install`
- Development
  - `npm run start`
- Production
  - `npm run build`
  - `npm run start`