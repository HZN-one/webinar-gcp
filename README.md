# GoSend Delivery Service

A delivery service which accessed by internal system (delivery partner integrator).

## About

API that used for integrating a delivery to GoSend delivery.

| Environment | Base URL                                                            |
| ----------- | ------------------------------------------------------------------- |
| Development | https://gosend-delivery-service-development-ai2gu4pljq-uc.a.run.app |
| Production  |                                                                     |
| Sandbox     |                                                                     |

You may want to look into:

- [GoSend Dashboard Page](https://ecommercetools-integration.gojek.co.id/)
- [GoSend API Doc](https://ecommercetools-integration.gojek.co.id/api-docs)

## Rules

1. Before push your code, make sure the import not commented in src/index.ts
2. Before you run your project locallcy, make sure the import already commented in src/index.ts

## Environment

| Class               | Value                            | Description                                        |
| ------------------- | -------------------------------- | -------------------------------------------------- |
| NODE_ENV            | development, production          | Development means that project run without build   |
| APP_ENV             | development, sandbox, production | Development means that project run for development |
| PORT                | 8080, etc                        | localhost port (for local development)             |
| PROJECT_ID          | hzn-                             | project id in GCP                                  |
| GOSEND_API_BASE_URL | url                              | GoSend api base url for unit testing               |
| GOSEND_CLIENT_ID    | string                           | GoSend Client ID                                   |
| GOSEND_PASS_KEY     | string                           | GoSend Pass Key                                    |

## Scripts

Before running a project locally, make sure you already exported a gcp variable in the same terminal with npm run start:dev

```
export GOOGLE_APPLICATION_CREDENTIALS='path/secret-manager-access-service-account.json'
```

| Script            | Description                                                     |
| ----------------- | --------------------------------------------------------------- |
| npm run build     | Building a project, this script will be create a folder 'build' |
| npm run start     | Run project based on build result                               |
| npm run start:dev | Run project based on src                                        |

## Documentation

- [Google Cloud Setup Doc](https://docs.google.com/document/d/1hzJCcbStIRqwCWWRH9BUMW8_cfnTf4gkAypI1-t2aI0/edit?usp=sharing)
- [Open API 3.0](#)
