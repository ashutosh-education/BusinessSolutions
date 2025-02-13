import { Metadata } from 'next';
import ContactForm from '@/components/contact-form';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us - BusinessSolutions',
  description: 'Reach out to BusinessSolutions for expert guidance, support, or inquiries.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-8 sm:py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
          Contact Us
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground text-center mb-8 sm:mb-12 px-4">
          We're here to help! Reach out to us for any inquiries, support, or collaboration opportunities.
        </p>

        {/* Grid Layout: Contact Form + Contact Info */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="p-4 sm:p-6 md:p-8 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-xl border border-white/10">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="p-4 sm:p-6 md:p-8 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-xl border border-white/10">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Contact Information</h2>
              <div className="space-y-4 sm:space-y-6">
                {/* Email */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500 shrink-0" />
                  <div>
                    <p className="text-base sm:text-lg font-semibold">Email</p>
                    <p className="text-sm sm:text-base text-muted-foreground">support@businesssolutions.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500 shrink-0" />
                  <div>
                    <p className="text-base sm:text-lg font-semibold">Phone</p>
                    <p className="text-sm sm:text-base text-muted-foreground">+1 (123) 456-7890</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500 shrink-0" />
                  <div>
                    <p className="text-base sm:text-lg font-semibold">Address</p>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      123 Business Street, Suite 456<br />
                      New York, NY 10001, USA
                    </p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500 shrink-0" />
                  <div>
                    <p className="text-base sm:text-lg font-semibold">Operating Hours</p>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Mon - Fri: 9:00 AM - 6:00 PM<br />
                      Sat - Sun: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="p-4 sm:p-6 md:p-8 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-xl border border-white/10">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Our Location</h2>
              <div className="h-48 sm:h-56 md:h-64 w-full rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.183792036036!2d-73.9877316845936!3d40.74844397932778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1732522877778"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}