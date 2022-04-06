import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";

class Item extends React.Component {
  onClick = () => {
    alert(this.props.children);
  };

  render() {
    return (
      <div
        className="item"
        onClick={this.props.onClick ? this.props.onClick : this.onClick}
      >
        {this.props.children}
      </div>
    );
  }
}

class NameDiv extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "No Name" };
  }

  setName(newName) {
    this.setState({ name: newName });
  }

  render() {
    return <div>{this.state.name}</div>;
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.childRef = React.createRef();
  }

  onClick = (e) => {
    this.childRef.current.setName(e.target.innerText);
  };

  render() {
    const names = [
      "Tom",
      "Richard",
      "Harry",
      "Jane",
      "Jenny",
      "Paul",
      "Mortimer",
      "Henry",
      "David",
      "Kelly",
      "Pat"
    ];
    const elements = names.map((item) => (
      <Item onClick={this.onClick}>{item}</Item>
    ));
    return (
      <div>
        <div className="leftSide">{elements}</div>
        <NameDiv ref={this.childRef} />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
