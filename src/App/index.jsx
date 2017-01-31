import React from "react";

import Header from "./Components/Header";

const App = React.createClass({
	render() {
		return (
			<section style={{ textAlign: "center" }}>
				<Header>Welcome to React-Redux Boilerplate!</Header>
			</section>
		);
	}
});

export default App;