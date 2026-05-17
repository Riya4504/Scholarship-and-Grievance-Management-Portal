import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vrfyzzpzbjqeekbgxaio.supabase.co/rest/v1/";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyZnl6enB6YmpxZWVrYmd4YWlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg5OTA5NjgsImV4cCI6MjA5NDU2Njk2OH0.D2eqPmvBfpO720aAmDfucGsmhetQtjIvyjJsadEL-PY";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;