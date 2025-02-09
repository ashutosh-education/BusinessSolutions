import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services - BusinessSolutions',
  description: 'We provide a wide range of services to help you grow your business.',
}

export default function FeaturesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">BusinessSolutions </h1>
    </div>
  )
}

