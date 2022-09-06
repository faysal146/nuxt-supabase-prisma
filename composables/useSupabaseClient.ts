import { createClient, SupabaseClient } from "@supabase/supabase-js";

type Client = null | SupabaseClient;

let supabase: Client = null;

export function useSupabaseClient(): SupabaseClient {
	const supabaseConfig = useRuntimeConfig().public.supabase;
	if (!supabase) {
		supabase = createClient(supabaseConfig.url, supabaseConfig.key);
	}
	return supabase;
}
