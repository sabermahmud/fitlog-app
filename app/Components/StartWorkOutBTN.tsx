"use client"
import { useContext } from "react";
import { FaCheck } from "react-icons/fa";
import { PlansContext } from "../Context/PlansContext";
import { WorkoutData } from "../types/dataTypes";

interface StartWorkOutBTNProps {
    targetedWorkout:WorkoutData;
}


export default function StartWorkOutBTN({targetedWorkout}:StartWorkOutBTNProps) {

    const {myPlan, setMyPlan} = useContext(PlansContext)
    const handleStart = () => {
        setMyPlan([...myPlan, targetedWorkout])
    }
  return (
    <>
      <button 
      onClick={()=>handleStart()}
      className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#C2F800] py-3.5 font-black text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#b5e600] hover:shadow-lg">
        <FaCheck />
        Start Workout
      </button>
    </>
  );
}
