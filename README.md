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
- [x] Update schema for user created puzzles
- [x] Add custom puzzle POST
- [x] Add puzzle DELETE when unfollowing user created puzzles
- [x] Filter mostFollowed and recommendedPuzzles to NOT show user created puzzles
- [x] Fix signed-out page
- [x] Add Mock 'Help' 'Send Feedback' 'Disclaimer' pages/routes
- [x] Fix bottom card UI issues, spacing
- [x] Sanitize createNewPuzzle inputs and validate URLs
- [x] Add createUser to actions.ts
- [ ] Add error handling
- [ ] Sort out auth0 development keys swap
- [ ] Clean up console.log statements

- [ ] Add throttling for Follow/unfollow, complete/uncheck
- [ ] Possibly refactor inefficient server action calls
- [ ] Routing, analytics
- [ ] Add API to fetch puzzle url icons

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
