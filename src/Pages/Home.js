import React from "react";
import { Box } from "@mui/material";
import HeroBanner from "../Components/HeroBanner";
import SearchExercise from "../Components/SearchExercise";
import Exercises from "../Components/Exercises";
import Grid from "../Components/Grid";
const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercise />
      <Exercises />
    </Box>
  );
};

export default Home;
