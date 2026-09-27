"use client";

import { useContext, useState } from "react";
import {
  FaBolt,
  FaCalendarCheck,
  FaClock,
  FaFire,
  FaBookmark,
} from "react-icons/fa";
import { PlansContext } from "../Context/PlansContext";
import TodaysPlansPage from "./todayPlan/page";
import SavedPlansPage from "./savedPlans/page";
import { WorkoutData } from "../types/dataTypes";

export default function PlansPage() {
  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

  const [sortBy, setSortBy] = useState<
    "Default" | "Duration" | "Calories" | "Rating"
  >("Default");

  const { todayPlan, savedPlan } = useContext(PlansContext);

  const activePlan = activeTab === "today" ? todayPlan : savedPlan;

  const isToday = activeTab === "today";

  /* ================= STATS ================= */

  const totalExercises = activePlan.length;

  const totalTime = activePlan.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  const totalCalories = activePlan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  const stats = [
    {
      label: "Exercises",
      value: totalExercises,
      icon: FaBolt,
      iconClass: "text-[#8eb500]",
      bgClass: "bg-[#C2F800]/15",
    },
    {
      label: "Time",
      value: `${totalTime} min`,
      icon: FaClock,
      iconClass: "text-blue-500",
      bgClass: "bg-blue-500/10",
    },
    {
      label: "Calories",
      value: totalCalories,
      icon: FaFire,
      iconClass: "text-orange-500",
      bgClass: "bg-orange-500/10",
    },
  ];

  /* ================= SORT ================= */

  const sortPlans = (plans: WorkoutData[]) => {
    const sortedPlans = [...plans];

    if (sortBy === "Duration") {
      sortedPlans.sort((a, b) => b.duration - a.duration);
    } else if (sortBy === "Calories") {
      sortedPlans.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    } else if (sortBy === "Rating") {
      sortedPlans.sort((a, b) => b.rating - a.rating);
    }

    return sortedPlans;
  };

  const sortedTodayPlans = sortPlans(todayPlan);
  const sortedSavedPlans = sortPlans(savedPlan);

  /* ================= SORT CHANGE ================= */

  const handleSortChange = (value: string) => {
    setSortBy(
      value as "Default" | "Duration" | "Calories" | "Rating",
    );
  };

  return (
    <main className="min-h-screen bg-base-200/50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}

        <section className="mb-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C2F800]" />

                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#8eb500]">
                  FITLOG / PLANS
                </p>
              </div>

              <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
                {isToday ? "Today's Plan" : "Saved Plans"}
              </h1>

              <p className="mt-2 max-w-xl text-sm leading-6 text-base-content/55 sm:text-base">
                {isToday
                  ? "Your selected workouts for today's training session."
                  : "Your saved workouts, ready whenever you want to train."}
              </p>
            </div>

            {/* Plan Count */}

            <div className="flex w-fit items-center gap-3 rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C2F800]/15">
                {isToday ? (
                  <FaCalendarCheck className="text-[#8eb500]" />
                ) : (
                  <FaBookmark className="text-[#8eb500]" />
                )}
              </div>

              <div>
                <p className="text-lg font-black leading-none">
                  {totalExercises}
                </p>

                <p className="mt-1 text-xs font-medium text-base-content/45">
                  {totalExercises === 1 ? "Workout" : "Workouts"}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= STATS ================= */}

        <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="group flex items-center gap-4 rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${stat.bgClass}`}
                >
                  <Icon
                    className={`text-lg transition-transform duration-300 group-hover:scale-110 ${stat.iconClass}`}
                  />
                </div>

                <div>
                  <p className="text-2xl font-black leading-none">
                    {stat.value}
                  </p>

                  <p className="mt-1.5 text-xs font-semibold text-base-content/45">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </section>

        {/* ================= TABS + SORT ================= */}

        <section className="mb-6 rounded-2xl border border-base-300 bg-base-100 p-2 shadow-sm">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            {/* Tabs */}

            <div className="grid grid-cols-2 gap-1">
              {/* Today's Plan */}

              <button
                type="button"
                onClick={() => setActiveTab("today")}
                className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-all duration-300 sm:text-base ${
                  isToday
                    ? "bg-[#C2F800] text-black shadow-sm"
                    : "text-base-content/50 hover:bg-base-200 hover:text-base-content"
                }`}
              >
                <FaCalendarCheck className="text-sm" />

                <span>Today's Plan</span>

                {todayPlan.length > 0 && (
                  <span
                    className={`min-w-6 rounded-full px-1.5 py-0.5 text-center text-[10px] font-black ${
                      isToday
                        ? "bg-black/10 text-black"
                        : "bg-base-200 text-base-content/50"
                    }`}
                  >
                    {todayPlan.length}
                  </span>
                )}
              </button>

              {/* Saved Plans */}

              <button
                type="button"
                onClick={() => setActiveTab("saved")}
                className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-all duration-300 sm:text-base ${
                  !isToday
                    ? "bg-[#C2F800] text-black shadow-sm"
                    : "text-base-content/50 hover:bg-base-200 hover:text-base-content"
                }`}
              >
                <FaBookmark className="text-sm" />

                <span>Saved Plans</span>

                {savedPlan.length > 0 && (
                  <span
                    className={`min-w-6 rounded-full px-1.5 py-0.5 text-center text-[10px] font-black ${
                      !isToday
                        ? "bg-black/10 text-black"
                        : "bg-base-200 text-base-content/50"
                    }`}
                  >
                    {savedPlan.length}
                  </span>
                )}
              </button>
            </div>

            {/* Sort Dropdown */}

            <div className="flex items-center gap-3">
              <span className="whitespace-nowrap text-sm font-bold text-base-content/50">
                Sort by
              </span>

              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                className="select h-11 min-h-11 w-40 rounded-xl border-base-300 bg-base-100 text-sm font-bold shadow-sm transition-all duration-200 hover:border-[#C2F800] focus:border-[#C2F800] focus:outline-none focus:ring-2 focus:ring-[#C2F800]/20"
              >
                <option value="Default">Default</option>
                <option value="Duration">Duration</option>
                <option value="Calories">Calories</option>
                <option value="Rating">Rating</option>
              </select>
            </div>
          </div>
        </section>

        {/* ================= ACTIVE CONTENT ================= */}

        <section className="overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-sm">
          {isToday ? (
            <TodaysPlansPage plans={sortedTodayPlans} />
          ) : (
            <SavedPlansPage plans={sortedSavedPlans} />
          )}
        </section>
      </div>
    </main>
  );
}