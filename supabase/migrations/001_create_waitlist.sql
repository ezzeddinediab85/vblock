-- Create waitlist table
create table if not exists public.waitlist (
  id          uuid primary key default gen_random_uuid(),
  full_name   text not null,
  email       text not null,
  phone       text,
  profile_type text,
  hive_count  text,
  created_at  timestamptz default now()
);

-- Unique constraint on email to reject duplicates
alter table public.waitlist
  add constraint waitlist_email_unique unique (email);

-- Enable Row Level Security
alter table public.waitlist enable row level security;

-- Allow inserts from anon role (public signups)
create policy "Allow public inserts" on public.waitlist
  for insert
  to anon
  with check (true);
