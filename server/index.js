const express = require("express")
const cors = require("cors")

const database = require("./db")



const app = express()

app.use(express.json())
app.use(cors())

//GET /tasks  (ritora tutti i task)
app.get("/tasks", (req, res) => {
    res.send({
        code: 200,
        data: database.GetTasks()
    })
})
//GET /tasks/:task_id/timeslices
app.get("/tasks/:task_id/timeslices", (req, res) => {
    const task_id = req.params.task_id
    res.send({
        code: 200,
        data: database.GetTimeslicesFor(task_id)
    })
})
//GET /timeslices
app.get("/timeslices", (req, res) => {
    res.send({
        code: 200,
        data: database.GetTimeslices()
    })
})

//!POST /tasks (crea nuovo task)
app.post("/tasks", (req, res) => {
    console.log(req.body)
    res.send({})
})

//POST /tasks/:task_id/timeslices (crea un nuovo timeslice nel task :task_id)

//DELETE /tasks/:task_id (cancella task e timeslice associati)
//DELETE /tasks/:task_id/timeslices (cancella tutti i timeslice ma non il task)

app.listen(3000, () => {
    console.log("it works")
})