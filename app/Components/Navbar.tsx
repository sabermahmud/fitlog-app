import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const links = (
    <>
      <li>
        <Link
          href="/"
          className="font-medium transition-colors hover:text-[#C2F800]"
        >
          Dashboard
        </Link>
      </li>

      <li>
        <Link
          href="/workouts"
          className="font-medium transition-colors hover:text-[#C2F800]"
        >
          Workouts
        </Link>
      </li>

      <li>
        <Link
          href="/plans"
          className="font-medium transition-colors hover:text-[#C2F800]"
        >
          Plans
        </Link>
      </li>
    </>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-base-300 bg-base-100/95 shadow-sm backdrop-blur">
      <div className="navbar mx-auto min-h-18 max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Mobile Menu + Logo */}
        <div className="navbar-start gap-1">
          {/* Mobile menu */}
          <div className="dropdown">
            <button
              tabIndex={0}
              className="btn btn-ghost btn-circle lg:hidden"
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <ul
              tabIndex={-1}
              className="menu dropdown-content z-50 mt-3 w-52 rounded-2xl bg-base-100 p-3 shadow-xl"
            >
              {links}
            </ul>
          </div>

          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2"
          >
            <Image
              src="/logo.png"
              alt="Fitlog logo"
              width={38}
              height={38}
              className="transition-transform duration-300 group-hover:scale-105"
            />

            <span className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              FIT<span className="text-[#C2F800]">LOG</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2">
            {links}
          </ul>
        </nav>

        {/* Right Actions */}
        <div className="navbar-end gap-2">
          {/* Plan */}
          <Link
            href="/plans"
            className="btn btn-sm rounded-full border-base-300 px-3 sm:btn-md sm:px-4"
          >
            <span className="hidden sm:inline">Plan</span>
            <span className="rounded-full bg-[#C2F800] px-2 py-0.5 text-sm font-bold text-black">
              0
            </span>
          </Link>

          {/* Saved */}
          <Link
            href="/saved"
            className="btn btn-sm rounded-full border-base-300 px-3 sm:btn-md sm:px-4"
          >
            <span className="hidden sm:inline">Saved</span>
            <span className="font-bold">0</span>
          </Link>
        </div>
      </div>
    </header>
  );
}