import { supabase } from '../lib/supabaseClient';

export const registerUser = async (email, password) => { 
  const { data: signUpData, error: signUpError } = await supabase.auth.signUp({ 
    email,
    password,
  });

  if (signUpError){
    console.error('Sign-up error:', signUpError);
    return { success: false, message: signUpError.message };
  }

  return{ 
    success: true, 
    message: 'Sign-up successful! Please check your email to confirm your account before logging in.' 
  };
};




export const loginUser = async (email, password) => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('email', email)
    .single();

  if (error) {
    console.error('Login error:', error);
    return { success: false, message: 'User not found' };
  }

  if (data.password !== password) {
    return { success: false, message: 'Invalid password' };
  }

  return { success: true, user: data };
};


