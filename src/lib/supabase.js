import { createClient } from '@supabase/supabase-js'
import { PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public'
const supabaseUrl = 'https://fcmkyfkiiblxmbgwuegf.supabase.co'
const supabaseKey = PUBLIC_SUPABASE_ANON_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)

export async function fetchData() {
    const { data, error } = await supabase
      .from('libraries')
      .select('*');
    
    if (error) {
      throw error;
    }
  
    return {
        libraries: data ?? [],
    }
}