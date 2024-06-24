import { supabase } from "$lib/supabase";

export async function load() {
  const { data } = await supabase.from("libraries").select('*');
  return {
    libraries: data ?? [],
  };
}

  export const prerender = true;