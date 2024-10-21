"use client"

import { useState } from 'react'
import Layout from '../layout'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function FeedbackPage() {
  const [feedback, setFeedback] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the feedback to your backend
    console.log('Feedback submitted:', feedback)
    alert('Thank you for your feedback!')
    setFeedback('')
  }

  return (
    <Layout>
      <Navbar />
      <div className='relative h-[80vh] flex items-center justify-center w-[100%] flex-col'>
        <h1 className="text-3xl font-bold mb-6 mt-10">Provide Feedback</h1>
        <p className="mb-4">
          Your feedback is valuable to us. It helps us improve our services and better combat corruption. Please share your thoughts, suggestions, or concerns below:
        </p>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[100%] max-w-7xl">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="feedback">
              Your Feedback
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="feedback"
              placeholder="Enter your feedback here"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
              rows={6}
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </Layout>
  )
}