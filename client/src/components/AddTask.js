import React, { useState } from "react"


export default function AddTask() {
    const [name, setName] = useState("")

    function OnNameChange(evt) {
        console.log(evt.target.value)
        setName(evt.target.value)
    }

    function OnFormSubmit(evt) {
        evt.preventDefault()
        fetch("http://127.0.0.1:3000/tasks", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                name
            })
        }).then(r => r.json()).then(body => console.log(body))
    }

    return (
        <>
            <h3>Aggiungi Task</h3>
            <form method="POST" onSubmit={(e) => OnFormSubmit(e)}>
                <input type="text" placeholder="Nome nuovo Task" onChange={(e) => { OnNameChange(e) }} value={name}></input>
                <input type="submit" value="Crea"></input>
            </form>
        </>
    )
}