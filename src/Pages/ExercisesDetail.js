import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { fetchData, Exercisesoptions } from "../utils/fetchData";
import Detail from "../Components/Detail";
import Similar from "../Components/Similar";
import Spinner from "../Components/Loader";
// import Youtube from "../Components/Youtube";
import {youtubeoptions} from "../utils/fetchData";
const ExercisesDetail = () => {
  const [exercisesbyid, setExercisesbyid] = useState({});
  // const [youtube, setYoutube] = useState([]);
  const [target, setTarget] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const exercisedetail = async () => {
      const exercisebyidurl = `https://exercisedb.p.rapidapi.com/exercises`;
      const youtubeurl = "https://youtube-search-and-download.p.rapidapi.com";
      const fetchdata = await fetchData(
        `${exercisebyidurl}/exercise/${id}`,
        Exercisesoptions
      );
      // console.log(fetchdata);
      setExercisesbyid(fetchdata);
      // console.log(exercisesbyid, typeof exercisesbyid, "state");

      const youtubevideos = await fetchData(
        `${youtubeurl}/search?query=${fetchdata.name} exercise`,
        youtubeoptions
      );
      console.log(youtubevideos,"videos");
      // setYoutube(youtubevideos);

      const exercisebytarget = await fetchData(
        `${exercisebyidurl}/target/${fetchdata.target}`,
        Exercisesoptions
      );
      setTarget(exercisebytarget);
      const exercisebyequipment = await fetchData(
        `${exercisebyidurl}/equipment/${fetchdata.equipment}`,
        Exercisesoptions
      );
      setEquipment(exercisebyequipment);
    };
    exercisedetail();
  }, [id]);

  return (
    <Box>
      <Detail exercises={exercisesbyid} />
      <Similar target={target} equipment={equipment} />
    </Box>
  );
};

export default ExercisesDetail;
