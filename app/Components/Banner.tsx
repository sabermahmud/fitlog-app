import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaBolt } from "react-icons/fa";

export function Banner() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <section className="group relative mb-8 min-h-[400px] w-full overflow-hidden rounded-3xl bg-black text-white shadow-xl sm:min-h-[440px] lg:min-h-[400px]">
        {/* Background Glow */}
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#C2F800]/10 blur-3xl" />

        <div className="absolute -bottom-32 right-1/4 h-72 w-72 rounded-full bg-[#C2F800]/10 blur-3xl" />

        {/* Subtle Divider */}
        <div className="absolute left-1/2 top-0 hidden h-full w-px bg-white/[0.03] lg:block" />

        {/* Banner Image */}
        <div className="pointer-events-none absolute bottom-0 left-1/2 z-[1] flex -translate-x-1/2 justify-center sm:left-auto sm:right-8 sm:translate-x-0 lg:right-10 lg:top-1/2 lg:bottom-auto lg:-translate-y-1/2">
          <Image
            src="/banner.png"
            alt="Fitlog workout banner"
            width={280}
            height={400}
            priority
            className="h-auto w-40 object-contain opacity-90 transition-transform duration-700 group-hover:scale-105 sm:w-52 lg:w-64"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-6 py-8 sm:px-8 sm:py-10 lg:max-w-[60%] lg:px-10 lg:py-12">
          {/* Label */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C2F800]/20 bg-[#C2F800]/10 px-3 py-1.5">
            <FaBolt className="text-[10px] text-[#C2F800]" />

            <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#C2F800]">
              Your Fitness Journey
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-5 text-3xl font-black leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
            Build your routine.
            <br />
            <span className="text-[#C2F800]">Stay consistent.</span>
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-lg text-sm leading-6 text-white/55 sm:text-base">
            Track your workouts, follow your plan, and keep pushing yourself one
            session at a time.
          </p>

          {/* CTA */}
          <Link
            href="/workouts"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#C2F800] px-5 py-3.5 text-sm font-black text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#b5e600] hover:shadow-lg hover:shadow-[#C2F800]/10"
          >
            Explore Workouts
            <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Bottom Accent */}
        <div className="absolute bottom-0 left-0 h-1 w-48 bg-[#C2F800]" />
      </section>
    </div>
  );
}
