"use client";

import Link from "next/link"

export default function error() {
  return (
    <div className="flex flex-col h-screen bg-[#0d1117] text-white">
      <header className="bg-[#161b22] py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="#" prefetch={false}>
            <RocketIcon className="h-6 w-6 text-[#58a6ff]" />
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
            <img src="/placeholder.svg" alt="User Avatar" width={32} height={32} className="rounded-full" />
            <span>John Doe</span>
          </div>
        </div>
      </header>
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto flex items-center justify-center h-full">
          <div className="bg-[#161b22] rounded-lg p-8 text-center">
            <div className="bg-[#0a3069] rounded-full w-20 h-20 flex items-center justify-center text-4xl mb-4">🚨</div>
            <h2 className="text-2xl font-bold mb-2">Oops, something went wrong!</h2>
            <p className="text-[#8b949e] mb-6">
              We're sorry, but an unexpected error has occurred. Please try again later or contact support if the issue
              persists.
            </p>
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-[#58a6ff] px-4 py-2 text-white font-medium transition-colors hover:bg-[#4d94e6] focus:outline-none focus:ring-2 focus:ring-[#58a6ff] focus:ring-offset-2"
              prefetch={false}
            >
              Go to Homepage
            </Link>
          </div>
        </div>
      </main>
      <footer className="bg-[#161b22] py-4 px-6 text-center text-[#8b949e]">
        © 2023 Timekeeper. All rights reserved.
      </footer>
    </div>
  )
}

function RocketIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}
