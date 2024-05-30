
import fetch from 'node-fetch'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'


const app = express()
app.use(bodyParser.json());
const api_key = "aa85885346f02a12b02f65ae53349d45"
const urls = [
   {
      url:`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=2`,
      info: "film_information"
   },
   {
      url:`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`,
      info: "genre"
   }
]
// app.use(cors())
console.log("qwd")
 app.get('/api/stocks',async(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    Promise.allSettled(urls.map(async({url,info})=>await fetch(url))).then(async(reqPromiseArray)=>{
      return reqPromiseArray
    })
   let data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=aa85885346f02a12b02f65ae53349d45&language=en-US&page=2')
    let jsonData = await data.json()
   
     res.end(JSON.stringify(jsonData))
})
app.get('/api/info',async(req, res)=>{
   res.setHeader('Access-Control-Allow-Origin', '*');
   Promise.allSettled(urls.map(async({url,info})=>await(await fetch(url)).json())).then(async(reqPromiseArray)=>{
      res.end(JSON.stringify(reqPromiseArray))
    
    })
})
app.get('/api',async(req,res)=>{
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.end(api_key)
})
app.post('/data', (req, res) => {
   const data = req.body;
   console.log('Data received:', data);
   res.send('Data received successfully');
 });
 app.get('/data',(req,res)=>{
   const data = req.body;
   console.log('Data received:', JSON.stringify(data));
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.end(api_key)
})
// app.get('/pages',async(req, res)=>{
//    res.setHeader('Access-Control-Allow-Origin', '*');
//    let promise = new Promise(async(response,reject)=>{
//       let allPages = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=ru`)
//       if (allPages.ok) {
//          let infoPages = await allPages.json()
//          let pages =await infoPages.total_pages
//          response(pages)
         
//       }
//    })
//    promise.then((result)=>{
//       async function getAllInfoFilms() {
//          let films = []
//          let baseUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=ru`
//          for (let page = 1; page <= result; page++) {
//             const response = await fetch(`${baseUrl}&page=${page}`);
//             let film = await response.json()
//             console.log(film)
//             films.push(...film.results)

            
//          }
//          console.log(films)
//          return films

//       }
//       return getAllInfoFilms()
//    })
//    res.end(JSON.stringify(promise))
   
   
// })
app.listen(3002)












 //   let data = await fetch('https://api.themoviedb.org/3/movief65ae53349d45&language=en-US&page=2',{headers:headers});

    // let data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=aa85885346f02a12b02f65ae53349d45&language=en-US&page=2',{headers:headers});
      