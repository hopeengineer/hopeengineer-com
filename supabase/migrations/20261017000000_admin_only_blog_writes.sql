-- Only the site admin can create, edit or delete blog posts. Anyone can still read them.
-- The admin is the same account the app treats as admin (ADMIN_EMAIL in src/components/supabase-provider.tsx).
-- Before this, any signed-in user could write through the public API.

begin;

drop policy if exists "Authenticated users can insert blog posts" on blog_posts;
drop policy if exists "Authenticated users can update blog posts" on blog_posts;
drop policy if exists "Authenticated users can delete blog posts" on blog_posts;

-- Leftovers from the March seeding, in case any survived
drop policy if exists "Temp anon insert" on blog_posts;
drop policy if exists "Temp anon update" on blog_posts;
drop policy if exists "Temp anon update v2" on blog_posts;

-- Safe to re-run
drop policy if exists "Admin can insert blog posts" on blog_posts;
drop policy if exists "Admin can update blog posts" on blog_posts;
drop policy if exists "Admin can delete blog posts" on blog_posts;

create policy "Admin can insert blog posts"
  on blog_posts for insert to authenticated
  with check ((select auth.jwt() ->> 'email') = 'csoft.sameera@gmail.com');

create policy "Admin can update blog posts"
  on blog_posts for update to authenticated
  using ((select auth.jwt() ->> 'email') = 'csoft.sameera@gmail.com')
  with check ((select auth.jwt() ->> 'email') = 'csoft.sameera@gmail.com');

create policy "Admin can delete blog posts"
  on blog_posts for delete to authenticated
  using ((select auth.jwt() ->> 'email') = 'csoft.sameera@gmail.com');

commit;

-- The policies now on blog_posts (the SQL Editor shows this table after Run)
select policyname, cmd, roles
from pg_policies
where tablename = 'blog_posts'
order by cmd, policyname;
