import { createClient } from "@supabase/supabase-js";

const supabase=createClient("https://wgsybwdajlfplwjmcait.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxkbW5sb2Jtc3Vvd3Bla29ucWN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxNzAwNDQsImV4cCI6MjAyNDc0NjA0NH0.XqaMSN9KFbtk0Y3hJKWpoihh5lPco1IZGg-PuaX-yLU")
export default supabase