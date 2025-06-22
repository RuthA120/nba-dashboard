import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://onduavpwisxkyzyuoutg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9uZHVhdnB3aXN4a3l6eXVvdXRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyOTg2MjMsImV4cCI6MjA2NTg3NDYyM30.e0GpI7A8i4MPSzWhdox5TltxN8pyaqPNqACEdw8Mabg'; // Get from Supabase settings

export const supabase = createClient(supabaseUrl, supabaseKey);
