import React, { useState } from "react";
import Proptypes from "prop-types";
import './App.css';

function Counter() {
	const [count, setCount] = useState(0); // Initialize state with 0

	return (
		<div>
			<h2>Counter: {count}</h2>
			<button onClick={() => setCount(count + 1)}>Increase</button>
			<button onClick={() => {
					if (count > 0) setCount(count - 1)
					else alert("Cannot go below 0")
				}}>Decrease</button>
			<button onClick={() =>{ 
				if(window.confirm("Are you sure you want to reset?"))setCount(0)
				} }>Reset</button>
		</div>
	);
}

function App() {
  return (
		<div>
			<h1>Props Example</h1>
			<WelcomeMessage name='Prince' />
			<br></br>

			<h1>State Example</h1>
			<Counter />
		</div>
	);
}


function WelcomeMessage(props){
  return(
	<>
		<h1>Hello {props.name}!</h1>
		<h1>Your age is {props.age}</h1>
	</>
  )
  
}

WelcomeMessage.propTypes = {
	name: Proptypes.string.isRequired,
	age: Proptypes.number.isRequired
}	

export default App;
