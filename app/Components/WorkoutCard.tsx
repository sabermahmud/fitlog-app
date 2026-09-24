import { FaStar, FaClock, FaFire, FaDumbbell } from "react-icons/fa";
import { WorkoutData } from "../types/dataypes";
import Link from "next/link";
import Image from "next/image";

export interface WorkoutCardProps {
  workout: WorkoutData;
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <>
      <div className="group overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        {/* Image */}
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {/* Rating */}
          <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/70 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
            <FaStar className="text-[#C2F800]" />
            {workout.rating}
          </div>

          {/* Difficulty */}
          <div className="absolute bottom-3 left-3 rounded-full bg-[#C2F800] px-3 py-1 text-xs font-bold uppercase text-black">
            {workout.difficulty}
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Muscle Groups */}
          <div className="mb-3 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-base-200 px-2.5 py-1 text-xs font-medium"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Title */}
          <h2 className="line-clamp-1 text-xl font-bold">{workout.name}</h2>

          {/* Description */}
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-base-content/60">
            {workout.description}
          </p>

          {/* Equipment */}
          <div className="mt-4 flex items-center gap-2 text-sm text-base-content/70">
            <FaDumbbell className="text-[#C2F800]" />
            <span className="line-clamp-1">{workout.equipment}</span>
          </div>

          {/* Stats */}
          <div className="mt-5 grid grid-cols-3 gap-2 border-y border-base-300 py-4">
            <div className="text-center">
              <FaClock className="mx-auto mb-1 text-[#C2F800]" />
              <p className="text-sm font-bold">{workout.duration} min</p>
              <span className="text-xs text-base-content/50">Duration</span>
            </div>

            <div className="border-x border-base-300 text-center">
              <FaFire className="mx-auto mb-1 text-orange-500" />
              <p className="text-sm font-bold">{workout.caloriesBurned}</p>
              <span className="text-xs text-base-content/50">Calories</span>
            </div>

            <div className="text-center">
              <p className="mb-1 text-sm font-bold">
                {workout.sets} × {workout.reps}
              </p>
              <span className="text-xs text-base-content/50">Sets / Reps</span>
            </div>
          </div>

          {/* Button */}
          <Link
            href={`/workouts/${workout.id}`}
            className="mt-5 block w-full rounded-xl bg-[#C2F800] py-3 text-center text-sm font-bold text-black transition hover:bg-[#b4e600]"
          >
            View Workout
          </Link>
        </div>
      </div>
    </>
  );
}
