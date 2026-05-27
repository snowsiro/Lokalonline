CREATE TABLE IF NOT EXISTS messages (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  order_id uuid REFERENCES orders(id) ON DELETE CASCADE,
  sender_type text NOT NULL,  -- 'admin' | 'client'
  sender_name text,
  content text NOT NULL,
  created_at timestamptz DEFAULT now(),
  read_at timestamptz
);
CREATE INDEX IF NOT EXISTS messages_order_id_idx ON messages(order_id);
