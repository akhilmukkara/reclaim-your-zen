-- Create waitlist table to store email addresses
CREATE TABLE public.waitlist (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email text NOT NULL UNIQUE,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert their email (public waitlist)
CREATE POLICY "Anyone can join waitlist"
  ON public.waitlist
  FOR INSERT
  WITH CHECK (true);

-- Only authenticated users can view waitlist (for admin purposes)
CREATE POLICY "Only authenticated users can view waitlist"
  ON public.waitlist
  FOR SELECT
  USING (auth.role() = 'authenticated');