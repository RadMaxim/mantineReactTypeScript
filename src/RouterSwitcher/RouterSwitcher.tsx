import { Route, Routes } from "react-router-dom";
import Navbar from "../Navigation/Navbar";

import Demo from "../Demo/Demo";
import Search from "../Setting/Search";
import { AppShell, Grid } from "@mantine/core";
import Paginator from "../Paginator/Paginator";
import Infomation_film from "../Information_film/Information_film";
import {Film,Film_description} from "../Interface/Interface";
import RatedMovies from "../RatedMovies/RatedMovies";

const RouterSwitcher = (props:{cards:Film[]})=>{
    let {cards} = props;
   
    return (<>
 
    <Routes>
        
        <Route path="/" element={<>
        
        <Grid style={{width:"980px", boxSizing:"border-box"}}>
            <div className="selected_video" >
               <Search collectionCards = {cards}/>  
            </div>
           
        </Grid>
        </>}/>
        <Route path="/ratedMovies" element={<><RatedMovies/></>}/>
        <Route path="/film/:id"  element={<Infomation_film/>} />
    </Routes>
   
    </>)
}
export default RouterSwitcher;