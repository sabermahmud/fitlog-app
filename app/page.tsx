import { Banner } from "./Components/Banner";
import WorkOutsPage from "./workouts/page";

export default function Page() {
  return (
    <>
      <div className="container">
        <Banner />
        <WorkOutsPage />
      </div>
    </>
  );
}
