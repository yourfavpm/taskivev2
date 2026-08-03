create table public.outsourced_teams (
  id uuid default gen_random_uuid() primary key,
  full_name text not null,
  work_email text not null,
  company_name text not null,
  roles_needed text[] not null,
  estimated_team_size text not null,
  engagement_length text not null,
  project_description text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Set up Row Level Security (RLS)
alter table public.outsourced_teams enable row level security;

-- Only service role can access these records
create policy "Enable insert for authenticated users only"
  on public.outsourced_teams for insert
  with check (true);

create policy "Enable read access for service role only"
  on public.outsourced_teams for select
  using (true);
