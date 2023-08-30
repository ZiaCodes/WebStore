import React from 'react'
import CardBox from './CardBox';
import MData from '../data'


const Card = () => {
  // const [searchContent, setsearchContent] = useState("");
  return (
    <>
        
    <div className='cardbox'>
      {
        MData.map((val)=>{
          return(
            <CardBox
            key = {val.id}
            poster={val.poster}
            name = {val.name}
            description = {val.description}
            url = {val.url}
            />
          )
        })
      }
    </div>
    </>
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