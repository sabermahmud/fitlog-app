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

  const workout = pageData.find((target) => target.id === Number(id));

  if (!workout) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Workout Not Found</h1>
          <p className="mt-2 text-base-content/60">
            The workout you are looking for does not exist.
          </p>

          <Link
            href="/workouts"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#C2F800] px-5 py-3 font-bold text-black"
          >
            <FaArrowLeft />
            Back to Workouts
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Back Button */}
        <Link
          href="/workouts"
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold transition hover:text-[#C2F800]"
        >
          <FaArrowLeft />
          Back to Workouts
        </Link>

        {/* Main Card */}
        <div className="overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-xl">
          <div className="grid lg:grid-cols-2">
            {/* Image */}
            <div className="relative min-h-80 lg:min-h-150">
              <Image
                src={workout.image}
                alt={workout.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Rating */}
              <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full bg-black/75 px-4 py-2 text-sm font-bold text-white backdrop-blur-md">
                <FaStar className="text-[#C2F800]" />
                {workout.rating}
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col p-6 sm:p-8 lg:p-10">
              {/* Muscle Groups */}
              <div className="flex flex-wrap gap-2">
                {workout.muscleGroups.map((muscle) => (
                  <span
                    key={muscle}
                    className="rounded-full bg-[#C2F800] px-3 py-1 text-xs font-bold uppercase text-black"
                  >
                    {muscle}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h1 className="mt-5 text-3xl font-black uppercase leading-tight sm:text-4xl">
                {workout.name}
              </h1>

              {/* Difficulty */}
              <div className="mt-4">
                <span className="rounded-lg border border-base-300 px-3 py-1.5 text-sm font-semibold">
                  {workout.difficulty}
                </span>
              </div>

              {/* Description */}
              <p className="mt-6 leading-7 text-base-content/70">
                {workout.description}
              </p>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <div className="rounded-xl bg-base-200 p-4 text-center">
                  <FaClock className="mx-auto mb-2 text-[#C2F800]" />
                  <p className="font-bold">{workout.duration}</p>
                  <span className="text-xs text-base-content/50">Minutes</span>
                </div>

                <div className="rounded-xl bg-base-200 p-4 text-center">
                  <FaFire className="mx-auto mb-2 text-orange-500" />
                  <p className="font-bold">{workout.caloriesBurned}</p>
                  <span className="text-xs text-base-content/50">Calories</span>
                </div>

                <div className="rounded-xl bg-base-200 p-4 text-center">
                  <p className="mb-2 font-bold text-[#C2F800]">
                    {workout.sets}
                  </p>
                  <span className="text-xs text-base-content/50">Sets</span>
                </div>

                <div className="rounded-xl bg-base-200 p-4 text-center">
                  <p className="mb-2 font-bold text-[#C2F800]">
                    {workout.reps}
                  </p>
                  <span className="text-xs text-base-content/50">Reps</span>
                </div>
              </div>

              {/* Equipment */}
              <div className="mt-8 flex items-start gap-3">
                <FaDumbbell className="mt-1 text-[#C2F800]" />
                <div>
                  <p className="text-sm font-bold">Equipment</p>
                  <p className="mt-1 text-sm text-base-content/60">
                    {workout.equipment}
                  </p>
                </div>
              </div>

              {/* Instructions */}
              <div className="mt-8">
                <h2 className="text-xl font-bold">How to Perform</h2>

                <ol className="mt-4 space-y-3">
                  {workout.instructions.map((instruction, index) => (
                    <li
                      key={index}
                      className="flex gap-3 text-sm leading-6 text-base-content/70"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#C2F800] text-xs font-black text-black">
                        {index + 1}
                      </span>

                      <span>{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <button className="w-full rounded-xl bg-[#C2F800] py-3.5 font-bold text-black transition hover:bg-[#b5e600]">
                  Start Workout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
