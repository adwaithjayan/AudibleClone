import { createClient } from "@supabase/supabase-js";


const url = process.env.EXPO_PUBLIC_SUPBASE_URL!;
const key = process.env.EXPO_PUBLIC_SUPBASE_ANON_KEY!;

export const supabase = createClient(url,key,{
    auth:{
        autoRefreshToken:true,
        persistSession:true,
        detectSessionInUrl:false
    }
})