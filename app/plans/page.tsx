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

export default function PlansPage() {
  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

  const { todayPlan, savedPlan } = useContext(PlansContext);

  const activePlan = activeTab === "today" ? todayPlan : savedPlan;

  const totalExercises = activePlan.length;

  const totalTime = activePlan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = activePlan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
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

  const isToday = activeTab === "today";

  return (
    <main className="min-h-screen bg-base-200/50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <section className="mb-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#8eb500]">
                FITLOG / PLANS
              </p>

              <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                {isToday ? "Today's Plan" : "Saved Plans"}
              </h1>

              <p className="mt-2 max-w-xl text-sm leading-6 text-base-content/55 sm:text-base">
                {isToday
                  ? "Your selected workouts for today's training session."
                  : "Your saved workouts, ready whenever you want to train."}
              </p>
            </div>

            {/* Active Plan Count */}
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

                <p className="mt-1 text-xs text-base-content/45">
                  {totalExercises === 1 ? "Workout" : "Workouts"}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="group flex items-center gap-4 rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${stat.bgClass}`}
                >
                  <Icon className={`text-lg ${stat.iconClass}`} />
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

        {/* Tabs */}
        <section className="mb-6 rounded-2xl border border-base-300 bg-base-100 p-1.5 shadow-sm">
          <div className="grid grid-cols-2 gap-1">

            {/* Today's Plan */}
            <button
              type="button"
              onClick={() => setActiveTab("today")}
              className={`relative flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-all duration-300 sm:text-base ${
                isToday
                  ? "bg-[#C2F800] text-black shadow-sm"
                  : "text-base-content/50 hover:bg-base-200 hover:text-base-content"
              }`}
            >
              <FaCalendarCheck className="text-sm" />
              Today's Plan

              {todayPlan.length > 0 && (
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-black ${
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
              Saved Plans

              {savedPlan.length > 0 && (
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-black ${
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
        </section>

        {/* Active Content */}
        <section className="overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-sm">
          {isToday ? <TodaysPlansPage /> : <SavedPlansPage />}
        </section>
      </div>
    </main>
  );
}