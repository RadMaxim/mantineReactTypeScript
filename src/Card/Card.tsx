import { Button, Card, Flex, Grid, Image, Modal, Rating, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import { Film, RatingFilm } from "../Interface/Interface";
import { useEffect, useLayoutEffect, useState } from "react";
import { readLocalStorageValue, useDisclosure, useLocalStorage } from "@mantine/hooks";
import GenresFilms from "../GenresFilms/GenresFilm";
import ModalRating from "../ModalRating/ModalRating";

const Cards = (props:{film:Film})=>{
  const [change, setChange] = useState<Film>()
  const [opened, { open, close }] = useDisclosure(false);
  const ratingSave = readLocalStorageValue<RatingFilm[]>({key:"select_films"}) 
  const [saveRating, setSaveRating] = useState(0)
  const count_persons = (count:number)=>{
    let number = String(count).length
    if (number>3 && number<7) {
     
      return String(Math.round(count/Math.pow(10, number-1)) )+"K"
    }
    else if(number>6 && number< 10){
    
      return String(Math.round(count/Math.pow(10, number-1)) )+"M"
     
    }
    else if(number>9){
      
      return String(Math.round(count/Math.pow(10, number-1)) )+ "B"
    }
    return String(count)
    
  }
    const {film} = props
    let collectionAboutCard = (film:Film)=>{
        open();
        setChange(film) 
    }
    const getRating = (id:number,saveData:RatingFilm[])=>{
        let rating = saveData.reduce((buf,{film,rating})=>{
          if (film.ids==id) {
            return buf = String(rating)
          }
          return buf
        },"")
        return rating
    }
   
    return (<>
    {change&&(<ModalRating setSaveRating = {setSaveRating} opened = {opened} change = {change}/>)}
     <Card key={film.ids}   style={{height:218, width:482,padding:"24px", position:"relative",boxSizing:"border-box"}} >
       <Flex  justify="center" align="center" style={{position:"absolute", right:"24px",top:"24px",background:"none"}}> 
        <Button style={{background:"none"}}   onClick={(e)=> collectionAboutCard(film)} >

            <Image src={getRating(film.ids, ratingSave).length==0?"/img/icons/starGray.svg":"/img/icons/blueStar.svg"} style={{width:"28px"}}/>
            </Button>
            <Text>{getRating(film.ids, ratingSave)==null?saveRating:getRating(film.ids, ratingSave)}
            </Text></Flex>  
          <Flex className="card">
            <div className="card_img" style={{width:"119px", height:"170px", boxSizing:"border-box"}}>
            <Image src={"https://image.tmdb.org/t/p/w500"+film.poster_path} style={{height:"100%"}}/>
            </div>
            <div className="card_desc" style={{width:"263px",height:"170px", marginLeft:"16px"}}>
              <div className="card_desc_top" style={{height:"88px"}}>
              <div className="card_desc_title">
              <Link to={`/film/${film.ids}`} style={{textDecoration:"none"}}>
            <Title style={{textAlign:"start",fontSize:"20px", color:"#9854F6"}}>
          {film.original_title}
        </Title>
        </Link>
              </div>
              <div className="card_desc_date">
              <Text style={{textAlign:"start",color:"#7B7C88"}}>
          {String(film.release_date).split("-")[0]}
        </Text>
              </div>
              <Flex gap={5} className="card_desc_vote_average">
              <Image src="\img\icons\star.svg" style={{width:"28px"}} />
        <Text>{film.vote_average}</Text>
        <Text>{count_persons(film.vote_count)}</Text>
              </Flex>

              </div>
              <Flex className="card_desc_bottom"  style={{height:"82px", flexDirection:"column"}} align="flex-start" justify="flex-end">
                <div className="card_desc_genre" >
                <Text style={{color:"#7B7C88",fontWeight:"400",fontFamily:"Inter", fontSize:"16px"}}>Genres <GenresFilms  film={film}/></Text>
                </div>
              
              </Flex>
              
            </div>
           
          </Flex>
      </Card>
    </>)

}
export default Cards;