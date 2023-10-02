import React, { useState, useEffect } from "react";

import { Exercisesoptions, fetchData } from "../utils/fetchData";
import { useDispatch } from "react-redux";
import { searchedexercisesactions } from "../store/exercisesdata";
const Bodypart1 = (props) => {
  const [bodypart, setBodypart] = useState("all");
  const item = props.item;
  const className = props.className;
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetchData(
        "https://exercisedd.p.rapidapi.com/exercises",
        Exercisesoptions
      );
      if (bodypart === "all") {
        dispatch(searchedexercisesactions.searchedexercises(response));
      }

      const searchedexercises = response.filter(
        (exe) =>
          exe.name.toLowerCase().includes(bodypart) ||
          exe.target.toLowerCase().includes(bodypart) ||
          exe.equipment.toLowerCase().includes(bodypart) ||
          exe.bodyPart.toLowerCase().includes(bodypart)
      );
      dispatch(searchedexercisesactions.searchedexercises(searchedexercises));
    };
    fetchdata();
  }, [bodypart]);
  const handlesearch = async () => {
    setBodypart(item);
    window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
  };
  return (
    <div className="bodypart" onClick={handlesearch}>
      {item}
    </div>
  );
};

export default Bodypart1;
