"use client";

// COMPONENTS:
// CurrentTaskCard - Displays the current task with a timer button.
// DailyLogCard - Shows the daily logs with a list of log items.
// ProductivityStatsCard - Presents productivity statistics with a list of stats.
// UpcomingTasksCard - Lists upcoming tasks with a start button for each.
// LogItem - Represents individual log items within DailyLogCard.
// StatItem - Represents individual statistics items within ProductivityStatsCard.
// TaskItem - Represents individual task items within UpcomingTasksCard.
// RocketIcon - SVG icon for the header or other UI elements.

import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CurrentTaskCard } from "./CurrentTaskCard"
import { DailyLogCard } from "./DailyLogCard";
import { ProductivityStatsCard } from "./ProductivityStatsCard";

export function Tasks() {

  const handleStart = () => {
    console.log("Timer started");
  };

  const handlePause = () => {
    console.log("Timer paused");
  };
  return (
    <div className="flex flex-col h-screen bg-[#0d1117] text-white">
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
            <img src="/placeholder.svg" alt="User Avatar" width={32} height={32} className="rounded-full" />
            <span>John Doe</span>
          </div>
        </div>
      </header>
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
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Tasks</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-[#0a3069] rounded-full w-10 h-10 flex items-center justify-center text-2xl">
                    📝
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Write blog post</h3>
                    <p className="text-sm text-[#8b949e]">Due tomorrow</p>
                  </div>
                </div>
                <Button variant="secondary" size="sm">
                  Start
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-[#0a3069] rounded-full w-10 h-10 flex items-center justify-center text-2xl">🛠️</div>
                  <div>
                    <h3 className="text-lg font-bold">Fix bug in app</h3>
                    <p className="text-sm text-[#8b949e]">Due Friday</p>
                  </div>
                </div>
                <Button variant="secondary" size="sm">
                  Start
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-[#0a3069] rounded-full w-10 h-10 flex items-center justify-center text-2xl">
                    📚
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Research new tech</h3>
                    <p className="text-sm text-[#8b949e]">Due next week</p>
                  </div>
                </div>
                <Button variant="secondary" size="sm">
                  Start
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <footer className="bg-[#161b22] py-4 px-6 text-center text-[#8b949e]">
        &copy; 2023 Timekeeper. All rights reserved.
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


function XIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
