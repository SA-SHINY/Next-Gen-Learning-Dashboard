export default function Loading() {
  return (
    <main className="min-h-screen p-6">
      <div className="grid gap-4 lg:grid-cols-4">
        {Array.from({ length: 8 }).map(
          (_, index) => (
            <div
              key={index}
              className="
                h-52
                animate-pulse
                rounded-3xl
                bg-slate-900
              "
            />
          )
        )}
      </div>
    </main>
  );
}