"use client"; // Add this directive if interactivity is needed

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { TaskItem } from "./TaskItem";

export function UpcomingTasksCard() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Upcoming Tasks</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <TaskItem
                    icon="📝"
                    title="Write blog post"
                    due="Due tomorrow"
                />
                <TaskItem
                    icon="🛠️"
                    title="Fix bug in app"
                    due="Due Friday"
                />
                <TaskItem
                    icon="📚"
                    title="Research new tech"
                    due="Due next week"
                />
            </CardContent>
        </Card>
    );
}
