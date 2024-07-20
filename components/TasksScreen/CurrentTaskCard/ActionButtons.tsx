"use client";

import { Button } from "../../ui/button";

type ActionButtonsProps = {
    onStart: () => void;
    onPause: () => void;
};

export function ActionButtons({ onStart, onPause }: ActionButtonsProps) {
    return (
        <div className="flex items-center gap-2">
            <Button onClick={onStart}>Start Timer</Button>
            <Button variant="secondary" onClick={onPause}>Pause</Button>
        </div>
    );
}