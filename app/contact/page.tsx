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
          If you have any questions or concerns, please don&apos;t hesitate to reach out to us using the information below:
        </p>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <p className="mb-2"><strong>Email:</strong> <a href='mailto:speakoutniaja24@gmail.com'>speakoutniaja24@gmail.com</a></p>
          <p className="mb-2"><strong>Phone:</strong> <a href="">070-264-66500</a></p>
          <p className="mb-2"><strong>Address:</strong> Labspace, No 7, Piggery Road, David Umaru Estate, Tunga, Minna, Niger state.</p>
        </div>
        <p className="mt-4">
          For urgent matters or to report a case of corruption, please use our dedicated reporting form on the &quot;Report Case&quot;` page.
        </p>
      </div>
      <Footer />
    </Layout>
  )
}