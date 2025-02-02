import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Proda',
  description: 'Read about Proda\'s privacy policy and how we protect your data.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      {/* Add privacy policy content here */}
    </div>
  )
}

