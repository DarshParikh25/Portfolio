import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({
      submitted: true,
      success: false,
      message: 'Sending your message...'
    })

    // Replace these with your actual EmailJS service ID, template ID, and public key
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log('Email sent successfully:', result.text)
        setStatus({
          submitted: true,
          success: true,
          message: 'Message sent successfully! I will get back to you soon.'
        })
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        })
      })
      .catch((error) => {
        console.error('Failed to send email:', error.text)
        setStatus({
          submitted: true,
          success: false,
          message: 'Failed to send message. Please try again later.'
        })
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  return (
    <section className="bg-col py-16 px-8" id="contact">
      <h2 className="text-4xl font-bold text-center mb-16 font-rounded text-blue-400">Contact Me!</h2>
      <div className="max-w-6xl mx-auto flex justify-center items-center flex-wrap gap-24">
        <div className="flex-1 self-center bg-gray-800 max-w-[40%] px-12 py-16 rounded-3xl border border-gray-700">
          <p className="text-lg mb-12 leading-relaxed">
            Hello! Originating from Vadodara, Gujarat, I'm currently pursuing my B.Tech Degree 
            at SRM University in the cultural haven of Chennai, Tamil Nadu. Eager to connect? 
            Drop me a line using the contact details provided below - Let's embark on a journey 
            of connection and exploration together!
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <span className="font-bold text-blue-400">Location:</span>
              <span>Chennai, TamilNadu</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="font-bold text-blue-400">Phone No.:</span>
              <span>+91 7990143785</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="font-bold text-blue-400">Email:</span>
              <span>parikhdarsh121@gmail.com</span>
            </li>
          </ul>
        </div>
        <div className="flex-1 max-w-[50%]">
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-semibold">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg border-2 bg-transparent transition-colors duration-200 border-gray-300 focus:border-blue-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-semibold">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg border-2 bg-transparent transition-colors duration-200 border-gray-300 focus:border-blue-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-2 font-semibold">
                Contact No.:
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Contact Number"
                className="w-full px-4 py-2 rounded-lg border-2 bg-transparent transition-colors duration-200 border-gray-300 focus:border-blue-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-semibold">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-2 rounded-lg border-2 bg-transparent transition-colors duration-200 border-gray-300 focus:border-blue-500 focus:outline-none resize-none"
                required
              ></textarea>
            </div>
            {status.submitted && (
              <div className={`p-3 rounded-lg text-center ${status.success ? 'bg-green-900/30 text-green-300 border border-green-700' : 'bg-red-900/30 text-red-300 border border-red-700'}`}>
                {status.message}
              </div>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-blue-600 text-white py-3 rounded-lg transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700'}`}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact 