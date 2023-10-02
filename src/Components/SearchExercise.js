import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { Exercisesoptions, fetchData } from "../utils/fetchData";
import { searchedexercisesactions } from "../store/exercisesdata";
// import Horizontalscrollbar from "./Horizontalscrollbar";
import { useDispatch } from "react-redux";
import Grid from "./Grid";
const SearchExercise = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  useEffect(() => {
    const bodypartsdata = async () => {
      const bodyparts = await fetchData(
        "https://exercisedd.p.rapidapi.com/exercises/bodyPartList",
        Exercisesoptions
      );
      dispatch(searchedexercisesactions.bodyparts(bodyparts));
    };
    bodypartsdata();
  }, []);

  const handlesearch = async () => {
    if (search) {
      try {
        console.log(search);
        const exercisesdata = await fetchData(
          "https://exercisedd.p.rapidapi.com/exercises",
          Exercisesoptions
        );
        const searchedexercises = exercisesdata.filter(
          (exe) =>
            exe.name.toLowerCase().includes(search) ||
            exe.target.toLowerCase().includes(search) ||
            exe.equipment.toLowerCase().includes(search) ||
            exe.bodyPart.toLowerCase().includes(search)
        );
        setSearch("");
        dispatch(searchedexercisesactions.searchedexercises(searchedexercises));
      } catch (error) {
        console.log(error, "error");
      }
    }
  };
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight="700"
        sx={{
          fontSize: { lg: "44px", xs: "30px" }
        }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should You
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "40px"
            },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px"
          }}
          height="76px"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2526",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            postion: "absolute",
            right: "0"
          }}
          onClick={handlesearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        {/* <Horizontalscrollbar /> */}
        <Grid />
      </Box>
    </Stack>
  );
};

export default SearchExercise;
