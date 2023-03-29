import { createRouter } from "../core/core";
import { NotFound } from "./NotFound";
import { Home } from "./Home";
import { Movie } from "./Movie";

export default createRouter([
  { path: '#/', component: Home },
  { path: '#/movie', component: Movie },
  { path: '.*', component: NotFound }
])