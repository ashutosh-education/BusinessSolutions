// app/community/layout.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Community - Proda',
  description: 'Join the Proda community and connect with other Flutter developers.',
}

export default function CommunityLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {children}
    </div>
  );
}
