import SaveForLaterBTN from "@/app/Components/SaveForLaterBTN";
import TodayPlanBTN from "@/app/Components/TodayPlanBTN";
import { WorkoutData } from "@/app/types/dataTypes";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowLeft,
  FaClock,
  FaFire,
  FaDumbbell,
  FaStar,
} from "react-icons/fa";

export interface WorkDetailsPageProps {
  params: Promise<{ id: string }>;
}

const pagePromise = async (): Promise<WorkoutData[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!res.ok) {
    throw new Error("Failed to fetch workout data");
  }

  const data: WorkoutData[] = await res.json();
  return data;
};

export default async function WorkDetailsPage({
  params,
}: WorkDetailsPageProps) {
  const { id } = await params;

  const pageData = await pagePromise();

  const targetedWorkout = pageData.find((target) => target.id === Number(id));

  if (!targetedWorkout) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-base-200/40 px-4">
        <div className="w-full max-w-md rounded-3xl border border-base-300 bg-base-100 p-8 text-center shadow-xl">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C2F800]/15">
            <FaDumbbell className="text-2xl text-[#C2F800]" />
          </div>

          <h1 className="mt-5 text-2xl font-black sm:text-3xl">
            Workout Not Found
          </h1>

          <p className="mt-2 text-sm leading-6 text-base-content/60">
            The workout you are looking for does not exist or may have been
            removed.
          </p>

          <Link
            href="/workouts"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#C2F800] px-5 py-3 text-sm font-bold text-black transition hover:brightness-95 active:scale-95"
          >
            <FaArrowLeft />
            Back to Workouts
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-base-200/40 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Back Button */}
        <Link
          href="/workouts"
          className="group mb-6 inline-flex items-center gap-2 rounded-lg px-1 py-2 text-sm font-semibold text-base-content/60 transition hover:text-[#C2F800]"
        >
          <FaArrowLeft className="transition-transform group-hover:-translate-x-1" />
          Back to Workouts
        </Link>

        {/* Main Card */}
        <div className="overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-xl">
          <div className="grid lg:grid-cols-2">
            {/* ================= IMAGE ================= */}
            <div className="relative min-h-95 overflow-hidden sm:min-h-105 lg:min-h-160">
              <Image
                src={targetedWorkout.image}
                alt={targetedWorkout.name}
                fill
                priority
                className="object-cover transition duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-black/5" />

              {/* Rating */}
              <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-4 py-2 text-sm font-bold text-white shadow-lg backdrop-blur-md">
                <FaStar className="text-[#C2F800]" />
                <span>{targetedWorkout.rating}</span>
              </div>

              {/* Bottom Image Content */}
              <div className="absolute bottom-5 left-5 right-5">
                <span className="inline-flex rounded-full bg-[#C2F800] px-4 py-2 text-xs font-black uppercase tracking-wider text-black shadow-lg">
                  {targetedWorkout.difficulty}
                </span>

                <p className="mt-3 text-sm font-medium text-white/75">
                  {targetedWorkout.duration} min workout
                </p>
              </div>
            </div>

            {/* ================= CONTENT ================= */}
            <div className="p-5 sm:p-8 lg:p-10">
              {/* Muscle Groups */}
              <div className="flex flex-wrap gap-2">
                {targetedWorkout.muscleGroups.map((muscle) => (
                  <span
                    key={muscle}
                    className="rounded-full border border-base-300 bg-base-200 px-3 py-1.5 text-xs font-semibold text-base-content/70"
                  >
                    {muscle}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h1 className="mt-5 text-3xl font-black uppercase leading-[1.05] tracking-tight sm:text-4xl lg:text-[2.7rem]">
                {targetedWorkout.name}
              </h1>

              {/* Description */}
              <p className="mt-5 max-w-2xl text-sm leading-7 text-base-content/60 sm:text-base">
                {targetedWorkout.description}
              </p>

              {/* ================= STATS ================= */}
              <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {/* Duration */}
                <div className="group rounded-2xl border border-base-300 bg-base-200/50 p-4 transition hover:border-[#C2F800]/50">
                  <FaClock className="text-lg text-[#C2F800]" />

                  <p className="mt-3 text-lg font-black">
                    {targetedWorkout.duration}
                  </p>

                  <span className="text-xs font-medium text-base-content/45">
                    Minutes
                  </span>
                </div>

                {/* Calories */}
                <div className="group rounded-2xl border border-base-300 bg-base-200/50 p-4 transition hover:border-orange-400/50">
                  <FaFire className="text-lg text-orange-500" />

                  <p className="mt-3 text-lg font-black">
                    {targetedWorkout.caloriesBurned}
                  </p>

                  <span className="text-xs font-medium text-base-content/45">
                    Calories
                  </span>
                </div>

                {/* Sets */}
                <div className="group rounded-2xl border border-base-300 bg-base-200/50 p-4 transition hover:border-[#C2F800]/50">
                  <FaDumbbell className="text-lg text-[#C2F800]" />

                  <p className="mt-3 text-lg font-black">
                    {targetedWorkout.sets}
                  </p>

                  <span className="text-xs font-medium text-base-content/45">
                    Sets
                  </span>
                </div>

                {/* Reps */}
                <div className="group rounded-2xl border border-base-300 bg-base-200/50 p-4 transition hover:border-[#C2F800]/50">
                  <FaStar className="text-lg text-[#C2F800]" />

                  <p className="mt-3 text-lg font-black">
                    {targetedWorkout.reps}
                  </p>

                  <span className="text-xs font-medium text-base-content/45">
                    Reps
                  </span>
                </div>
              </div>

              {/* ================= EQUIPMENT ================= */}
              <div className="mt-7 rounded-2xl border border-base-300 bg-base-200/50 p-4 sm:p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#C2F800] text-black shadow-sm">
                    <FaDumbbell />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm font-bold">Equipment</p>

                    <p className="mt-1 truncate text-sm text-base-content/55">
                      {targetedWorkout.equipment}
                    </p>
                  </div>
                </div>
              </div>

              {/* ================= INSTRUCTIONS ================= */}
              <div className="mt-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-black sm:text-2xl">
                      How to Perform
                    </h2>

                    <p className="mt-1 text-xs text-base-content/45">
                      Follow each step carefully
                    </p>
                  </div>

                  <span className="shrink-0 rounded-full bg-base-200 px-3 py-1.5 text-xs font-bold text-base-content/50">
                    {targetedWorkout.instructions.length} Steps
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  {targetedWorkout.instructions.map((instruction, index) => (
                    <div
                      key={index}
                      className="group flex gap-3 rounded-2xl border border-base-300 bg-base-200/40 p-3.5 transition hover:border-[#C2F800]/40"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C2F800] text-xs font-black text-black">
                        {index + 1}
                      </span>

                      <p className="pt-0.5 text-sm leading-6 text-base-content/65">
                        {instruction}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ================= CTA ================= */}
              <div className="mt-8 border-t border-base-300 pt-6">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <div className="flex-1">
                    <TodayPlanBTN targetedWorkout={targetedWorkout} />
                  </div>

                  <div className="flex-1">
                    <SaveForLaterBTN targetedWorkout={targetedWorkout} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
