import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tgsrbzzhkknojtugnpxr.supabase.co";
const supabaseKey = "sb_publishable_jkQTGT_5RFCGlaEi9Uox7A_yAYAJQdT";

export const supabase = createClient(supabaseUrl, supabaseKey);