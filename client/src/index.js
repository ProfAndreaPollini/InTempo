import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import AddTask from "./components/AddTask"

console.log("ok!")

function Home() {
	const [tasks, setTasks] = useState([])

	useEffect(() => {
		fetch("http://127.0.0.1:3000/tasks")
			.then(r => r.json())
			.then(body => setTasks(body.data))
			.catch(err => console.error(err))
	}, [])

	return (
		<>

			<ul>
				{tasks.map(task => <li key={task.id}>{task.name}</li>)}
			</ul>
			<pre>
				{JSON.stringify(tasks, null, 2)}
			</pre>
		</>
	)
}



function App() {
	return (
		<Router>
			<header>
				<h1><Link to="/">InTempo</Link></h1>
				<p>L'app per gestire il tempo nei tuoi task</p>
				<p><Link to="/add_task">Aggiungi Task</Link></p>
			</header>
			<main>
				<Switch>
					<Route path="/add_task">
						<AddTask />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</main>
		</Router>
	)
}
var rootNode = document.getElementById("app")
ReactDOM.render(<App />, rootNode)