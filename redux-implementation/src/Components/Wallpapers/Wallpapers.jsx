import { Box } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { api } from "../../private";
const Wallpapers = () => {
  const [wall, setWall] = useState([]);

  const fetchWall = async () => {
    const res = await fetch(api);
    const wallpapers = await res.json();
    setWall(wallpapers);
  };

  useEffect(() => {
    fetchWall();
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
        wall.length>0?wall.map((ele)=>{
            return <Box key={ele.id}>
                <img src={ele.urls.regular} alt={ele.alt_description} style={{width:"100%"}}/>
            </Box>
        }):<Box>Loading...</Box>
    }
    </Box>
  );
};

export default Wallpapers;
