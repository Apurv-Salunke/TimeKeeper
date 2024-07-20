"use client";

import Link from "next/link"

export default function error() {
  return (
    <main className="flex-1 p-8">
      <div className="max-w-4xl mx-auto flex items-center justify-center h-full">
        <div className="bg-[#161b22] rounded-lg p-8 text-center">
          <div className="bg-[#0a3069] rounded-full w-20 h-20 flex items-center justify-center text-4xl mb-4">🚨</div>
          <h2 className="text-2xl font-bold mb-2">Oops, something went wrong!</h2>
          <p className="text-[#8b949e] mb-6">
            We&apos;re sorry, but an unexpected error has occurred. Please try again later or contact support if the issue
            persists.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-[#58a6ff] px-4 py-2 text-white font-medium transition-colors hover:bg-[#4d94e6] focus:outline-none focus:ring-2 focus:ring-[#58a6ff] focus:ring-offset-2"
            prefetch={true}
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </main>
  )
}
