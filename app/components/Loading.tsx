"use client";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-[60vh]">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-black"></div>
    </div>
  );
}