import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<p>Somos los mejores !!!!</p>
				<p>Y estamos ensayando Github Collaboration</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<p>HEAmet exercitation exercitation adipisicing duis minim dolore ullamco minim magna eiusmod et.</p>
				<Hello />
				
			</header>
		</div>
	);
}

export default App;
