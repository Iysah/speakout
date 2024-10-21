import Layout from '../layout'
import Link from 'next/link'
import Image from 'next/image'
import { Shield, FileText, MessageSquare } from 'lucide-react'
import HeroImage from '../hero-img.png'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function HomePage() {
  return (
    <Layout>
        <Navbar />
        {/* Hero Section */}
        <div className="relative h-[70vh] flex items-center justify-center">
            <Image
            src={HeroImage}
            alt="Anti-corruption background"
            layout="fill"
            objectFit="cover"
            className="absolute z-0"
            />
            <div className="relative z-10 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Fight Corruption Together</h1>
            <p className="text-xl md:text-2xl mb-8">Join our mission for a transparent and just society</p>
            <Link 
                href="/report" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300"
            >
                Report a Case
            </Link>
            </div>
        </div>

        <div className="m-10 flex items-center justify-center flex-col">
            <h1 className="text-4xl md:text-6xl font-bold my-8">SpeakOut</h1>
            <p className="text-xl md:text-2xl leading-7 tracking-wide my-8 px-10">Speak out is an anti-corruption and bribery app that users can report instances of bribery and corruption without fear of retaliation.The app guarantees anonymity by encrypting user data ensuring secure and confidential report submission. It also  provides key information on citizens' rights, the negative impacts of corruption,  and actionable steps to promote transparency and accountability It can also be  used by both literates and illiterate that is can be used in rural and urban areas</p>
        </div>
        <Footer />
    </Layout>
  )
}