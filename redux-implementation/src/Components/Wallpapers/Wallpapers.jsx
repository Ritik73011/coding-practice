import { Box } from "@mui/material";
import { useEffect } from "react";
import { api } from "../../private";
import {useDispatch,useSelector} from 'react-redux'
import wallActions from '../../Actions/wall.actions'
import { useNavigate } from "react-router";
const Wallpapers = () => {
 
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const fetchWall = async () => {
    const res = await fetch(api);
    const wallpapers = await res.json();
    wallActions(wallpapers,dispatch);
  };
  const wallpapers = useSelector((data)=>{
    return data.wallReducer.wallpapers
  })
  const handleClick = (id)=>{
    Navigate(`/${id}`)
  }
  useEffect(() => {
    if(wallpapers.length===0){
      fetchWall();
    }
  }, []);
  return (
    <Box
      sx={{
        margin: "8px auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(18em, 1fr))",
        gridGap: "2em",
        backgroundColor:"light"
      }}
    >

    {
        wallpapers.length>0?wallpapers.map((ele)=>{
            return <Box key={ele.id}>
                <img onClick={()=>handleClick(ele.id)} src={ele.urls.regular} alt={ele.alt_description} style={{width:"100%"}}/>
            </Box>
        }):<Box>Loading...</Box>
    }
    </Box>
  );
};

export default Wallpapers;
