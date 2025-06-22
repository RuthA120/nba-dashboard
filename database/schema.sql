create table users (
  user_id uuid primary key default auth.uid(),
  username text unique not null,
  email text unique not null,
  password text not null
);