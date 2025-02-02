import { Metadata } from 'next'
import Features from '@/components/features'

export const metadata: Metadata = {
  title: 'Features - Proda',
  description: 'Explore the powerful features of Proda for Flutter development.',
}

export default function FeaturesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Proda Features</h1>
      <Features />
    </div>
  )
}

