// supabaseClient.ts
const { createClient } = require('@supabase/supabase-js');

// Make sure to set these in your .env file
const supabase_url = "https://umanjtaxxtkqywmgliuu.supabase.co";
const supabase_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVtYW5qdGF4eHRrcXl3bWdsaXV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI2ODM3ODAsImV4cCI6MjA3ODI1OTc4MH0.z1OfgiCuv5flEsHbLTRYviDc9mbJ_8jNujuPB0bBiZc";

export const supabase = createClient(supabase_url, supabase_key);

module.exports = { supabase };
