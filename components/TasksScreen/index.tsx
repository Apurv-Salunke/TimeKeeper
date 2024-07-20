"use client";

import Link from "next/link"
import Image from "next/image";
import { CurrentTaskCard } from "./CurrentTaskCard"
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
    <div className="flex flex-col h-screen bg-[#0d1117] text-white">
      
      {/* Header */}
      <header className="bg-[#161b22] py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="#" prefetch={false}>
            <RocketIcon className="h-6 w-6 text-[#58a6ff]" />
          </Link>
          <h1 className="text-xl font-bold">Timekeeper</h1>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" className="hover:text-[#58a6ff]" prefetch={false}>
            Tasks
          </Link>
          <Link href="#" className="hover:text-[#58a6ff]" prefetch={false}>
            Logs
          </Link>
          <Link href="#" className="hover:text-[#58a6ff]" prefetch={false}>
            Dashboard
          </Link>
          <div className="flex items-center gap-2">
            <Image src="/placeholder.svg" alt="User Avatar" width={32} height={32} className="rounded-full" />
            <span>John Doe</span>
          </div>
        </div>
      </header>
      
      {/* Body */}
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
      
      {/* Footer */}
      <footer className="bg-[#161b22] py-4 px-6 text-center text-[#8b949e]">
        © 2023 Timekeeper. All rights reserved.
      </footer>
    </div>
  )
}

function RocketIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}