# InTempo
Applicazione node.js + react.js per tenere traccia del tempo impiegato per un insieme di task

## Collection e Risorse

Risorse:

- task:
  - nome
  - id
  - completed (bool)

-  timeslice:
   -  task_id
   -  length (minuti)
   -  date

## query

CRUD su i task e sui timeslice

GET /tasks  (ritora tutti i task)
GET /tasks/:task_id/timeslices
GET /timeslices

POST /tasks (crea nuovo task)
POST /tasks/:task_id/timeslices (crea un nuovo timeslice nel task :task_id)

DELETE /tasks/:task_id (cancella task e timeslice associati)
DELETE /tasks/:task_id/timeslices (cancella tutti i timeslice ma non il task)

