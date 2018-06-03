import * as React from "react";
import { Header } from "./Components/Header";

export default class App extends React.Component {
  public render() {
    return (
      <Header color="#FFF" backgroundColor="#A10022" style={{ padding: 20 }}>
        React Boilerplate
      </Header>
    );
  }
}
