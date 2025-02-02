import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Proda',
  description: 'Read and understand Proda\'s terms of service.',
}

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      {/* Add terms of service content here */}
    </div>
  )
}

