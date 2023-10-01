import React from "react";
import Footerlogo from "../Assets/Fitnesslogo.jpg";
import { Stack, Typography, Box } from "@mui/material";
const Footer = () => {
  return (
    <Box mt="80px" alignItems="center" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Footerlogo} alt="logo" width="200px" height="100px" />
        <Typography variant="h5" mb="50px">
          Made by <span style={{ color: "red" }}>Sharath Sana</span>
        </Typography>
      </Stack>
    </Box>
  );
};
export default Footer;
