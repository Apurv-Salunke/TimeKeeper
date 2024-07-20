"use client"; // Add this directive if interactivity is needed

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { LogItem } from "./LogItem";

export function DailyLogCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Daily Log</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <LogItem
          icon="🕰️"
          title="Focused Work"
          duration="2 hours 15 minutes"
        />
        <LogItem
          icon="🍲"
          title="Lunch Break"
          duration="45 minutes"
        />
        <LogItem
          icon="💤"
          title="Break"
          duration="30 minutes"
        />
      </CardContent>
    </Card>
  );
}
