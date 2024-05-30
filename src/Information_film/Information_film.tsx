
import { Text, Title, TextInput, Button, Image, Grid,AspectRatio, Flex  } from '@mantine/core';

import classes from './EmailBanner.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Company, Elem, Genre, ObjectInfo } from '../Interface/Interface';

async function getInfoFilm(id:any) {
  let api =  await(await fetch(`http://localhost:3002/api`)).text()

  let infos = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api}`)
  
  if(infos.ok){
    let data_info = await infos.json()
  
    return data_info
  }
  return null

}
async function getTrillerFilm(id:any) {
  let api =  await(await fetch(`http://localhost:3002/api`)).text()
  let video_triller = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api}&append_to_response=videos`)
  if (video_triller.ok) {
    let data_triller = await video_triller.json()
    
    let triller_results = await data_triller.results[0]
    return triller_results
    
  }
}

const Infomation_film=()=> {
  let [triller, setTriller] = useState<any>({})
  let [film, setFilm] = useState<any>({})
  console.log(triller)
  let obj = {
    backdrop_path:film.backdrop_path,
    genres:film.genres,//
    homepage: film.homepage,
    id:film.id,
    overview:film.overview,
    popularity:film.popularity,
    poster_path:film.poster_path,
    production_companies: film.production_companies,
    release_date:film.release_date,
    original_title:film.title,
    vote_average:film.vote_average,
    vote_count:film.vote_count,
    runtime:film.runtime,
    budget:film.budget,//
    revenue:film.revenue,
    videos:film.videos

  }
  
  
  
  const { id } = useParams<any>();
  useEffect(()=>{
    let infos = getInfoFilm(id)
    let triller_info = getTrillerFilm(id)
    if (infos!=null) {
       infos.then((res) => {
        setFilm(res)
       })
    }
    if (triller_info!=null) {
      triller_info.then((res)=>{
        setTriller(res)
      })
      
    }
  },[id])
  return (<>
  
  <div id='main' style={{width:"800px",padding:"24px 68px 24px 24px",height:"400px", background:"white", boxSizing:"border-box"}}>
            <div style={{width:"800px", boxSizing:"border-box"}}>
              <Flex  style={{ padding:"0", margin:"0"}}>
                <div style={{width:"250px", height:"352px", boxSizing:"border-box", marginRight:"16px"}}>
                  <Image height={352}  src={"https://image.tmdb.org/t/p/original"+obj.poster_path} />
                </div>
                <div style={{width:"442px",height:"352px"}}>
                  <div style={{width:"442px", height:"88px"}}>
                  <Title order={2} style={{textAlign:"start"}}>{obj.original_title}</Title>
                <Text fw={500} style={{textAlign:"start",fontSize:"16px"}} fz="lg" mb={5}>{String(obj.release_date).split("-")[0]}</Text>
                <Flex>
                <Image src={"/img/icons/blueStar.svg"} style={{width:"28px"}}/>

<Text fz="sm" c="dimmed">{obj.vote_average}</Text>

                </Flex>
               
                  </div>
                  <Flex style={{width:"320px", height:"148px",gap:"12px", margin:"116px 122px 0 0"}}>
                  <div>
                    <Flex style={{marginBottom:"12px"}}>
                    <Text c="dimmed" size="md" style={{textAlign:"start", width:"160px", height:"20px"}}>Duration</Text>
                    <Text style={{textAlign:"start", width:"160px", height:"20px"}}  size="md" c="dimmed">{obj.budget}</Text>
                    </Flex>
                    <Flex style={{marginBottom:"12px"}}>
                    <Text c="dimmed" size="md" style={{textAlign:"start", width:"160px", height:"20px"}}>Premiere</Text>
                    <Text style={{textAlign:"start", width:"160px", height:"20px"}} fz="sm" c="dimmed">{obj.release_date}</Text>

                    </Flex>
                    <Flex style={{marginBottom:"12px"}}>
                    <Text c="dimmed" size="md" style={{textAlign:"start", width:"160px", height:"20px"}}>Budget</Text>
                    <Text style={{textAlign:"start", width:"160px", height:"20px"}} fz="sm" c="dimmed">{obj.budget}</Text>

                    </Flex>
                    <Flex style={{marginBottom:"12px"}}>
                    <Text c="dimmed" size="md" style={{textAlign:"start", width:"160px", height:"20px"}}>Gross worldwide</Text>
                    <Text style={{textAlign:"start", width:"160px", height:"20px"}} fz="sm" c="dimmed">{obj.popularity}</Text>

                    </Flex>
                    <Flex style={{marginBottom:"12px"}}>
                    <Text c="dimmed" size="md" style={{textAlign:"start", width:"160px", height:"20px"}}>Genres</Text>
                    <Text style={{textAlign:"start", width:"300px", height:"20px"}} fz="sm" c="dimmed">{fun1(obj)}</Text>

                    </Flex>
             
                  </div>
                <div>
                </div>
                  </Flex>
                 
                </div>
              </Flex>
            </div> 
        
        </div>
        <div id="desc" style={{width:"800px",background:"white", boxSizing:"border-box",marginTop:"20px", padding:"24px"}}>
        <Title order={3} style={{textAlign:"start",marginBottom:"16px"}}>Trailer</Title>
        <div id="desc_video" style={{width:"500px",height:"281px"}}>
        <AspectRatio ratio={16 / 9}>
      <iframe
        src={`https://www.youtube.com/embed/${triller.key}`}
        title="YouTube video player"
        style={{ border: 0, borderRadius:"9px"}}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        
      />
    </AspectRatio>
        </div>
        <div style={{height:"1px", border:"1px solid #D5D6DC",marginTop:"20px", marginBottom:"20px"}} className="desc_line"></div>
        <Title style={{textAlign:"start", marginBottom:"16px", fontSize:"20px"}} order={3}>Description</Title>
   
    <Text style={{textAlign:"start",fontSize:"16px"}}>
      {obj.overview}
    </Text>
    <div style={{height:"1px", border:"1px solid #D5D6DC",marginTop:"20px", marginBottom:"20px"}} className="desc_line"></div>
    <Title style={{textAlign:"start", marginBottom:"16px", fontSize:"20px"}} order={3}>Production</Title>

    <Text>{fun2(obj.production_companies)}</Text>
        </div>
        
  </>
    
        
        
     
      
 
  );
}
export default Infomation_film;
function fun1(obj:ObjectInfo) {
 let arr:Elem[] = obj.genres
if (arr!=undefined) {
  let str = arr.map((elem)=>elem.name).join(", ")
  return str
    
  }

  return "null"
}
function fun2(arr:Company[]) {
  
 if (arr!=undefined) {
  
  let array = arr.map((elem:Company)=> <>
  <Flex gap={9} style={{marginBottom:"12px"}}> 
  <Flex align={"center"} style={{width:"40px",height:"40px", border:"0.5px"}}>    <Image style={{width:"100%", lineHeight:"40px"}}  src={"https://image.tmdb.org/t/p/original"+elem.logo_path}/>
</Flex>
<Flex align={"center"} style={{height:"40px"}}><Text style={{ lineHeight:"40px", fontSize:"22px"}}>{elem.name}</Text></Flex>
    </Flex>
   
    </>
      
 )
    
   
    return array
 }
   return ""
}