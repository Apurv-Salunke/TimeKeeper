"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { TaskIcon } from "./TaskIcon";
import { TaskDetails } from "./TaskDetails";
import { ActionButtons } from "./ActionButtons";

type CurrentTaskCardProps = {
  icon: string;
  title: string;
  dueDate: string;
  onStart: () => void;
  onPause: () => void;
};

export function CurrentTaskCard({ icon, title, dueDate, onStart, onPause }: CurrentTaskCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Current Task</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center gap-4">
        <TaskIcon icon={icon} />
        <TaskDetails title={title} dueDate={dueDate} />
        <ActionButtons onStart={onStart} onPause={onPause} />
      </CardContent>
    </Card>
  );
}
