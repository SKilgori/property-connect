
import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you shortly.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-dwellz-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Have questions about buying, selling, or renting? Our team is here to help.
          </p>
        </div>
      </section>
      
      {/* Contact Info and Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-dwellz-primary mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Whether you're looking to buy, sell, or simply have questions about real estate, 
                our experienced team is ready to assist you every step of the way.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-dwellz-secondary bg-opacity-10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-dwellz-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dwellz-primary">Our Office</h3>
                    <p className="text-gray-600">123 Real Estate Way, Property City, PC 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-dwellz-secondary bg-opacity-10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-dwellz-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dwellz-primary">Phone</h3>
                    <p className="text-gray-600">(123) 456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-dwellz-secondary bg-opacity-10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-dwellz-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dwellz-primary">Email</h3>
                    <p className="text-gray-600">info@dwellzconnect.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-dwellz-secondary bg-opacity-10 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-dwellz-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dwellz-primary">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-dwellz-primary mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-dwellz-accent hover:bg-dwellz-secondary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-dwellz-primary mb-6 text-center">Our Location</h2>
          <div className="h-96 bg-gray-300 rounded-lg overflow-hidden">
            {/* In a real app, you would embed a Google Map here */}
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <p className="text-gray-600">Map Placeholder</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
