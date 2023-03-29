import { Component } from "../core/core";

export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: 'footer'
    })
  }

  render() {
    this.el.innerHTML = /* html */`
      <p> copyrighter : garajilpung </p>
    `

  }
  
}