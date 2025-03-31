
import { User, Building, Award, Star } from "lucide-react";

const teamMembers = [
  {
    name: "Jennifer Martinez",
    role: "Founder & CEO",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Jennifer brings over 15 years of real estate experience, specializing in luxury properties and market analysis."
  },
  {
    name: "Robert Johnson",
    role: "Senior Agent",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Robert has helped hundreds of families find their perfect homes with his personalized approach to real estate."
  },
  {
    name: "Emma Wilson",
    role: "Property Manager",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
    bio: "Emma's expertise in property management ensures both landlords and tenants receive exceptional service."
  },
  {
    name: "Michael Chen",
    role: "Investment Specialist",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    bio: "Michael guides investors through the complexities of real estate investment with data-driven strategies."
  }
];

const stats = [
  { 
    icon: <Building className="h-8 w-8 text-dwellz-accent" />,
    value: "1,500+", 
    label: "Properties Sold" 
  },
  { 
    icon: <User className="h-8 w-8 text-dwellz-accent" />,
    value: "2,000+", 
    label: "Happy Clients" 
  },
  { 
    icon: <Award className="h-8 w-8 text-dwellz-accent" />,
    value: "15+", 
    label: "Years Experience" 
  },
  { 
    icon: <Star className="h-8 w-8 text-dwellz-accent" />,
    value: "97%", 
    label: "Client Satisfaction" 
  }
];

const About = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-dwellz-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">About DwellzConnect</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Your trusted partner in finding the perfect property since 2009.
          </p>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-dwellz-primary mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                DwellzConnect was founded in 2009 with a simple mission: to make the process of buying, 
                selling, and renting properties more transparent, efficient, and enjoyable.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small team of passionate real estate professionals has grown into a 
                full-service platform connecting thousands of clients with their ideal properties each year.
              </p>
              <p className="text-gray-600">
                We pride ourselves on combining cutting-edge technology with personalized service, 
                ensuring that every client receives the attention and expertise they deserve throughout 
                their real estate journey.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" 
                alt="DwellzConnect Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-dwellz-primary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Mission & Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dwellz-primary mb-4">Our Mission & Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At DwellzConnect, we're guided by a set of core principles that inform everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-dwellz-primary mb-4">Transparency</h3>
              <p className="text-gray-600">
                We believe in complete transparency throughout the real estate process, 
                providing clear information and honest guidance to every client.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-dwellz-primary mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every interaction, transaction, and relationship, 
                continuously improving our services to exceed expectations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-dwellz-primary mb-4">Community</h3>
              <p className="text-gray-600">
                We're committed to building and strengthening communities, not just selling properties. 
                We value the neighborhoods we serve and the people who live in them.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dwellz-primary mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our experienced team of real estate professionals is dedicated to helping you 
              achieve your property goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-dwellz-primary">{member.name}</h3>
                  <p className="text-dwellz-secondary mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
