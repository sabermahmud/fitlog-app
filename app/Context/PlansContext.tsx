"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { WorkoutData } from "@/app/types/dataTypes";

interface PlansContextType {
  todayPlan: WorkoutData[];
  setTodayPlan: Dispatch<SetStateAction<WorkoutData[]>>;
  savedPlan: WorkoutData[];
  setSavedPlan: Dispatch<SetStateAction<WorkoutData[]>>;
}

export const PlansContext = createContext<PlansContextType>({
  todayPlan: [],
  setTodayPlan: () => {},
  savedPlan: [],
  setSavedPlan: () => {},
});

interface PlansProviderProps {
  children: ReactNode;
}

export default function PlansProvider({ children }: PlansProviderProps) {
  const [todayPlan, setTodayPlan] = useState<WorkoutData[]>([]);
  const [savedPlan, setSavedPlan] = useState<WorkoutData[]>([]);

  const shareData = {
    todayPlan,
    setTodayPlan,
    savedPlan,
    setSavedPlan,
  };

  return (
    <PlansContext.Provider value={shareData}>{children}</PlansContext.Provider>
  );
}
