'use client'
import Layout from './layout'
import Link from 'next/link'
import Image from 'next/image'
import { Shield, FileText, MessageSquare } from 'lucide-react'
import HeroImage from './hero-img.png'
import Navbar from './components/navbar'
import Footer from './components/footer'

export default function HomePage() {
  return (
    <Layout>
      <Navbar />
      {/* Hero Section */}
      <div className="relative h-[80vh] flex items-center justify-center w-[100%]">
        <Image
          src={HeroImage}
          alt="Anti-corruption background"
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Shine your eyes, na better <span className='text-green-500 capitalize'>naija</span> we want.</h1>
          <p className="text-xl md:text-2xl mb-8">Join our mission for a transparent and just society</p>
          <Link 
            href="/report" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300"
          >
            Report a Case
          </Link>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features of Our Platform</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Anonymous Reporting Card */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <Shield className="w-16 h-16 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Anonymous Reporting</h3>
              <p className="text-center text-gray-600">
                Safely report corruption incidents without revealing your identity. Your security is our priority.
              </p>
            </div>

            {/* Easy Submission Card */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <FileText className="w-16 h-16 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy Submission</h3>
              <p className="text-center text-gray-600">
                Our user-friendly form makes it simple to submit detailed reports quickly and efficiently.
              </p>
            </div>

            {/* Feedback System Card */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <MessageSquare className="w-16 h-16 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Feedback System</h3>
              <p className="text-center text-gray-600">
                Help us improve our platform by providing valuable feedback on your experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
        <p className="text-lg text-center max-w-3xl mx-auto">
          Our mission is to combat corruption and bribery by providing a secure platform for individuals to report instances and raise awareness. Together, we can create a more transparent and just society. Your voice matters in the fight against corruption.
        </p>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8">Join us in the fight against corruption. Every report counts.</p>
          <Link 
            href="/report" 
            className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-full text-lg transition duration-300"
          >
            Report a Case Now
          </Link>
        </div>
      </div>
      <Footer />
    </Layout>
  )
}