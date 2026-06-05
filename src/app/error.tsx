"use client";

export default function Error({
  reset
}: {
  reset: () => void;
}) {
  return (
    <main
      className="
        flex
        min-h-screen
        flex-col
        items-center
        justify-center
        gap-4
      "
    >
      <h1 className="text-3xl font-bold">
        Something went wrong
      </h1>

      <button
        onClick={() => reset()}
        className="
          rounded-xl
          bg-violet-600
          px-5
          py-3
        "
      >
        Retry
      </button>
    </main>
  );
}