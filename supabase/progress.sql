-- SQL schema for tracking emoji learning progress
create table if not exists progress (
  user_id uuid references auth.users not null,
  emoji text not null,
  known boolean not null,
  timestamp timestamptz default now()
);
