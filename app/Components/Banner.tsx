import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaBolt,
  FaDumbbell,
  FaFire,
  FaPlay,
} from "react-icons/fa";

export function Banner() {
  return (
    <div className="mx-auto px-3 sm:px-6 lg:px-8">
      <section className="group relative mb-8 min-h-[650px] w-full overflow-hidden rounded-[1.75rem] bg-[#080808] text-white shadow-2xl sm:min-h-[460px] lg:min-h-[430px]">
        {/* Ambient Glow */}
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#C2F800]/10 blur-[90px]" />
        <div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-[#C2F800]/5 blur-[100px]" />

        {/* Grid Texture */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "38px 38px",
          }}
        />

        {/* Desktop Divider */}
        <div className="absolute right-[34%] top-0 hidden h-full w-px bg-white/[0.04] lg:block" />

        {/* ================= MOBILE IMAGE ================= */}
        <div className="pointer-events-none absolute bottom-30 left-1/2 z-10 -translate-x-1/2 sm:hidden">
          {/* Image Glow */}
          <div className="absolute bottom-8 left-1/2 h-24 w-56 -translate-x-1/2 rounded-full bg-[#C2F800]/10 blur-3xl" />

          <Image
            src="/banner.png"
            alt="FitLog workout athlete"
            width={450}
            height={560}
            priority
            className="relative h-auto w-63 object-contain opacity-95 transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </div>

        {/* ================= DESKTOP IMAGE ================= */}
        <div className="pointer-events-none absolute bottom-0 right-2 z-10 hidden items-end justify-center sm:flex lg:right-12">
          <div className="absolute bottom-8 h-20 w-48 rounded-full bg-[#C2F800]/10 blur-3xl" />

          <Image
            src="/banner.png"
            alt="FitLog workout athlete"
            width={420}
            height={560}
            priority
            className="relative h-auto w-56 object-contain opacity-95 transition-transform duration-700 ease-out group-hover:scale-[1.04] sm:w-64 lg:w-[330px]"
          />
        </div>

        {/* ================= CONTENT ================= */}
        <div className="relative z-20 flex min-h-[650px] w-full flex-col px-5 py-8 sm:min-h-[460px] sm:justify-center sm:px-10 sm:py-10 lg:min-h-[430px] lg:max-w-[65%] lg:px-12">
          {/* Label */}
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#C2F800]/20 bg-[#C2F800]/10 px-3 py-1.5 backdrop-blur-sm">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C2F800]">
              <FaBolt className="text-[8px] text-black" />
            </span>

            <span className="text-[9px] font-black uppercase tracking-[0.18em] text-[#C2F800] sm:text-[10px]">
              Workout Library
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-5 max-w-xl text-[2.35rem] font-black leading-[0.94] tracking-[-0.045em] sm:text-5xl lg:text-[4.2rem]">
            TRAIN WITH
            <br />
            <span className="text-[#C2F800]">INTENTION.</span>
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-md text-[13px] leading-5 text-white/45 sm:text-base sm:leading-6">
            Build consistency, follow your plan, and make every session count.
          </p>

          {/* CTA */}
          <div className="mt-5 flex flex-wrap items-center gap-3 sm:mt-7">
            <Link
              href="#library"
              className="group/btn inline-flex items-center gap-2.5 rounded-xl bg-[#C2F800] px-4 py-3 text-[10px] font-black tracking-wide text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#b5e600] hover:shadow-xl hover:shadow-[#C2F800]/10 sm:px-5 sm:py-3.5 sm:text-xs"
            >
              <FaPlay className="text-[8px]" />
              BROWSE WORKOUTS
              <FaArrowRight className="text-[9px] transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Link>

            <div className="hidden items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 backdrop-blur-sm sm:flex">
              <FaDumbbell className="text-xs text-[#C2F800]" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-white/50">
                Train Smarter
              </span>
            </div>
          </div>

          {/* Mobile Bottom Message */}
          <div className="absolute bottom-7 left-5 right-5 flex items-center justify-between border-t border-white/[0.08] pt-4 sm:hidden">
            <div className="flex items-center gap-2">
              <FaFire className="text-xs text-[#C2F800]" />

              <div>
                <p className="text-[10px] font-bold text-white">
                  Stay Consistent
                </p>

                <p className="text-[8px] uppercase tracking-wider text-white/30">
                  One session at a time
                </p>
              </div>
            </div>

            <FaDumbbell className="text-sm text-white/10" />
          </div>

          {/* Desktop Bottom Info */}
          <div className="mt-8 hidden items-center gap-6 border-t border-white/[0.07] pt-5 sm:flex">
            <div className="flex items-center gap-2">
              <FaFire className="text-xs text-[#C2F800]" />

              <div>
                <p className="text-xs font-bold text-white">Stay Consistent</p>

                <p className="text-[9px] uppercase tracking-wider text-white/30">
                  One session at a time
                </p>
              </div>
            </div>

            <div className="h-7 w-px bg-white/10" />

            <div>
              <p className="text-xs font-bold text-white">Track Progress</p>

              <p className="text-[9px] uppercase tracking-wider text-white/30">
                Build your routine
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="absolute bottom-0 left-0 h-1 w-32 bg-[#C2F800] shadow-[0_0_20px_rgba(194,248,0,0.35)] sm:w-56" />

        {/* Corner Detail */}
        <div className="absolute right-5 top-5 hidden h-8 w-8 border-r border-t border-[#C2F800]/20 sm:block" />
      </section>
    </div>
  );
}
