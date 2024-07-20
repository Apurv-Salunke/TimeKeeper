type TaskDetailsProps = {
    title: string;
    dueDate: string;
};

export function TaskDetails({ title, dueDate }: TaskDetailsProps) {
    return (
        <div>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-sm text-[#8b949e]">Due in {dueDate}</p>
        </div>
    );
}