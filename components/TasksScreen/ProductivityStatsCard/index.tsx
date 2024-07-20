"use client"; // Add this directive if interactivity is needed

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { StatItem } from "./StatItem";

export function ProductivityStatsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Productivity Stats</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <StatItem
          icon="📈"
          title="Tasks Completed"
          value="12 this week"
        />
        <StatItem
          icon="⏱️"
          title="Total Time Tracked"
          value="32 hours this week"
        />
        <StatItem
          icon="🔥"
          title="Streak"
          value="5 days"
        />
      </CardContent>
    </Card>
  );
}
