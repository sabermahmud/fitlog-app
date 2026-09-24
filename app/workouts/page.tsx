import WorkoutCard from "../Components/WorkoutCard";
import { WorkoutData } from "../types/dataTypes";

const pagePromise = async (): Promise<WorkoutData[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

export default async function WorkOutsPage() {
  const pageData = await pagePromise();
  console.log(pageData);
  return (
    <>
      <h1>workouts :{pageData.length} </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {pageData.map((workout: WorkoutData) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </>
  );
}
