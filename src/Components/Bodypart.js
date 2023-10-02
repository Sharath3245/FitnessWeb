import React,{useState,useEffect} from 'react'
import {Stack,Typography} from "@mui/material";
import Icon from "../Assets/gym.png";
import { Exercisesoptions,fetchData } from '../utils/fetchData';
import {useDispatch} from "react-redux";
import {searchedexercisesactions } from '../store/exercisesdata';
const Bodypart = (props) => {
    const [bodypart,setBodypart]=useState("all")
    const item=props.item;
    const dispatch=useDispatch()
useEffect(()=>{
    const fetchdata=async()=>{
        const response=await fetchData('https://exercisedd.p.rapidapi.com/exercises',Exercisesoptions);
        if(bodypart==="all"){
            dispatch(searchedexercisesactions.searchedexercises(response))
        }
        
            const  searchedexercises=response.filter(exe=>exe.name.toLowerCase().includes(bodypart)
            || exe.target.toLowerCase().includes(bodypart)
            ||exe.equipment.toLowerCase().includes(bodypart)
            ||exe.bodyPart.toLowerCase().includes(bodypart));
            dispatch(searchedexercisesactions.searchedexercises(searchedexercises))
    }
    fetchdata();
  
},[bodypart])
const handlesearch=async()=>{
  setBodypart(item);
  window.scrollTo({top:1800,left:100,behavior:"smooth"});    
    }
  return (
    <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={{backgrounfColor:"#fff",borderTop:"4px solid #ff2625", width:"270px",height:"270px",cursor:"pointer",gap:"47px"}}
    onClick={handlesearch}
    >
        <img src={Icon} alt="Gym" style={{width:"40px",height:"40px"}}/>
        <Typography fontSize="24px" fontWeight="bold" color="#3A1212" textTransform="capitalize">{item}</Typography>
    </Stack>
  )
}

export default Bodypart