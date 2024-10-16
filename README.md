# Daily Puzzle Tracker "Puzzle List"

TBD

## Todo

- [x] Create Figma mockup
- [x] Setup environment
- [x] Scaffold basic UI
- [x] Setup mock data
- [x] Setup basic Prisma SQLite database
- [x] Update to Prisma Postgresql database
- [x] Deploy on Vercel
- [x] Setup Prisma seeding & migration
- [x] Add authentication (Auth0)
- [x] Connect users to database
- [x] Refine schema
- [x] Add Shadcn
- [x] Add follow/unfollow puzzle
- [x] Add complete/uncheck puzzle input
- [x] Add mobile UI
- [x] Refine UI
- [ ] Add user custom puzzles to schema
- [ ] Add custom puzzle POST
- [ ] Add puzzle DELETE
- [ ] Add error handling

- [ ] Add throttling for Follow/unfollow, complete/uncheck
- [ ] Add Mock 'Help' 'Send Feedback' 'Disclaimer' pages/routes
- [ ] Delete button, dndkit, routing, analytics, shadcn, server actions

## Scripts

```bash
pnpm dev
# launch development server with live reloading, updates, and debugging.

pnpm prisma db push
# push changes to schema from prisma to database

pnpm prisma db seed
# create default puzzle data

pnpm prisma generate
# regenerates prisma client (use after schema changes)

pnpm prisma studio
# view local database in web browser

git add -p
# stage each change interactively, accept or skip specific changes.
# [y: stage, n: skip, q: quit, a: all, d: skip all, e: edit]
```

## Misc

- Vercel: gh
- Auth0: gh
