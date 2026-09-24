import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-base-300 bg-base-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image src="/logo.png" alt="Fitlog logo" width={40} height={40} />

              <span className="text-3xl font-extrabold tracking-tight">
                FIT<span className="text-[#C2F800]">LOG</span>
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-base-content/60">
              Train smarter, stay consistent, and build a stronger version of
              yourself with FITLOG.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-4 font-bold">Explore</h3>

            <ul className="space-y-3 text-sm text-base-content/70">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-[#C2F800]"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/workouts"
                  className="transition-colors hover:text-[#C2F800]"
                >
                  Workouts
                </Link>
              </li>

              <li>
                <Link
                  href="/plans"
                  className="transition-colors hover:text-[#C2F800]"
                >
                  Plans
                </Link>
              </li>

              <li>
                <Link
                  href="/saved"
                  className="transition-colors hover:text-[#C2F800]"
                >
                  Saved Workouts
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-4 font-bold">Categories</h3>

            <ul className="space-y-3 text-sm text-base-content/70">
              <li>Chest</li>
              <li>Back</li>
              <li>Arms</li>
              <li>Legs</li>
              <li>Core</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-base-300 pt-6 text-sm text-base-content/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} FITLOG. All rights reserved.</p>

          <div className="flex gap-5">
            <Link
              href="/privacy"
              className="transition-colors hover:text-[#C2F800]"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-[#C2F800]"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
