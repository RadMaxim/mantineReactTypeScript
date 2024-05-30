import { Button, Card, Container, Flex, SimpleGrid, Text, TextInput, Title } from "@mantine/core";
import { readLocalStorageValue, useLocalStorage } from "@mantine/hooks";
import { Film, RatingFilm } from "../Interface/Interface";
import Cards from "../Card/Card";

const RatedMovies = ()=>{
    const data_about_rating = readLocalStorageValue<RatingFilm[]>({
        key:"select_films"
    })
    let allCardSellected = (arr:RatingFilm[])=>{
        return (<>
        {arr.map((film)=>{
            return (
            <Cards film={film.film}/>
            
        )
        })}
        </>)
    }
    
 return(<>
   
        <div style={{width:"980px", margin:"40px 90px 0px 90px",boxSizing:"border-box"}} >
            <Flex className="rated_header" justify="space-between" style={{border:"1px solid black"}}>
                <div className="rated_title">
                    <Title>Rated movies</Title>
                </div>
                <div className="rated_search" >

                <TextInput style={{width:"490px", height:"48px"}}  rightSection={
        <Button style={{width:"48px", background:"#9854F6"}} value="Search"/>}/>
                </div>
            </Flex>
          
     
       
        <SimpleGrid cols={2} spacing={16} verticalSpacing={16}>
            {allCardSellected(data_about_rating)}
        </SimpleGrid>
        </div>
        
   
 </>)   
}
export default RatedMovies;