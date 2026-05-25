-- lokalonline Admin Panel — Supabase Setup
-- Supabase SQL Editor에 붙여넣고 실행하세요

-- 1. 문의 테이블
create table public.inquiries (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now() not null,
  name text not null,
  business text,
  email text not null,
  phone text,
  plan_interest text,
  message text,
  status text default 'new' not null
    check (status in ('new','contacted','converted','rejected')),
  notes text
);

-- 2. 고객 테이블
create table public.clients (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now() not null,
  name text not null,
  business_name text not null,
  email text not null,
  phone text,
  plan text not null check (plan in ('basis','standard','premium')),
  billing_cycle text default 'monthly' not null
    check (billing_cycle in ('monthly','yearly')),
  setup_fee_waived boolean default false not null,
  start_date date,
  next_billing date,
  status text default 'active' not null
    check (status in ('active','inactive','cancelled')),
  page_url text,
  notes text
);

-- 3. Row Level Security 활성화
alter table public.inquiries enable row level security;
alter table public.clients enable row level security;

-- 4. 문의 폼: 비로그인 사용자도 INSERT 가능 (랜딩페이지 문의 폼)
create policy "public_insert_inquiries" on public.inquiries
  for insert to anon with check (true);

-- 5. 로그인한 관리자만 모든 작업 가능
create policy "auth_all_inquiries" on public.inquiries
  for all to authenticated using (true) with check (true);

create policy "auth_all_clients" on public.clients
  for all to authenticated using (true) with check (true);
