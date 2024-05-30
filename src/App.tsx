import { useEffect, useState } from 'react';
import './App.css';
import { AppShell} from '@mantine/core';
import '@mantine/core/styles.css';
import Navbar from './Navigation/Navbar';
import { Grid } from '@mantine/core';
import RouterSwitcher from './RouterSwitcher/RouterSwitcher';
import {Film, Film_description} from './Interface/Interface';


function App() {
  let [dataa, setData] = useState<Film[]>([]);
  useEffect(()=>{
 
async function fun() {
  let {results} = (await(await fetch('http://localhost:3002/api/stocks')).json())
  let arr:Film[] = Array.from(results).reduce((array:Film[], elem:any)=>{
    let obj:Film ={
      ids:elem.id,
      original_title:elem.original_title,
      release_date:elem.release_date,
      vote_average:elem.vote_average,
      poster_path:elem.poster_path,
      vote_count:elem.vote_count,
      genre_ids:elem.genre_ids
  
    }
    array.push(obj)
    return array
  },[])
  
  setData(arr)
  
}
   fun() 
},[])

  return (
    <div className="App" style={{width:"1440px",padding:0, overflow:"hidden"}}>
    
      <AppShell style={{background:"#D5D6DC"}}   navbar={{width: 280, breakpoint:"xs"}}>
        <Grid>
          <Grid.Col span={((280/1440)*12)} >
              <Navbar />
          </Grid.Col>
        <Grid.Col  span={((1440-280)/1440)*12} style={{padding:"40px 90px 82px 90px"}} >
          <RouterSwitcher  cards = {dataa} />
          
        </Grid.Col>
        </Grid>
        
      </AppShell>
    
    </div>
  );
}

export default App;


