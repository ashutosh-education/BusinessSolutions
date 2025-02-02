import { Metadata } from 'next'
import LoginForm from '@/components/login-form'

export const metadata: Metadata = {
  title: 'Login - Proda',
  description: 'Log in to your Proda account or create a new one.',
}

export default function LoginPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Login or Register</h1>
      <LoginForm />
    </div>
  )
}

