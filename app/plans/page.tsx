"use client";

import { useState } from "react";
import TodayPlanPage from "./todayPlan/page";
import SavedPlansPage from "./savedPlans/page";
import TodaysPlansPage from "./todayPlan/page";

export default function PlansPage() {
  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

  return (
    <main className="min-h-screen bg-base-200 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold sm:text-3xl">My Plans</h1>

          <p className="mt-1 text-sm text-base-content/60 sm:text-base">
            Manage your workout plans and keep track of your saved workouts.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-6 rounded-xl bg-base-100 p-1.5 shadow-sm">
          <div className="grid grid-cols-2 gap-1">
            <button
              onClick={() => setActiveTab("today")}
              className={`rounded-lg px-4 py-3 text-sm font-semibold transition-all sm:text-base ${
                activeTab === "today"
                  ? "bg-[#2B303D] text-white shadow-sm"
                  : "text-base-content/60 hover:bg-base-200 hover:text-base-content"
              }`}
            >
              Today's Plan
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`rounded-lg px-4 py-3 text-sm font-semibold transition-all sm:text-base ${
                activeTab === "saved"
                  ? "bg-[#2B303D] text-white shadow-sm"
                  : "text-base-content/60 hover:bg-base-200 hover:text-base-content"
              }`}
            >
              Saved Plans
            </button>
          </div>
        </div>

        {/* Content */}
        <section className="rounded-2xl bg-base-100 p-4 shadow-sm sm:p-6">
          {activeTab === "today" ? <TodaysPlansPage /> : <SavedPlansPage />}
        </section>
      </div>
    </main>
  );
}
