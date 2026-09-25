"use client"
import { FaCheck } from "react-icons/fa";

export default function StartWorkOutBTN() {
    const handleStart = () => {
        console.log("start work out btn clicked")
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
