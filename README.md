# University

## Install


Fisrt create a database in mysql and then edit ___.env__ for the database and then: 

```bash
# Install dependencies
npm install

#Run in Dev mode
npm run dev

#Run
npm start

#Endpoints

##Crud City
POST /api/cities
GET  /api/cities
PUT  /api/cities/:uuid
DELETE /api/cities/:uuid

##Crud Profesor
POST /api/profesors
GET  /api/profesors
PUT  /api/profesors/:uuid
DELETE /api/profesors/:uuid

##Crud Group
POST /api/groups
GET  /api/groups
PUT  /api/groups/:uuid
DELETE /api/groups/:uuid

##Crud Students
POST /api/students
GET  /api/students
PUT  /api/students/:uuid
DELETE /api/students/:uuid

