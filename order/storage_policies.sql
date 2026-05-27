-- Storage bucket upload policies for 'uploads' bucket
-- Supabase Dashboard → SQL Editor에서 실행

-- 1. 파일 크기 제한 (5MB) + 허용 MIME 타입 설정
UPDATE storage.buckets
SET
  file_size_limit = 5242880,  -- 5MB (bytes)
  allowed_mime_types = ARRAY[
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/webp',
    'application/pdf'
  ]
WHERE id = 'uploads';

-- 2. 업로드 정책: 인증 없이 uploads 버킷에 파일 업로드 허용 (주문 폼용)
--    이미 있으면 DROP 후 재생성
DROP POLICY IF EXISTS "Allow public uploads" ON storage.objects;
CREATE POLICY "Allow public uploads"
ON storage.objects FOR INSERT
TO anon, authenticated
WITH CHECK (bucket_id = 'uploads');

-- 3. 읽기 정책: 누구나 업로드된 파일 읽기 허용 (Public 버킷)
DROP POLICY IF EXISTS "Allow public reads" ON storage.objects;
CREATE POLICY "Allow public reads"
ON storage.objects FOR SELECT
TO anon, authenticated
USING (bucket_id = 'uploads');

-- 4. 삭제 정책: 인증된 사용자(어드민)만 파일 삭제 허용
DROP POLICY IF EXISTS "Allow authenticated deletes" ON storage.objects;
CREATE POLICY "Allow authenticated deletes"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'uploads');
