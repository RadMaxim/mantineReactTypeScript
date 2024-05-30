import { Button, Modal, Rating, Text } from "@mantine/core";
import { useDisclosure, useLocalStorage } from "@mantine/hooks";
import { useState } from "react";
import { Film, RatingFilm } from "../Interface/Interface";

const ModalRating = (props:{opened:any, change:Film, setSaveRating:any})=>{
    let {opened, change,setSaveRating}=props
   
    const [opened_modal, { open, close }] = useDisclosure(opened);
    
    const [selectFilms, saveSelectFilm] = useLocalStorage<RatingFilm[]>({
        key:"select_films",
        defaultValue:[]
      })
  
    let [ratingFilm, setRating] = useState(0)
    
    const saveRating = (value:number)=>{
          
        setRating(value)
    }
    const isFavorite = (film: RatingFilm) => {
        return selectFilms.some(fav => fav.film.ids === film.film.ids);
      };
    const toggleFavorite = (film: RatingFilm) => {
        if (isFavorite(film)) {
          saveSelectFilm(selectFilms.filter(fav => fav.film.ids !== film.film.ids));
        } else {
          saveSelectFilm([...selectFilms, film]);
        }
      };
      console.log(selectFilms)
    return(<>
    <Modal  opened={opened_modal} onClose={close} title="Authentication" centered>
    <Text>Your rating</Text>
    {change?.original_title}
   <Rating defaultValue={2} value={ratingFilm} size="lg" count={10} onChange={saveRating} />
   <Button onClick={(e)=>{toggleFavorite({film:change,rating:ratingFilm});close();setSaveRating(ratingFilm)}} variant="filled" color="violet" radius="lg">Save</Button>;
   <Text>Remove rating</Text>
    </Modal>
    </>)
}
export default ModalRating;