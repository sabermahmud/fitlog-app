import Link from "next/link";
import { FaArrowRight, FaDumbbell } from "react-icons/fa";

export function Banner() {
    
    return <>
     <section className="mb-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#8eb500]">
            FITLOG / DASHBOARD
          </p>

          <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            Welcome Back 👋
          </h1>

          <p className="mt-2 text-sm text-base-content/60 sm:text-base">
            Keep moving, stay consistent, and make every workout count.
          </p>
        </section>

        {/* Hero */}
        <section className="relative mb-6 overflow-hidden rounded-3xl bg-black p-6 text-white shadow-xl sm:p-8 lg:p-10">
          <div className="relative z-10 max-w-2xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C2F800]">
              YOUR FITNESS JOURNEY
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Build your routine.
              <br />
              <span className="text-[#C2F800]">Stay consistent.</span>
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-6 text-white/60">
              Track your workouts, follow your plan, and keep pushing yourself
              one session at a time.
            </p>

            <Link
              href="/workouts"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#C2F800] px-5 py-3 text-sm font-bold text-black transition hover:-translate-y-0.5 hover:bg-[#b5e600] hover:shadow-lg"
            >
              Explore Workouts
              <FaArrowRight className="text-xs" />
            </Link>
          </div>

          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#C2F800]/10 blur-3xl" />
          <div className="absolute -bottom-20 right-20 h-56 w-56 rounded-full bg-[#C2F800]/10 blur-3xl" />

          <FaDumbbell className="absolute bottom-6 right-8 hidden text-[180px] text-white/5 lg:block" />
        </section>
    
    </>
}