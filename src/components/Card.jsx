import React,{useEffect, useState, Suspense} from 'react'
const CardBox = React.lazy(() => import('./CardBox'));
import { getMetaData } from '../apis/data';

const Card = () => {
  const [metaData, setMedaData] = useState([]);
  const fetchData = async() =>{
    const res = await getMetaData();
    if(res.error) return alert(res.error);
    setMedaData(res.response);
  }

  useEffect(()=>{
    fetchData();
  },[])
  return (
  <Suspense fallback={<p style={{textAlign:'center'}}>Content is almost Ready ...</p>}>
    <div className='cardbox'>
      {
        metaData.map((val)=>{
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
    </div>
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
