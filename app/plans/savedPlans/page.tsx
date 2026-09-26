"use client";

import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaDumbbell,
  FaPlay,
  FaClock,
  FaFire,
  FaStar,
  FaBookmark,
  FaTrash,
} from "react-icons/fa";
import { PlansContext } from "@/app/Context/PlansContext";
import { toast } from "react-toastify";

export default function SavedPlansPage() {
  const { savedPlan, setSavedPlan } = useContext(PlansContext);

  const handleSavedDataDelete = (id: number, name: string) => {
    const afterDelete = savedPlan.filter((deleted) => deleted.id !== id);
    setSavedPlan(afterDelete);
    toast.error(`${name} deleted successfully.`)
  };

  /* ================= EMPTY STATE ================= */

  if (savedPlan.length === 0) {
    return (
      <section className="flex min-h-[55vh] items-center justify-center px-4 py-12">
        <div className="w-full max-w-lg text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-[#C2F800] text-3xl text-black shadow-lg shadow-[#C2F800]/20">
            <FaBookmark />
          </div>

          <p className="mt-6 text-xs font-black uppercase tracking-[0.2em] text-[#8eb500]">
            SAVED PLANS
          </p>

          <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            No Saved Plans
          </h1>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-base-content/60 sm:text-base">
            Save workouts you want to come back to later and build your personal
            workout library.
          </p>

          <Link
            href="/workouts"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#C2F800] px-6 py-3.5 text-sm font-black text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#b5e600] hover:shadow-lg"
          >
            Explore Workouts
            <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </section>
    );
  }

  /* ================= MAIN ================= */

  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* ================= HEADER ================= */}

        <header className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#8eb500]">
              FITLOG / SAVED
            </p>

            <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
              Saved Workouts
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-6 text-base-content/60 sm:text-base">
              Your personal collection of workouts ready whenever you need them.
            </p>
          </div>

          {/* Counter */}

          <div className="flex w-fit items-center gap-3 rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C2F800] text-black">
              <FaBookmark />
            </div>

            <div>
              <p className="text-lg font-black leading-none">
                {savedPlan.length}
              </p>

              <p className="mt-1 text-xs font-medium text-base-content/50">
                {savedPlan.length === 1 ? "Saved Workout" : "Saved Workouts"}
              </p>
            </div>
          </div>
        </header>

        {/* ================= SAVED PLAN LIST ================= */}

        <div className="space-y-5">
          {savedPlan.map((plan, index) => (
            <article
              key={plan.id}
              className="group overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex flex-col lg:flex-row items-center p-6">
                {/* ================= IMAGE ================= */}

                <div className="relative h-60 w-full shrink-0 overflow-hidden lg:h-auto lg:min-h-82.5 lg:w-72">
                  <Image
                    src={plan.image}
                    alt={plan.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 288px"
                  />

                  {/* Overlay */}

                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />

                  {/* Number */}

                  <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-xl bg-black/70 text-xs font-black text-white backdrop-blur-md">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Saved Badge */}

                  <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-xl bg-[#C2F800] text-black shadow-md">
                    <FaBookmark className="text-sm" />
                  </div>

                  {/* Difficulty */}

                  <div className="absolute bottom-4 left-4">
                    <span className="rounded-full bg-[#C2F800] px-3 py-1.5 text-[11px] font-black uppercase tracking-wide text-black">
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
                    {/* Muscle Groups */}

                    <div className="flex flex-wrap gap-2">
                      {plan.muscleGroups.map((muscle) => (
                        <span
                          key={muscle}
                          className="rounded-full bg-base-200 px-3 py-1 text-[11px] font-bold text-base-content/65"
                        >
                          {muscle}
                        </span>
                      ))}
                    </div>

                    {/* Title */}

                    <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
                      {plan.name}
                    </h2>

                    {/* Description */}

                    <p className="mt-2 max-w-2xl line-clamp-2 text-sm leading-6 text-base-content/55">
                      {plan.description}
                    </p>

                    {/* ================= STATS ================= */}

                    <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
                      {/* Duration */}

                      <div className="rounded-2xl bg-base-200/70 p-3.5 transition-colors hover:bg-base-200">
                        <FaClock className="mb-2 text-[#8eb500]" />

                        <p className="text-sm font-black">
                          {plan.duration} min
                        </p>

                        <span className="text-[11px] text-base-content/45">
                          Duration
                        </span>
                      </div>

                      {/* Calories */}

                      <div className="rounded-2xl bg-base-200/70 p-3.5 transition-colors hover:bg-base-200">
                        <FaFire className="mb-2 text-orange-500" />

                        <p className="text-sm font-black">
                          {plan.caloriesBurned}
                        </p>

                        <span className="text-[11px] text-base-content/45">
                          Calories
                        </span>
                      </div>

                      {/* Sets */}

                      <div className="rounded-2xl bg-base-200/70 p-3.5 transition-colors hover:bg-base-200">
                        <FaDumbbell className="mb-2 text-[#8eb500]" />

                        <p className="text-sm font-black">{plan.sets}</p>

                        <span className="text-[11px] text-base-content/45">
                          Sets
                        </span>
                      </div>

                      {/* Reps */}

                      <div className="rounded-2xl bg-base-200/70 p-3.5 transition-colors hover:bg-base-200">
                        <FaPlay className="mb-2 text-[#8eb500]" />

                        <p className="text-sm font-black">{plan.reps}</p>

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
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-base-300 px-5 py-3 text-sm font-bold transition-all duration-200 hover:border-[#C2F800] hover:bg-base-200"
                    >
                      View Details
                      <FaArrowRight className="text-xs" />
                    </Link>

                  </div>
                </div>

                {/* REMOVE BTN */}
                <div>
                  <button
                    type="button"
                    onClick={() => handleSavedDataDelete(plan.id, plan.name)}
                    className="flex h-10 w-10 items-center justify-center rounded-xl text-base-content/40 transition-all duration-200 hover:bg-red-500/10 hover:text-red-500"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
