# Streamline - Sound Plugin Finder

A landing page for Streamline, a tool that helps users find the perfect sound plugins based on their creative vision.

## Features

- Responsive landing page with modern design
- Email waitlist signup
- Data tracking with Supabase
- Smooth scrolling navigation

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Supabase for backend and data tracking

## Setting Up Supabase

1. Create a Supabase account at [supabase.com](https://supabase.com)
2. Create a new project
3. Navigate to the SQL Editor in your Supabase dashboard
4. Run the SQL script from `supabase/schema.sql` to create the necessary tables and policies
5. Get your Supabase URL and anon key from the API settings
6. Update the `.env.local` file with your Supabase credentials:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

## Data Tracking

The application tracks the following data:

1. **Waitlist Signups**: Email addresses of users who sign up for the waitlist
2. **Page Views**: Tracks when users view the page, including referrer and user agent information
3. **Feature Interests**: Tracks which features users click on or show interest in

## Development

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Set up your environment variables in `.env.local`
4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

This project can be deployed to Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in the Vercel dashboard
4. Deploy

## License

MIT
