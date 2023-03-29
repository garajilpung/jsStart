import { Component } from "../core/core";
import Message from "../components/Message";
import Hello from "../components/Hello";

export class Home extends Component {
  render() {
    // this.el.innerHTML = `
    // <h1>HomePage!</h1>
    // `

    // this.el.classList.add('className')

    this.el.append(
      new Hello().el,
      new Message().el
    )
  }
}