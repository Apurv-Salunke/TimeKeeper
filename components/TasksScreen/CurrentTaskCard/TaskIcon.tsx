type TaskIconProps = {
  icon: string;
};

export function TaskIcon({ icon }: TaskIconProps) {
  return (
    <div className="bg-[#0a3069] rounded-full w-20 h-20 flex items-center justify-center text-4xl">
      {icon}
    </div>
  );
}
