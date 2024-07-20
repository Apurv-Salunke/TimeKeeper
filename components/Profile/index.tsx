"use client";

import Link from "next/link";
import Image from "next/image";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function Profile() {
    return (
        <div className="flex items-center gap-2">
            <Image src="/placeholder.svg" alt="User Avatar" width={32} height={32} className="rounded-full" />
            <span>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Avatar className="h-8 w-8">
                            <AvatarImage src="/placeholder-user.jpg" />
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                            <Link href="#" className="flex items-center gap-2" prefetch={false}>
                                <div className="h-4 w-4" />
                                <span>Profile</span>
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href="#" className="flex items-center gap-2" prefetch={false}>
                                <div className="h-4 w-4" />
                                <span>Settings</span>
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </span>
        </div>
    );
}
