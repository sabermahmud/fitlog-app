"use client";

import { useContext } from "react";
import { PlansContext } from "../Context/PlansContext";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaDumbbell,
  FaPlay,
  FaClock,
  FaFire,
  FaCheck,
  FaStar,
} from "react-icons/fa";

export default function PlansPage() {
  const { myPlan } = useContext(PlansContext);

  if (myPlan.length === 0) {
    return (
      <main className="min-h-[70vh] bg-base-200/40 px-4 py-16">
        <div className="mx-auto flex min-h-[50vh] max-w-xl items-center justify-center text-center">
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-[#C2F800] text-3xl text-black shadow-lg">
              <FaDumbbell />
            </div>

            <h1 className="mt-6 text-3xl font-black tracking-tight sm:text-4xl">
              Your Plan Is Empty
            </h1>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-base-content/60 sm:text-base">
              Browse the workout library and add exercises to build your
              personal workout plan.
            </p>

            <Link
              href="/workouts"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#C2F800] px-6 py-3.5 font-bold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#b5e600] hover:shadow-lg"
            >
              Browse Workouts
              <FaArrowRight className="text-sm" />
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-base-200/40 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        {/* ================= HEADER ================= */}
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#8eb500]">
              FITLOG / MY PLAN
            </p>

            <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
              Your Workout Plan
            </h1>

            <p className="mt-2 text-sm text-base-content/60 sm:text-base">
              Stay consistent. Complete your workouts. Keep progressing.
            </p>
          </div>

          {/* Counter */}
          <div className="flex w-fit items-center gap-3 rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#C2F800] text-black">
              <FaDumbbell />
            </div>

            <div>
              <p className="text-lg font-black leading-none">
                {myPlan.length}
              </p>

              <p className="mt-1 text-xs text-base-content/50">
                {myPlan.length === 1 ? "Workout" : "Workouts"}
              </p>
            </div>
          </div>
        </div>

        {/* ================= PLAN LIST ================= */}
        <div className="space-y-5">
          {myPlan.map((plan, index) => (
            <div
              key={plan.id}
              className="group overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex flex-col lg:flex-row">

                {/* ================= IMAGE ================= */}
                <div className="relative h-56 w-full shrink-0 overflow-hidden lg:h-auto lg:min-h-56 lg:w-72">
                  <Image
                    src={plan.image}
                    alt={plan.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 288px"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

                  {/* Number */}
                  <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-xl bg-black/70 text-sm font-black text-white backdrop-blur-md">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Difficulty */}
                  <div className="absolute bottom-4 left-4">
                    <span className="rounded-full bg-[#C2F800] px-3 py-1.5 text-xs font-black uppercase text-black">
                      {plan.difficulty}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
                    <FaStar className="text-[#C2F800]" />
                    {plan.rating}
                  </div>
                </div>

                {/* ================= CONTENT ================= */}
                <div className="flex flex-1 flex-col justify-between p-5 sm:p-6 lg:p-7">

                  <div>
                    {/* Category / Muscle */}
                    <div className="flex flex-wrap gap-2">
                      {plan.muscleGroups.map((muscle) => (
                        <span
                          key={muscle}
                          className="rounded-full bg-base-200 px-3 py-1 text-xs font-semibold text-base-content/70"
                        >
                          {muscle}
                        </span>
                      ))}
                    </div>

                    {/* Name */}
                    <h2 className="mt-3 text-2xl font-black tracking-tight">
                      {plan.name}
                    </h2>

                    {/* Description */}
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-base-content/55">
                      {plan.description}
                    </p>

                    {/* ================= STATS ================= */}
                    <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">

                      <div className="rounded-xl bg-base-200/70 p-3">
                        <FaClock className="mb-2 text-[#C2F800]" />
                        <p className="text-sm font-black">
                          {plan.duration} min
                        </p>
                        <span className="text-[11px] text-base-content/45">
                          Duration
                        </span>
                      </div>

                      <div className="rounded-xl bg-base-200/70 p-3">
                        <FaFire className="mb-2 text-orange-500" />
                        <p className="text-sm font-black">
                          {plan.caloriesBurned}
                        </p>
                        <span className="text-[11px] text-base-content/45">
                          Calories
                        </span>
                      </div>

                      <div className="rounded-xl bg-base-200/70 p-3">
                        <FaDumbbell className="mb-2 text-[#C2F800]" />
                        <p className="text-sm font-black">
                          {plan.sets}
                        </p>
                        <span className="text-[11px] text-base-content/45">
                          Sets
                        </span>
                      </div>

                      <div className="rounded-xl bg-base-200/70 p-3">
                        <FaPlay className="mb-2 text-[#C2F800]" />
                        <p className="text-sm font-black">
                          {plan.reps}
                        </p>
                        <span className="text-[11px] text-base-content/45">
                          Reps
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* ================= ACTIONS ================= */}
                  <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-end">

                    <Link
                      href={`/workouts/${plan.id}`}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-base-300 px-5 py-3 text-sm font-bold transition hover:border-[#C2F800] hover:bg-base-200"
                    >
                      View Details
                      <FaArrowRight className="text-xs" />
                    </Link>

                    <button
                      type="button"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#C2F800] px-5 py-3 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#b5e600] hover:shadow-md"
                    >
                      <FaCheck className="text-xs" />
                      Mark as Done
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}