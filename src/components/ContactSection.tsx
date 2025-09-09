import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const { toast } = useToast();

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const encode = (data: { [key: string]: string }) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData }),
    })
      .then(() => {
        toast({
          title: "Message Sent",
          description: "Thank you for your message. I'll get back to you soon!",
          duration: 5000,
        });
        setFormData({ name: "", subject:"", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Form submission error:", error);
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
        });
      });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "riccardoventurini220@gmail.com",
      href: "mailto:riccardoventurini220@gmail.com"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Nantes, France",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-dark-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-inter mb-6 text-white">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have a project in mind? Let's talk! I'm always open to new challenges and exciting collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold font-inter mb-6 text-white">Contact Information</h3>
              <p className="text-gray-400 mb-8">
                I'm available for freelance projects, collaborations, or job opportunities. 
                Feel free to reach out for any inquiries!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-dev-primary to-dev-secondary rounded-lg flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-dark-bg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{info.title}</h4>
                    <a 
                      href={info.href}
                      className="text-gray-400 hover:text-dev-primary transition-colors duration-200"
                    >
                      {info.content}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-dark-surface p-8 rounded-lg border border-dev-primary/20 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-accent border border-dev-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-dev-primary focus:border-transparent transition-all duration-200 text-white placeholder-gray-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-accent border border-dev-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-dev-primary focus:border-transparent transition-all duration-200 text-white placeholder-gray-500"
                    placeholder="your-email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-dark-accent border border-dev-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-dev-primary focus:border-transparent transition-all duration-200 text-white placeholder-gray-500"
                  placeholder="What would you like to talk about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-dark-accent border border-dev-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-dev-primary focus:border-transparent transition-all duration-200 resize-none text-white placeholder-gray-500"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-dev-primary to-dev-secondary text-dark-bg py-3 px-6 rounded-lg font-semibold hover:shadow-lg hover:shadow-dev-primary/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
