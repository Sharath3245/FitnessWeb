import Pagination from "@mui/material/Pagination";
import { Box, Typography, Stack } from "@mui/material";
import { useState } from "react";
import Exercisecard from "./Exercisecard";
const Paginations = ({ data, perpage, typo }) => {
  console.log(data.length, "pagination");
  const [currentpage, setCurrentpage] = useState(1);
  const indexoflastexercise = currentpage * perpage;
  const indexoffirstexercise = indexoflastexercise - perpage;
  const currentexercises = data.slice(
    indexoffirstexercise,
    indexoflastexercise
  );
  const handlepages = (e, value) => {
    setCurrentpage(value);
    window.scrollTo({ top: 2000, behavior: "smooth" });
  };
  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        {typo}
      </Typography>

      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentexercises.map((exercise, index) => (
          <Exercisecard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {currentexercises.length >= perpage && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(data.length / perpage)}
            size="large"
            page={currentpage}
            onChange={handlepages}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Paginations;
