import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy - Proda',
  description: 'Learn about how Proda uses cookies and how you can manage them.',
}

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
      {/* Add cookie policy content here */}
    </div>
  )
}

