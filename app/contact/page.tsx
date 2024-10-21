'use client'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Layout from '../layout'

export default function ContactPage() {
  return (
    <Layout>
      <Navbar />
      <div className='relative h-[90vh] flex items-center justify-center w-[100%] flex-col'>
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <p className="mb-4">
          If you have any questions or concerns, please don't hesitate to reach out to us using the information below:
        </p>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <p className="mb-2"><strong>Email:</strong> contact@anticorruption.org</p>
          <p className="mb-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
          <p className="mb-2"><strong>Address:</strong> 123 Transparency Street, Integrity City, 12345</p>
        </div>
        <p className="mt-4">
          For urgent matters or to report a case of corruption, please use our dedicated reporting form on the "Report Case" page.
        </p>
      </div>
      <Footer />
    </Layout>
  )
}