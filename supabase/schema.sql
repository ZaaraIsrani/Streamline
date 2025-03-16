-- Create waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT NOT NULL UNIQUE,
  signed_up_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create page views table
CREATE TABLE IF NOT EXISTS page_views (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  page TEXT NOT NULL,
  referrer TEXT,
  user_agent TEXT,
  viewed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create feature interests table
CREATE TABLE IF NOT EXISTS feature_interests (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  feature TEXT NOT NULL,
  clicked_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create RLS policies
-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE feature_interests ENABLE ROW LEVEL SECURITY;

-- Create policies for inserting data
CREATE POLICY "Allow anonymous insert to waitlist" ON waitlist FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Allow anonymous insert to page_views" ON page_views FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Allow anonymous insert to feature_interests" ON feature_interests FOR INSERT TO anon WITH CHECK (true);

-- Create policies for authenticated users to view data
CREATE POLICY "Allow authenticated users to view waitlist" ON waitlist FOR SELECT TO authenticated USING (true);
CREATE POLICY "Allow authenticated users to view page_views" ON page_views FOR SELECT TO authenticated USING (true);
CREATE POLICY "Allow authenticated users to view feature_interests" ON feature_interests FOR SELECT TO authenticated USING (true); 