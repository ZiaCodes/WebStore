import React,{useEffect, useState, Suspense} from 'react'
import { getMetaData } from '../apis/data';
import Loading from './Loading';
import PageNumber from './PageNumber';

const CardBox = React.lazy(() => import('./CardBox'));
const Card = () => {
  const [metaData, setMedaData] = useState([]);
  const [page,setPage] =  useState(1)
  const [isLoading , setIsLoading] = useState(false);

  // Load the data 
  const fetchData = async() =>{
    setIsLoading(true);
    const res = await getMetaData();
    if(res.error){
      setIsLoading(false);
      return alert(res.error);
    }
    setMedaData(res.response);
    setIsLoading(false);
  }

  // next pagination
  const nextPage = () =>{
      setPage( page + 1);
  }

  //  previus Pagination
  const prevPage = () =>{
    setPage(page - 1);
  }
  

  useEffect(()=>{
    fetchData();
  },[])

  return (
  <Suspense fallback={<p style={{textAlign:'center'}}>
    Almost Ready 😋 
    </p>}>
    {
      isLoading ? <Loading/> : (
      <div className='cardbox'>
      {
        metaData.slice(page * 10 - 10 ,page * 10).map((val)=>{
          return(
            <CardBox
            key = {val._id}
            poster={val.poster}
            title = {val.title}
            description = {val.description}
            url = {val.url}
            author = {val.author}
            theme = {val.theme}
            />
          )
        })
      }
      
      { 
      metaData.length && (
      <PageNumber>
        <div onClick={prevPage} className="back">
            ◀ Prev
        </div>
        <div className="pages">
          {
            [(metaData.length/10)].map((_,i)=>{
              return <p>{i+1}</p>
            })
          }
        </div>
        <div onClick={nextPage} className="foward">
            Next ▶
        </div>
      </PageNumber>)
      }
      </div>
      )
    }
  </Suspense>
  )
}

export default Card;

























// {/* <div>
//       <div className="searchbox">
//         <
//           input type="search" placeholder='Search by name,year and actors..'
//          onChange={event =>{setsearchContent(event.target.value)}} 
//          />
//         </div>
//     </div> */}


// {
//   Mdata.filter((val)=>{
//     if(searchContent == ""){
//       return val
//     }else if(val.name.trim().toLowerCase().includes(searchContent.trim().toLowerCase())){
//       return val
//     }else if(val.genre.trim().toLowerCase().includes(searchContent.trim().toLowerCase())){
//       return val
//     }else if(val.Year.trim().includes(searchContent.trim())){
//       return val
//     }else if(val.rating1.trim().includes(searchContent.trim())){
//       return val
//     }else if(val.actor.toLowerCase().trim().includes(searchContent.toLowerCase().trim())){
//       return val
//     }else if(val.country.toLowerCase().trim().includes(searchContent.toLowerCase().trim())){
//       return val
//     }else if(val.platfrom.trim().toLowerCase().includes(searchContent.trim().toLowerCase())){
//       return val
//     }
//   }).map((val)=>{
//     return(
//       < CardBox key={val.id}
//         imdb={val.rating1} 
//         rotten={val.rating2} 
//         others={val.rating3}
//         poster = {val.img}
//         name = {val.name}
//         year = {val.Year}
//         description = {val.description}
//         link = {val.link}
//         />
//     );
//   })
//   }
