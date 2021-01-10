-----

{:toc}

-----

# Financial

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.4.

## Background

This project models a stack of index cards. The database holds three types of cards:
- metadata cards
- template cards
- data cards

Each data card contains contact information (properties) for a single entity that falls into one of the following data categories:
- "bank" (financial institutions)
- "credit card"
- "service" (utility, phone, streaming, memberships)
- "medical" (insurance by year)
- "retirement"
- "tool"

## Navigation

- Welcome Screen
  - Dashboard
  - Data Cards (`/data ==> data-cards-list component`]`)
    - Select/Show Data Card (`/data/:id ==> data-card-details component`)
      - Edit Data Card (`/data/edit/:id ==> edit-data-card component`)
      - Delete Data Card (`/data/delete/:id ==> data-cards.service.delete(:id)`
    - Add Data Card (`/data/add ==> add-data-card component`)
  - Metadata Cards (`/metadata ==> metadata-cards-list component`)
    - Select/Show Metadata Card (`/metadata/:id ==> metadata-card-details component`)
      - Edit Metadata Card (`/metadata/edit/:id ==> edit-metadata-card component`)
      - Delete Metadata Card (`/metadata/delete/:id ==> metadata-cards.service.delete(:id)`)
    - Add Metadata Card (`/metadata/add ==> add-metadata-card component`)
  - Templates Cards (`/template ==> template-cards-list component`)
    - Select/Show Template Card (`/template/:id ==> template-card-details component`)
      - Edit Template Card (`/template/edit/:id ==> edit-template-card component`)
      - Delete Template Card (`/template/delete/:id ==> template-cards.service.delete(:id)`)
    - Add Template Card (`/template/add ==> add-template-card component`)

## Data Cards

A data card must contain the following properties:

- "type": "data",
  - "category": "_data category_", 
  - "name": "_card-name_"

A data card may contain additional properties such as:
- issuer
- URL
- userid
- password
- email
- security phone
- account number
- security code
- security questions
- expiration
- security image

### Security Questions 

The security questions property (when used) is always a list of question/answer pairs.
- "security questions": [
  -  {
      "question": "_security question_",
      "answer": "_security question answer_"
     }
]

## Metadata Cards

A metadata card is used to store system structure and design information.

- "type": "metadata"
  - "name": "data categories"
  - "values": [ 
      "bank",
      "credit card",
      "service",
      "medical",
      "retirement",
      "tool"
    ]

## Template Cards

Each data card category has a corresponding template card containing suggested data card properties.  A new data card starts with all of the template properties for the selected category.  You may remove unused propertes from a particular data card and add new properties to the data card as needed.  Adding/removing properties from a data card does not change the category template.

- "type": "template",
  - "name": "bank",
  - "properties": [
      "name",
      "URL", 
      "account number", 
      "userid", 
      "password", 
      "email", 
      "security phone", 
      "security code", 
      "security questions",
      "routing number"
    ]

- "type": "template",
  - "name": "credit card",
  - "properties": [
      "name",
      "issuer", 
      "URL", 
      "userid", 
      "password", 
      "email", 
      "security phone", 
      "account number", 
      "expiration", 
      "security code", 
      "pin",
      "security questions",
      "security image"
    ]

- "type": "template",
  - "name": "service",
  - properties: [
      "name",
      "URL", 
      "account number", 
      "userid", 
      "password", 
      "email", 
      "security questions"
  ]

- "type": "template",
  - "name": "medical",
  - "properties": [
      "name",
      "year",
      "URL", 
      "account number", 
      "userid", 
      "password", 
      "email", 
      "security questions"
  ]

- "type": "template",
  - "name": "retirement"
  - "properties": [
      "name",
      "issuer", 
      "URL", 
      "userid", 
      "password", 
      "email", 
      "security phone", 
      "account number", 
      "security code", 
      "pin",
      "security questions",
      "security image"
  ]

- "type": "template",
  - "name": "tool",
  - "properties": [
      "name",
      "URL", 
      "account number", 
      "userid", 
      "password", 
      "email", 
      "security questions"
  ]

## Data Storage

Each card (data, metadata, template) is saved as a document in the "financial" database.

## Database End Points

__TODO - Replace this section with a Swagger doc!__

All document UUIDs are application generated 

`curl http://{user}:{password}@localhost:5984/financial/{category}`

A "short form" document only contains:
   - _id
   - _rev
   - category
   - name
 
### Retrieve Metadata documents
- GET /metadata ==> list of all metadata documents (short form)
- GET /metadata/{document_id}
- GET /metadata/{document_name}
- POST /metadata
  - payload is a JSON document; document must contain a name property and not contain _id or _rev properties; system creates a new metadata document with a new document _id
- PUT /metadata/{document_id}
  - payload is a JSON document; document must contain a name, _id and _rev properties; system updates metadata document and responds with status code 200

### Retrieve Template documents
- GET /template ==> list of all template documents (short form)
- GET /template/{document_id}
- GET /template/{document_name}
- POST /template
  - payload is a JSON document; document must contain a name property and not contain _id or _rev properties; system creates a new template document and responds with new document _id and status code 200
- PUT /template/{document_id}
  - payload is a JSON document; document must contain a name, _id and _rev properties; system updates template document and responds with status code 200

### Retrieve Data documents
- GET /data ==> list of all data documents (short form)
- GET /data//{document_id}
- GET /data/{category} ==> list of all data documents in specified category (short form)
- GET /data/{category}/{document_name}
- POST /data
  - payload is a JSON document; document must contain a name property and a category property, and not contain _id or _rev properties; system creates a new data document and responds with new document _id and status code 200
- POST /data/{category}
  - payload is a JSON document; document must contain a name property and not contain _id or _rev properties; system creates a new data document and responds with new document _id and status code 200
- PUT /data/{document_id}
  - payload is a JSON document; document must contain a name, _id and _rev properties; system updates data document and responds with status code 200

# Development

## ToDo


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
