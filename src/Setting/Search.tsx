import { AppShell, AppShellSection, Container, Flex, Input, NativeSelect, SimpleGrid, Text, Title } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import { IconChevronDown, IconHash } from '@tabler/icons-react';
import Paginator from "../Paginator/Paginator";
import { Film } from "../Interface/Interface";
const Search = (props:{collectionCards:Film[]})=>{
  let {collectionCards}=props
  console.log(collectionCards)
  const [search, setSearch] = useState<{genreSearch:string,yearSearch:string}>()
  let [objectForSearch, setObjectForSearch] = useState()
  let genreSearch = useRef(null)
  let year = useRef(null)
  let ratingsDown = useRef(null)
  let ratingUp = useRef(null)
  let mostPopular = useRef(null)
  // let [data, setData] = useState<{genre:string,year:string,from:string, to:string}>({genre:"",year:"",from:"",to:""})
  let [genre, setGenre]=useState("")
  let [years, setYears] = useState("")
  let [from, setFrom] = useState("")
  let [to, setTo] = useState("")

  useEffect(()=>{
   
    let obj = {
      genre:genre||null,
      years:years||null,
      from:from||null,
      to:to||null

    }
    fetch('http://localhost:3000/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    })
    
    console.log(obj)
  },[genre, years,from, to])
return (<>

    <div className="search_main" style={{height:"232px", marginBottom:"24px", boxSizing:"border-box"}} > 
    <div className="search_title" style={{height:"48px", boxSizing:"border-box"}}>
    <Title  order={2} style={{textAlign:"start"}}>Movies</Title>
    </div>
    <Flex justify="flex-start" align="center" style={{height:"72px", boxSizing:"border-box",marginTop:"40px"}}>
         
      <div >
      <Input.Wrapper style={{textAlign:"start"}} label="Genres" size="xs">
              <Input onChange={(e)=>{e.preventDefault(); setGenre(e.target.value)}} ref={genreSearch}  value={search?.genreSearch} style={{width:"283px",height:"42px"}}  placeholder="Select genre" />
            </Input.Wrapper>
      </div>
          <div style={{ marginLeft:"16px"}}>
          <Input.Wrapper style={{textAlign:"start", width:"284px"}} size="xs" label="Release year">

          <NativeSelect onChange={(e)=>{e.preventDefault(); setYears(e.target.value)}} ref={year} rightSection={<IconChevronDown style={{ width: "16px",height:"42px"}} />} data={['React', 'Angular']}/>
      </Input.Wrapper>
            </div>  
           
      <div style={{ marginLeft:"16px"}}>
      <Input.Wrapper style={{textAlign:"start", width:"138px"}} size="xs" label="Ratings">
            <NativeSelect onChange={(e)=>{e.preventDefault(); setFrom(e.target.value)}} ref={ratingsDown} style={{ width:"138px",height:"42px"}} data={['From']}/>
            </Input.Wrapper>
      </div>
           <div style={{marginLeft:"8px"}}>
           <Input.Wrapper style={{textAlign:"start",width:"138px"}} size="xs" label=" " >
            <NativeSelect onChange={(e)=>{e.preventDefault(); setTo(e.target.value)}} ref ={ratingUp}  style={{width:"138px",height:"42px"}}   data={['To']}/>
            </Input.Wrapper>
           </div>
            
      <div className="reset_filter" style={{marginLeft:"16px"}}>
      <Text size="xs" style={{paddingTop:30}}>Reset filters</Text>
      </div>
          </Flex>
          <Flex justify="flex-end" style={{marginTop:"24px"}}>
          <div style={{ marginLeft:"16px",height:"72px"}}>
          <Input.Wrapper style={{textAlign:"start", width:"284px"}} size="xs" label="Sort by">

          <NativeSelect 
        rightSection={<IconChevronDown style={{ width: "16px"}} />}
      
        data={['Most popular']}
     
      />
      </Input.Wrapper>
            </div>  
          </Flex>
         
          </div>
          <Paginator collectionCards={collectionCards} />
     </>
      
  
);
}
export default Search;