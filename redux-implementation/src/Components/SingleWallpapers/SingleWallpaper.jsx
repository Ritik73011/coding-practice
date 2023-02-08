import {Box} from '@mui/material'
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import {singleApi,client_id} from '../../private'
const SingleWallpaper = () => {
    const {link} = useParams();
    const [img,setImage] = useState(null);

    const fetchImg = async() =>{
        const responce  = await fetch(singleApi+"/"+link+"/"+client_id)
        const img = await responce.json();
        setImage(img);
    }
    useEffect(()=>{
        fetchImg();
    },[])
  return (
   <Box sx={{display:"flex",justifyContent:"center"}}>
        <Box sx={{width:"100%",maxWidth:"800px"}}>
           {img? <img style={{width:"100%"}} src={img.urls.regular} alt={img.id}/>: <Box>Loading...</Box>}
        </Box>
   </Box>
  )
}

export default SingleWallpaper