import { Course } from "@/types/course";
import { createSupabaseServerClient } from "./supabase/server";

export async function getCourses(): Promise<Course[]> {
  const supabase = createSupabaseServerClient();

  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }

  return data as Course[];
}