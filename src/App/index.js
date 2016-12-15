import React from "react";

import Header from "./Components/Header";

const App = React.createClass({
	render() {
		return (
			<section style={{ textAlign: "center" }}>
				<Header>Hello!</Header>
			</section>
		);
	}
});

export default App;