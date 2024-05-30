 
export type Film =  {
    ids:number,
    original_title: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
    vote_count: number;
    genre_ids: number[];
  }
export type Film_description = {
    original_title: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
    vote_count: number;
    runtime: number;
    budget: number;
    revenue: number;
    genres: string[];
    overview: string;
    production_companies: string[];
    videos: { key: string; type: string }[];
  }
export type Genre = {
  id:number;
  name:string;
}
export type Elem={
  id:number;
  name:string;
}
export type ObjectInfo={
  backdrop_path:string;
    genres:Elem[];//
    homepage: string;
    id:number;
    overview:string;
    popularity:string;
    poster_path:string;
    production_companies: string;
    release_date:string;
    original_title:string;
    vote_average:any;
    vote_count:any;
    runtime:any;
    budget:any;//
    revenue:any;
    videos:string[];

}
export type Company = {
  id:number;
  logo_path:string;
  name:string;
  origin_country:string
}
export type MovieData ={
  ids:number;
  title: string;
  date: string;
  vote_average: number;
  img: string;
}
export type RatingFilm ={
  film:Film,
  rating:number
}