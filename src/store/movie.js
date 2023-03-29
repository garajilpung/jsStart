import { Store } from "../core/core";
import ins from "../api/axios";


const store = new Store({
  searchText: '',
  page: 1,
  pageMax: 1,
  movies: [],
  movie: {},
  loading: false,
  message: 'Search for the movie title!'
})

export default store




export const getMovieDetails = async id => {

  console.log("start")
  console.log(`ID: ${id}`)
  try {
    const response = await ins.get(
      `/movie/${id}`
    )

    console.log(response.data)
    var data = response.data
    return {title: data["title"],
            poster: data["poster_path"],
          }
  }
  catch (error){
    console.log(error)
  }

  
}