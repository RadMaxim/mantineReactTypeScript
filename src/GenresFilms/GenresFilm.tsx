import { useEffect, useState } from "react"
import { Film } from "../Interface/Interface"
async function getGenres() {
    let data_genres = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=aa85885346f02a12b02f65ae53349d45")
    if (data_genres.ok) {
      let json_genres = await data_genres.json()
    return json_genres 
    }
   return null
  }
const GenresFilms = (props:{film:Film})=>{
    const {film} = props
    let [genre, setGenre] = useState<any>([])
    useEffect(()=>{
        let fun = async()=>{
          let arr = await getGenres()
          let text_genre = await arr.genres
          setGenre(text_genre)
        }
       
        fun()
      },[])
      let genres = genre.filter((elem:{id:number,name:string})=>film.genre_ids.includes(elem.id))
      .map((elem:{id:number,name:string})=>elem.name).slice(0,3)
      .join(", ")
return (<span style={{color:"#000000",fontWeight:"400",fontFamily:"Inter", fontSize:"16px"}}>{genres}</span>)
}
export default GenresFilms;