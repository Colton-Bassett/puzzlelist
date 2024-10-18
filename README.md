# Daily Puzzle Tracker "Puzzle List"

TBD

## Todo

- [x] Create Figma mockup
- [x] Setup environment
- [x] Scaffold basic UI
- [x] Setup mock data
- [x] Setup Prisma SQLite --> Postgres database
- [x] Deploy on Vercel
- [x] Setup Prisma seeding & migration
- [x] Add authentication (Auth0)
- [x] Connect users to database
- [x] Refine schema
- [x] Add Shadcn
- [x] Add Follow/unfollow puzzle
- [x] Add Complete/uncheck puzzle input
- [x] Refine UI
- [x] Refine mobile UI
- [x] Refine schema (user created puzzles)
- [x] Add custom puzzle POST, DELETE
- [x] Make Signed-out page work
- [x] Add 'Help' 'Send Feedback' 'Disclaimer' pages/routes
- [x] Add Sanitization/Validation to new puzzle submissions
- [ ] Refine server-side error handling
- [ ] Setup Google Project in Google Cloud Console to enable oauth /w auth0 (in production)
- [ ] Setup Github Project to enable login /w auth0 (in production)
- [x] Clean up console.log statements and comments

## Extras

- [ ] Add API to fetch puzzle url icons
- [ ] Refine client-side error handling
- [ ] Add throttling for follow/unfollow, complete/uncheck puzzle actions
- [ ] Improve efficiency of server action calls by refactoring things
- [ ] Add analytics

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
