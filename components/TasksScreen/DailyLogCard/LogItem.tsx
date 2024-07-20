"use client"; // Add this directive if interactivity is needed

import { Button } from "@/components/ui/button";

type LogItemProps = {
  icon: string;
  title: string;
  duration: string;
};

export function LogItem({ icon, title, duration }: LogItemProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="bg-[#0a3069] rounded-full w-10 h-10 flex items-center justify-center text-2xl">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm text-[#8b949e]">{duration}</p>
        </div>
      </div>
      <Button variant="secondary" size="sm">
        View
      </Button>
    </div>
  );
}
