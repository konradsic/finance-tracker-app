## Finance Tracker App
A simple finance tracker app built with Next.js, TypeScript, and Tailwind CSS. UI built on top of shadcn/ui components.

### Features
- [x] Account registration system using providers (currently only GitHub) or traditional email/password.
- [x] User authentication with BetterAuth
- [ ] Load transations from CSV file that will be parsed and stored in the database as a record.
- [ ] Extend existing records with CRUD operations on single transactions or upload another CSV to merge.
- [ ] Grid view of graphs, charts and informative data about the user's finances.
- [ ] Advanced data filtering, sorting, categorizing and searching options.
- [ ] Dark mode support.
- [ ] Ability to easily toggle sign-on methods for supported providers.

### Installing and running the app
Prerequisites: Node v20 or higher, pnpm package manager (install via `npm i -g pnpm`)

1. Clone the repository:
   ```bash
   git clone https://github.com/konradsic/finance-tracker-app.git
    cd finance-tracker-app
    ```
2. Install dependencies:
    ```bash
    pnpm install
    ```
3. Copy the example environment file:
    ```bash
   cp .env.example .env
   ```
4. Set up your environment variables in the `.env` file. To use GitHub authentication, you need to create a GitHub OAuth app ([tutorial](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app))
5. Run the development server:
    ```bash
    pnpm dev
    ```
6. Open your browser and navigate to `http://localhost:3000`

### Running in production
To run the app in production mode, you need to build it first:
```bash
pnpm build
```
Then you can start the production server:
```bash
pnpm start
```
