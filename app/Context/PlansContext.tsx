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
  myPlan: WorkoutData[];
  setMyPlan: Dispatch<SetStateAction<WorkoutData[]>>;
}

export const PlansContext = createContext<PlansContextType>({
  myPlan: [],
  setMyPlan: () => {},
});

interface PlansProviderProps {
  children: ReactNode;
}

export default function PlansProvider({ children }: PlansProviderProps) {
  const [myPlan, setMyPlan] = useState<WorkoutData[]>([]);

  const shareData = {
    myPlan,
    setMyPlan,
  };

  return (
    <PlansContext.Provider value={shareData}>{children}</PlansContext.Provider>
  );
}
