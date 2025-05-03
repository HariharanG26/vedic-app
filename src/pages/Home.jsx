  import React from 'react';
  import HeroSection from '../components/HeroSection';
  import ServiceCard from '../components/ServiceCard';
  import PurohitCard from '../components/PurohitCard';
  import TestimonialCard from '../components/TestimonialCard';
  import '../styles/home.css';

  const Home = () => {
    const services = [
      {
        id: 1,
        title: 'Ganapathi Homam',
        description: 'Invoke Lord Ganesha for success and prosperity in your endeavors.',
        image: 'ganapathi.jpg',
        duration: '2 hours',
        price: '₹5,000'
      },
      {
        id: 2,
        title: 'Wedding Ceremonies',
        description: 'Traditional Hindu wedding ceremonies performed by experienced purohits.',
        image: 'wedding.jpg',
        duration: 'Full day',
        price: '₹15,000'
      },
      {
        id: 3,
        title: 'House Warming',
        description: 'Griha Pravesh ceremony to bless your new home with positivity.',
        image: 'blessing.jpg',
        duration: '3 hours',
        price: '₹7,000'
      }
    ];

    const purohits = [
      {
        id: 1,
        name: 'Shri Venkatesh Shastri',
        expertise: 'Vedic Rituals, Homams',
        experience: '25 years',
        location: 'Bangalore',
        image: 'purohit1.jpg',
        rating: 4.8
      },
      {
        id: 2,
        name: 'Shri Narayana Bhatt',
        expertise: 'Weddings, Upanayanam',
        experience: '18 years',
        location: 'Chennai',
        image: 'purohit2.jpg',
        rating: 4.7
      },
      {
        id: 3,
        name: 'Shri Gopalakrishna Sarma',
        expertise: 'Homas, Pujas',
        experience: '30 years',
        location: 'Hyderabad',
        image: 'purohit3.jpg',
        rating: 4.9
      }
    ];

    const testimonials = [
      {
        id: 1,
        name: 'Rajesh Kumar',
        review: 'The Ganapathi Homam performed by Shri Venkatesh Shastri was truly divine. Everything was arranged perfectly.',
        rating: 5
      },
      {
        id: 2,
        name: 'Priya Menon',
        review: 'Our wedding ceremony was conducted with such authenticity and grace. Highly recommended!',
        rating: 5
      },
      {
        id: 3,
        name: 'Anand Patel',
        review: 'The house warming ceremony brought such positive energy to our home. Thank you for the wonderful service.',
        rating: 4
      }
    ];

    return (
      <div className="home-container">
        <HeroSection 
          title="Preserving Vedic Traditions"
          subtitle="Connect with authentic Vedic purohits for all your spiritual needs"
          image="hero-bg.jpg"
          ctaText="Book a Pooja Now"
          ctaLink="/book-pooja"
        />
        
        <section className="services-section">
          <h2>Our Services</h2>
          <div className="services-grid">
            {services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>
        
        <section className="purohits-section">
          <h2>Featured Purohits</h2>
          <div className="purohits-grid">
            {purohits.map(purohit => (
              <PurohitCard key={purohit.id} purohit={purohit} />
            ))}
          </div>
        </section>
        
        <section className="testimonials-section">
          <h2>What Our Clients Say</h2>
          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </section>
        
        <section className="cta-section">
          <h3>Ready for a Divine Experience?</h3>
          <p>Book a purohit for your next ceremony and experience authentic Vedic traditions.</p>
          <a href="/book-pooja" className="cta-button">Book Now</a>
        </section>
      </div>
    );
  };

  export default Home;