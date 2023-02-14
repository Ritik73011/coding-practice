import { Box, Typography } from "@mui/material";
const Category = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography>Home</Typography>
      </Box>
      <Box>
        <Typography>Random</Typography>
      </Box>
      <Box>
        <Typography>Nature</Typography>
      </Box>
      <Box>
        <Typography>Space</Typography>
      </Box>
      <Box>
        <Typography>Animals</Typography>
      </Box>
      <Box>
        <Typography>Technology</Typography>
      </Box>
    </Box>
  );
};

export default Category;
