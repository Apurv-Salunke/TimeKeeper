"use client";

import Link from "next/link";
import Image from "next/image";
import { Logo } from "./Logo";

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
                <Link href="#" className="hover:text-[#58a6ff]" prefetch={false}>
                    Dashboard
                </Link>
                <div className="flex items-center gap-2">
                    <Image src="/placeholder.svg" alt="User Avatar" width={32} height={32} className="rounded-full" />
                    <span>John Doe</span>
                </div>
            </div>
        </header>
    );
}
