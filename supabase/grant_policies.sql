-- Supabase Data API 접근 권한 명시적 부여
-- 2026-10 변경사항(테이블 자동 노출 폐지) 사전 대응
-- Supabase Dashboard → SQL Editor에서 실행

GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.orders          TO anon, authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.clients         TO anon, authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.messages        TO anon, authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.inquiries       TO anon, authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.update_requests TO anon, authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.reviews         TO anon, authenticated;
