import { Component } from "../core/core";
import { getMovieDetails } from "../store/movie";

export class Movie extends Component {
  async render() {
    this.el.classList.add('container', 'the-movie')
    // 스켈레톤 UI 출력!
    this.el.innerHTML = /* html */ `
      <div class="poster skeleton"></div>
      <div class="specs">
        <div class="title skeleton"></div>
        <div class="labels skeleton"></div>
        <div class="plot skeleton"></div>
      </div>
    `

    var data = await getMovieDetails('603692'); // 일단 강제로 고정

    this.el.innerHTML= /* */ `
    
      <h1> ${data.title}</h1>
    `

  }
}