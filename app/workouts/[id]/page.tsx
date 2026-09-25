import StartWorkOutBTN from "@/app/Components/StartWorkOutBTN";
import { WorkoutData } from "@/app/types/dataTypes";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowLeft,
  FaClock,
  FaFire,
  FaDumbbell,
  FaStar,
  FaCheck,
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

  // this condition applied for auto identifying data type
  if (!targetedWorkout) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Workout Not Found</h1>

          <Link
            href="/workouts"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#C2F800] px-5 py-3 font-bold text-black"
          >
            <FaArrowLeft />
            Back to Workouts
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-base-200/40 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Back Button */}
        <Link
          href="/workouts"
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-base-content/70 transition hover:text-[#C2F800]"
        >
          <FaArrowLeft />
          Back to Workouts
        </Link>

        {/* Main Card */}
        <div className="overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-xl">
          <div className="grid lg:grid-cols-2">
            {/* ================= IMAGE ================= */}
            <div className="relative min-h-80 overflow-hidden lg:min-h-150">
              <Image
                src={targetedWorkout.image}
                alt={targetedWorkout.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

              {/* Rating */}
              <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full bg-black/70 px-4 py-2 text-sm font-bold text-white backdrop-blur-md">
                <FaStar className="text-[#C2F800]" />
                {targetedWorkout.rating}
              </div>

              {/* Difficulty */}
              <div className="absolute bottom-5 left-5">
                <span className="rounded-full bg-[#C2F800] px-4 py-2 text-xs font-black uppercase tracking-wide text-black">
                  {targetedWorkout.difficulty}
                </span>
              </div>
            </div>

            {/* ================= CONTENT ================= */}
            <div className="p-6 sm:p-8 lg:p-10">
              {/* Muscle Groups */}
              <div className="flex flex-wrap gap-2">
                {targetedWorkout.muscleGroups.map((muscle) => (
                  <span
                    key={muscle}
                    className="rounded-full border border-base-300 bg-base-200 px-3 py-1 text-xs font-semibold"
                  >
                    {muscle}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h1 className="mt-5 text-3xl font-black uppercase leading-tight tracking-tight sm:text-4xl">
                {targetedWorkout.name}
              </h1>

              {/* Description */}
              <p className="mt-5 text-sm leading-7 text-base-content/65 sm:text-base">
                {targetedWorkout.description}
              </p>

              {/* ================= STATS ================= */}
              <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {/* Duration */}
                <div className="rounded-2xl border border-base-300 bg-base-200/60 p-4">
                  <FaClock className="mb-3 text-lg text-[#C2F800]" />

                  <p className="text-lg font-black">
                    {targetedWorkout.duration}
                  </p>

                  <span className="text-xs text-base-content/50">Minutes</span>
                </div>

                {/* Calories */}
                <div className="rounded-2xl border border-base-300 bg-base-200/60 p-4">
                  <FaFire className="mb-3 text-lg text-orange-500" />

                  <p className="text-lg font-black">
                    {targetedWorkout.caloriesBurned}
                  </p>

                  <span className="text-xs text-base-content/50">Calories</span>
                </div>

                {/* Sets */}
                <div className="rounded-2xl border border-base-300 bg-base-200/60 p-4">
                  <FaDumbbell className="mb-3 text-lg text-[#C2F800]" />

                  <p className="text-lg font-black">{targetedWorkout.sets}</p>

                  <span className="text-xs text-base-content/50">Sets</span>
                </div>

                {/* Reps */}
                <div className="rounded-2xl border border-base-300 bg-base-200/60 p-4">
                  <FaStar className="mb-3 text-lg text-[#C2F800]" />

                  <p className="text-lg font-black">{targetedWorkout.reps}</p>

                  <span className="text-xs text-base-content/50">Reps</span>
                </div>
              </div>

              {/* ================= EQUIPMENT ================= */}
              <div className="mt-7 rounded-2xl border border-base-300 bg-base-200/50 p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#C2F800] text-black">
                    <FaDumbbell />
                  </div>

                  <div>
                    <p className="font-bold">Equipment</p>

                    <p className="mt-1 text-sm text-base-content/60">
                      {targetedWorkout.equipment}
                    </p>
                  </div>
                </div>
              </div>

              {/* ================= INSTRUCTIONS ================= */}
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-black">How to Perform</h2>

                  <span className="text-xs font-semibold text-base-content/40">
                    {targetedWorkout.instructions.length} Steps
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  {targetedWorkout.instructions.map((instruction, index) => (
                    <div
                      key={index}
                      className="flex gap-3 rounded-xl border border-base-300 bg-base-200/40 p-3"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#C2F800] text-xs font-black text-black">
                        {index + 1}
                      </span>

                      <p className="text-sm leading-6 text-base-content/70">
                        {instruction}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ================= CTA ================= */}
              <div className="mt-8">
                <StartWorkOutBTN targetedWorkout={targetedWorkout} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
