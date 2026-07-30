CREATE TABLE IF NOT EXISTS engagements (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    full_name TEXT NOT NULL,
    work_email TEXT NOT NULL,
    company_name TEXT NOT NULL,
    company_size TEXT,
    project_type TEXT,
    timeline TEXT,
    budget_range TEXT,
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Basic RLS
ALTER TABLE engagements ENABLE ROW LEVEL SECURITY;

-- Allow insert from anon
CREATE POLICY "Allow public insert" ON engagements FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Allow service_role insert" ON engagements FOR INSERT TO service_role WITH CHECK (true);
