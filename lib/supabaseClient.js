// lib/supabaseClient.js
"use client";

import { createClient } from "@supabase/supabase-js";

// Aquí pones tu URL fija
const supabaseUrl = "https://mdceolastbhcpzhbdbfy.supabase.co";

// Aquí usas una key pública (anon), nunca la service_role
const supabaseKey = "TU_PUBLIC_ANON_KEY_AQUI";

// Exporta el cliente
export const supabase = createClient(supabaseUrl, supabaseKey);
