// app/community/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions - BusinessSolutions',
  description: 'Unlock opportunities with expert guidance and tailored solutions in IT, Sales, HR, Consulting, and more.',
};

export default function CommunityLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Main content container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {children}
      </main>
    </div>
  );
}