import React from 'react'
import { Link } from 'react-router-dom';
import {Button,Typography,Stack} from "@mui/material"
const Exercisecard = ({exercise}) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy"/>
        <Stack direction="row" >
<Button sx={{color:"#fff",background:"#ffa9a9",fontSize:"14px",borderRadius:"20px",textTransform:'capitalize'}} 
borderRadius="20px">{exercise.bodyPart}</Button>
<Button sx={{color:"#fff",background:"#fcc757",fontSize:"14px",borderRadius:"20px",textTransform:'capitalize'}} 
borderRadius="20px">{exercise.target}</Button>

        </Stack>
        <Typography ml="21px" color="#000" fontWeight="bold"
        mt="12px" pb="10px" textTransform="capitalize" fontSize="22px"> {exercise.name}</Typography>
    </Link>
  )
}

export default Exercisecard