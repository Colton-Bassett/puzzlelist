# Daily Puzzle Tracker "Puzzle List"

[Puzzle List](https://puzzlelist.vercel.app/) is a daily tracker app for online puzzles like Wordle and Connections. Users can create lists of their favorite puzzles and track their completion.

Built with [Next.js](https://nextjs.org/), it leverages newer [server actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations) for a separation of server and client code. The app uses Google and GitHub OAuth login via [Auth0](https://auth0.com/), along with a custom Puzzle API. User and puzzle data are stored in [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres) using [Prisma](https://www.prisma.io/). For styling and some UI components, Puzzle List uses [Tailwind](https://tailwindcss.com/) and [Shadcn](https://ui.shadcn.com/).

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
- [x] Refine basic server-side error handling
- [x] Setup Google and Github Production Oauth
- [x] Clean up console.log statements and comments

## Extras

- [ ] Add functionality to reset each user's 'completed' checkmarks every day

- [ ] Refine client-side error handling
- [ ] Add throttling for follow/unfollow, complete/uncheck puzzle actions
- [ ] Add API to fetch puzzle url icons
- [ ] Refactor server action calls to improve efficiency
- [ ] Refactor code to allow for some static (instead of dynamic) generated page routes
- [ ] Add optimistic updates
- [ ] Add analytics

## Scripts

```bash
pnpm dev
# launch development server with live reloading, updates, and debugging.

pnpm build
# bundle project and create deployable app

pnpm prisma studio
# view local database in web browser

pnpm prisma db push
# push changes to schema from prisma to database

pnpm prisma generate
# regenerates prisma client (use after schema changes)

pnpm prisma db seed
# create default puzzle data
```

## Dev Notes

- auth0 dashboard: https://manage.auth0.com/
- GH oauth project: https://github.com/settings/developers
- Google oauth project: https://console.cloud.google.com/

- Vercel: gh
- Auth0: gh
