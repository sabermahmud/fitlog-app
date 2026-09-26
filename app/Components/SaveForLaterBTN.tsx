"use client";

import { useContext } from "react";
import { FaCalendarCheck, FaPlus } from "react-icons/fa";
import { PlansContext } from "../Context/PlansContext";
import { WorkoutData } from "../types/dataTypes";
import { MdBookmarkAdded } from "react-icons/md";
import { toast } from "react-toastify";

interface SaveForLaterBTNProps {
  targetedWorkout: WorkoutData;
}

export default function SaveForLaterBTN({
  targetedWorkout,
}: SaveForLaterBTNProps) {
  const { savedPlan,
    setSavedPlan } = useContext(PlansContext);

  const isAdded = savedPlan.some(
    (workout) => workout.id === targetedWorkout.id
  );

  const handleAddToPlan = () => {
    if (isAdded) return;

    setSavedPlan([...savedPlan, targetedWorkout]);
    toast.success(`${targetedWorkout.name} saved successfully`)
  };

  return (
    <button
      type="button"
      onClick={handleAddToPlan}
      disabled={isAdded}
      className={`group flex w-full items-center justify-center gap-2.5 rounded-xl py-3.5 text-sm font-black transition-all duration-300 ${
        isAdded
          ? "cursor-not-allowed bg-base-200 text-base-content/50"
          : "bg-[#C2F800] text-black hover:-translate-y-0.5 hover:bg-[#b5e600] hover:shadow-lg"
      }`}
    >
      {isAdded ? (
        <>
          <MdBookmarkAdded className="text-sm" />
          Saved for later
        </>
      ) : (
        <>
          <FaPlus className="text-xs transition-transform duration-300 group-hover:rotate-90" />
          Save for later
        </>
      )}
    </button>
  );
}