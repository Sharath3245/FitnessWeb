import { Exercisesoptions,fetchData } from '../utils/fetchData';
import {searchedexercisesactions } from '../store/exercisesdata';
export const Handlesearch=async(search)=>{
    // console.log(search)
    if(search){
        try{
            console.log(search)
            const exercisesdata=await fetchData('https://exercisedd.p.rapidapi.com/exercises',Exercisesoptions);
            console.log(exercisesdata)
            const searchedexercises=exercisesdata.filter(exe=>exe.name.toLowerCase().includes(search)
            || exe.target.toLowerCase().includes(search)
            ||exe.equipment.toLowerCase().includes(search)
            ||exe.bodyPart.toLowerCase().includes(search))
            console.log(searchedexercises)
return searchedexercises
        }
        catch(error){
            console.log(error,"error")
        }
      
    }
    
    
}