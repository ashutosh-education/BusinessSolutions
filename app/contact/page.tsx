import { Metadata } from 'next'
import ContactForm from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Contact Us - Proda',
  description: 'Get in touch with the Proda team for support or inquiries.',
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <ContactForm />
    </div>
  )
}

