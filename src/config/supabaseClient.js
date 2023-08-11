import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nqilnzignyzexusazwnv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xaWxuemlnbnl6ZXh1c2F6d252Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE1ODEzMzEsImV4cCI6MjAwNzE1NzMzMX0.R6swsPXy6pq3GqDzu1FKgdWJSQsmhtrmkvqQVoHggv0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
