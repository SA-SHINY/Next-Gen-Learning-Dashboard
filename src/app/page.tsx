import Sidebar from "@/components/navigation/Sidebar";
import MobileNav from "@/components/navigation/MobileNav";
import BentoGrid from "@/components/dashboard/BentoGrid";
import { getCourses } from "@/lib/getCourses";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const courses = await getCourses();

  return (
    <main
      className="
        min-h-screen
        bg-[#050816]
        text-white
      "
    >
      <MobileNav />

      <div className="flex">
        <Sidebar />

        <div className="flex-1 p-4 lg:p-6">
          <BentoGrid courses={courses} />
        </div>
      </div>
    </main>
  );
}