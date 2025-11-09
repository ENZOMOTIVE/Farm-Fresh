// supabaseClient.ts
const { createClient } = require('@supabase/supabase-js');

// Make sure to set these in your .env file
const supabase_url = process.env.SUPABASE_URL || "";
const supabase_key = process.env.SUPABASE_KEY || "";

const supabase = createClient(supabase_url, supabase_key);

module.exports = { supabase };
