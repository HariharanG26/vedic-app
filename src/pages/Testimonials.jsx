import React from 'react';
import HeroSection from '../components/HeroSection';
import TestimonialCard from '../components/TestimonialCard';
import '../styles/testimonials.css';

const Testimonials = () => {
  const allTestimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      location: 'Bangalore',
      review: 'The Ganapathi Homam performed by Shri Venkatesh Shastri was truly divine. Everything was arranged perfectly, from the materials to the timing. The purohit explained each step of the ritual which made it very meaningful for our family.',
      rating: 5,
      date: '15 Jan 2023',
      ceremony: 'Ganapathi Homam'
    },
    {
      id: 2,
      name: 'Priya Menon',
      location: 'Chennai',
      review: 'Our wedding ceremony was conducted with such authenticity and grace by Shri Narayana Bhatt. He accommodated all our special requests and made sure every ritual was performed correctly. Our guests were very impressed with his knowledge and delivery.',
      rating: 5,
      date: '22 Nov 2022',
      ceremony: 'Wedding Ceremony'
    },
    {
      id: 3,
      name: 'Anand Patel',
      location: 'Hyderabad',
      review: 'The house warming ceremony brought such positive energy to our home. Shri Gopalakrishna Sarma guided us through the entire process and even helped us source all the necessary items. The follow-up after the ceremony was also very thoughtful.',
      rating: 4,
      date: '5 Sep 2022',
      ceremony: 'Griha Pravesh'
    },
    {
      id: 4,
      name: 'Sunita Reddy',
      location: 'Mumbai',
      review: 'We performed the Navagraha Homam for my son who was having career obstacles. Within months we saw significant positive changes. The purohit was very knowledgeable about both the rituals and astrological aspects.',
      rating: 5,
      date: '30 Jul 2022',
      ceremony: 'Navagraha Homam'
    },
    {
      id: 5,
      name: 'Vikram Joshi',
      location: 'Pune',
      review: 'The Upanayanam ceremony for my son was performed with all traditional rites. The purohit took time to explain the significance of each ritual to my son, making it an educational experience as well as a spiritual one.',
      rating: 4,
      date: '12 May 2022',
      ceremony: 'Upanayanam'
    },
    {
      id: 6,
      name: 'Geeta Sharma',
      location: 'Delhi',
      review: 'The Satyanarayana Pooja was arranged at short notice when we were going through a difficult phase. The entire experience was very comforting and we felt positive changes in our family situation soon after.',
      rating: 5,
      date: '3 Mar 2022',
      ceremony: 'Satyanarayana Pooja'
    }
  ];

  return (
    <div className="testimonials-page">
      <HeroSection 
        title="Client Testimonials"
        subtitle="Hear from those who have experienced our services"
        image="hero-bg.jpg"
      />
      
      <section className="all-testimonials">
        <div className="container">
          <h2 className="section-title">What People Say</h2>
          <p className="section-subtitle">Read genuine feedback from our clients about their experiences</p>
          
          <div className="testimonials-grid">
            {allTestimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} detailed={true} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="rating-summary">
        <div className="container">
          <div className="summary-card">
            <h3>Our Service Ratings</h3>
            <div className="rating-stats">
              <div className="stat">
                <div className="stat-value">4.8</div>
                <div className="stat-label">Average Rating</div>
              </div>
              <div className="stat">
                <div className="stat-value">98%</div>
                <div className="stat-label">Would Recommend</div>
              </div>
              <div className="stat">
                <div className="stat-value">500+</div>
                <div className="stat-label">Ceremonies Performed</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="add-testimonial">
        <div className="container">
          <h3>Share Your Experience</h3>
          <p>Have you used our services? We'd love to hear about your experience!</p>
          <button className="btn">Submit Your Review</button>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;