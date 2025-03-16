import { createClient } from '@supabase/supabase-js';

// Initialize the Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase URL or Anon Key is missing. Please check your environment variables.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// User tracking functions
export const trackSignup = async (email: string) => {
  try {
    const { data, error } = await supabase
      .from('waitlist')
      .insert([{ email, signed_up_at: new Date().toISOString() }]);
    
    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error tracking signup:', error);
    return { success: false, error };
  }
};

// Page view tracking
export const trackPageView = async (page: string, referrer?: string) => {
  try {
    const { data, error } = await supabase
      .from('page_views')
      .insert([{ 
        page, 
        referrer: referrer || document.referrer,
        user_agent: navigator.userAgent,
        viewed_at: new Date().toISOString()
      }]);
    
    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error tracking page view:', error);
    return { success: false, error };
  }
};

// Feature interest tracking
export const trackFeatureInterest = async (feature: string) => {
  try {
    const { data, error } = await supabase
      .from('feature_interests')
      .insert([{ 
        feature,
        clicked_at: new Date().toISOString()
      }]);
    
    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error tracking feature interest:', error);
    return { success: false, error };
  }
}; 