import {
  FaStar,
  FaClock,
  FaFire,
  FaDumbbell,
  FaArrowRight,
} from "react-icons/fa";
import { WorkoutData } from "../types/dataTypes";
import Link from "next/link";
import Image from "next/image";

export interface WorkoutCardProps {
  workout: WorkoutData;
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <Link href={`/workouts/${workout.id}`} className="group block h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
        {/* Image */}
        <div className="relative h-60 w-full overflow-hidden">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

          {/* Difficulty */}
          <div className="absolute left-4 top-4 rounded-full bg-[#C2F800] px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-black">
            {workout.difficulty}
          </div>

          {/* Image Bottom Info */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex flex-wrap gap-2">
              {workout.muscleGroups.slice(0, 3).map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-md"
                >
                  {muscle}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5">
          {/* Title */}
          <h2 className="line-clamp-1 text-xl font-black tracking-tight transition-colors duration-200 group-hover:text-[#8eb500]">
            {workout.name}
          </h2>

          {/* Description */}
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-base-content/55">
            {workout.description}
          </p>

          {/* Equipment */}
          <div className="mt-4 flex items-center gap-2.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-base-200">
              <FaDumbbell className="text-sm text-[#8eb500]" />
            </div>

            <div className="min-w-0">
              <p className="text-[10px] font-medium uppercase tracking-wider text-base-content/40">
                Equipment
              </p>

              <p className="truncate text-sm font-semibold text-base-content/75">
                {workout.equipment}
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-5 grid grid-cols-3 rounded-xl bg-base-200/60 py-4">
            {/* Duration */}
            <div className="text-center">
              <FaClock className="mx-auto mb-1.5 text-sm text-[#8eb500]" />

              <p className="text-sm font-black">
                {workout.duration}
                <span className="ml-0.5 text-[9px] font-medium text-base-content/45">
                  min
                </span>
              </p>

              <span className="text-[10px] text-base-content/40">Duration</span>
            </div>

            {/* Calories */}
            <div className="border-x border-base-300 text-center">
              <FaFire className="mx-auto mb-1.5 text-sm text-orange-500" />

              <p className="text-sm font-black">{workout.caloriesBurned}</p>

              <span className="text-[10px] text-base-content/40">Calories</span>
            </div>

            {/* Rating */}
            <div className="text-center">
              <FaStar className="mx-auto mb-1.5 text-sm text-[#8eb500]" />

              <p className="text-sm font-black">{workout.rating}</p>

              <span className="text-[10px] text-base-content/40">Rating</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
