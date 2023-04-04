import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jebtrqhwkhlnpdlwnuyi.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImplYnRycWh3a2hsbnBkbHdudXlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc3ODU1NTAsImV4cCI6MTk5MzM2MTU1MH0._UZntUWZlu20Fp8UvN80MGGPAKqxWNtbQrETdoCqPvc'

export const supabase = createClient(supabaseUrl, supabaseKey)