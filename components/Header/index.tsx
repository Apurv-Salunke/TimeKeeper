"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { Profile } from "../Profile";

export function Header() {
    return (
        <header className="bg-[#161b22] py-4 px-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Link href="#" prefetch={false}>
                    <Logo className="h-6 w-6 text-[#58a6ff]" />
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

                {/* Todo */}
                {/* <Link href="#" className="hover:text-[#58a6ff]" prefetch={false}>
                    Dashboard
                </Link> */}
                
                {/* Profile */}
                <Profile />
            </div>
        </header>
    );
}
