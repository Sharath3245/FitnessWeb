import React from "react";
import { Box } from "@mui/material";
import Lottie from "lottie-react";
import GymLoader from '../Assets/GymLoader.json'

const Spinner = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Lottie animationData={GymLoader}/>
    </Box>
  );
};

export default Spinner;
