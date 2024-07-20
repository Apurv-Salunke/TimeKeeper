"use client";

import Link from "next/link";
import Image from "next/image";
import { CurrentTaskCard } from "./CurrentTaskCard";
import { DailyLogCard } from "./DailyLogCard";
import { ProductivityStatsCard } from "./ProductivityStatsCard";
import { UpcomingTasksCard } from "./UpcomingTasksCard";

export function Tasks() {
  const handleStart = () => {
    console.log("Timer started");
  };

  const handlePause = () => {
    console.log("Timer paused");
  };
  return (
    <main className="flex-1 p-8">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Current Task Card */}
        <CurrentTaskCard
          icon="🚀"
          title="Develop new feature"
          dueDate="2 hours"
          onStart={handleStart}
          onPause={handlePause}
        />

        {/* Daily Log Card */}
        <DailyLogCard />

        {/* Productivity Card */}
        <ProductivityStatsCard />

        {/* Upcoming Tasks */}
        <UpcomingTasksCard />
      </div>
    </main>
  );
}
