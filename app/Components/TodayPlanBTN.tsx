"use client";

import { useContext } from "react";
import { FaCalendarCheck, FaPlus } from "react-icons/fa";
import { PlansContext } from "../Context/PlansContext";
import { WorkoutData } from "../types/dataTypes";
import { toast } from "react-toastify";

interface TodayPlanBTNProps {
  targetedWorkout: WorkoutData;
}

export default function TodayPlanBTN({
  targetedWorkout,
}: TodayPlanBTNProps) {
  const { todayPlan,
    setTodayPlan } = useContext(PlansContext);

  const isAdded = todayPlan.some(
    (workout) => workout.id === targetedWorkout.id
  );

  const handleAddToPlan = () => {
    if (isAdded) return;

    setTodayPlan( [...todayPlan, targetedWorkout]);

    toast.success(`${targetedWorkout.name} added to Today's plan successfully`)
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
          <FaCalendarCheck className="text-sm" />
          Added to Today's Plan
        </>
      ) : (
        <>
          <FaPlus className="text-xs transition-transform duration-300 group-hover:rotate-90" />
          Add to Today's Plan
        </>
      )}
    </button>
  );
}