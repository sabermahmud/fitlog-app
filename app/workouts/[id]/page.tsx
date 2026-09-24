import { WorkoutData } from "@/app/types/dataTypes";
import Image from "next/image";

export interface WorkDetailsPageProps {
  params: Promise<{ id: number }>;
}

const pagePromise = async (): Promise<WorkoutData[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

export default async function WorkDetailsPage({
  params,
}: WorkDetailsPageProps) {
  const { id } = await params;
  const pageData = await pagePromise();
  const targetedWork = pageData.filter((target) => target.id == id);
  console.log(targetedWork);

  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-sm">
        <figure>
           <Image
                      src={targetedWork.image}
                      alt={workout.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </>
  );
}
