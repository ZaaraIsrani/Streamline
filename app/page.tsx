import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Find Your Perfect Plugin Stack
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Stop wasting time searching for plugins. Get personalized recommendations for your music production workflow in seconds.
          </p>
          
          {/* Email Signup Form */}
          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500 text-white"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Get Early Access
              </button>
            </form>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-32 grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-xl">
            <div className="text-purple-400 text-4xl mb-4">⚡️</div>
            <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
            <p className="text-gray-400">Get plugin recommendations in seconds, not hours of research.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <div className="text-purple-400 text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2">Personalized</h3>
            <p className="text-gray-400">Tailored suggestions based on your genre, style, and budget.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <div className="text-purple-400 text-4xl mb-4">💰</div>
            <h3 className="text-xl font-semibold mb-2">Save Money</h3>
            <p className="text-gray-400">Find the best plugins for your needs without overspending.</p>
          </div>
        </div>
      </div>
    </main>
  )
} 