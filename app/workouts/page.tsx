import WorkoutCard from "../Components/WorkoutCard";
import { WorkoutData } from "../types/dataTypes";
import { FaDumbbell } from "react-icons/fa";

const pagePromise = async (): Promise<WorkoutData[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!res.ok) {
    throw new Error("Failed to fetch workout data");
  }

  const data: WorkoutData[] = await res.json();
  return data;
};

export default async function WorkOutsPage() {
  const pageData = await pagePromise();

  return (
    <main id="library" className="min-h-screen bg-base-200/40 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <section className="mb-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#8eb500]">
                FITLOG / WORKOUTS
              </p>

              <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                Workout Library
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-base-content/60 sm:text-base">
                Explore workouts designed to help you train consistently,
                build strength, and stay active.
              </p>
            </div>

            {/* Workout Count */}
            <div className="flex w-fit items-center gap-3 rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C2F800] text-black">
                <FaDumbbell />
              </div>

              <div>
                <p className="text-lg font-black leading-none">
                  {pageData.length}
                </p>

                <p className="mt-1 text-xs text-base-content/50">
                  Available {pageData.length === 1 ? "Workout" : "Workouts"}
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-8 h-px bg-base-300" />
        </section>

        {/* Workout Grid */}
        <section>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pageData.map((workout) => (
              <WorkoutCard key={workout.id} workout={workout} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}