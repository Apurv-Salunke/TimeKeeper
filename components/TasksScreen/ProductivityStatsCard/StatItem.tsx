"use client"; // Add this directive if interactivity is needed

import { Button } from "@/components/ui/button";

type StatItemProps = {
  icon: string;
  title: string;
  value: string;
};

export function StatItem({ icon, title, value }: StatItemProps) {
  const onClick = () => {
    console.log("Stat item clicked");
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="bg-[#0a3069] rounded-full w-10 h-10 flex items-center justify-center text-2xl">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm text-[#8b949e]">{value}</p>
        </div>
      </div>
      <Button variant="secondary" size="sm" onClick={onClick}>
        View
      </Button>
    </div>
  );
}
