import React from 'react';
import HeroSection from '../components/HeroSection';
import PurohitCard from '../components/PurohitCard';
import '../styles/purohits.css';

const Purohits = () => {
  const allPurohits = [
    {
      id: 1,
      name: 'Shri Venkatesh Shastri',
      expertise: 'Vedic Rituals, Homams',
      experience: '25 years',
      location: 'Bangalore',
      languages: ['Sanskrit', 'Kannada', 'Telugu', 'Hindi'],
      image: 'purohit1.jpg',
      rating: 4.8,
      about: 'A highly respected Vedic scholar with expertise in all major homams and rituals. Trained in traditional gurukula system.',
      ceremonies: ['Ganapathi Homam', 'Navagraha Homam', 'Satyanarayana Pooja', 'Weddings']
    },
    {
      id: 2,
      name: 'Shri Narayana Bhatt',
      expertise: 'Weddings, Upanayanam',
      experience: '18 years',
      location: 'Chennai',
      languages: ['Sanskrit', 'Tamil', 'Hindi'],
      image: 'purohit2.jpg',
      rating: 4.7,
      about: 'Specializes in wedding ceremonies and upanayanam. Known for his clear explanations of rituals in local languages.',
      ceremonies: ['Wedding Ceremonies', 'Upanayanam', 'Griha Pravesh', 'Namakaranam']
    },
    {
      id: 3,
      name: 'Shri Gopalakrishna Sarma',
      expertise: 'Homas, Pujas',
      experience: '30 years',
      location: 'Hyderabad',
      languages: ['Sanskrit', 'Telugu', 'Hindi'],
      image: 'purohit3.jpg',
      rating: 4.9,
      about: 'Renowned for his precise chanting of Vedic mantras and conducting elaborate homams with traditional methods.',
      ceremonies: ['Maha Mrityunjaya Homam', 'Sudarshana Homam', 'Ayush Homam', 'Dhanvantari Homam']
    },
    {
      id: 4,
      name: 'Shri Rajendra Shukla',
      expertise: 'Astrology-based Rituals',
      experience: '15 years',
      location: 'Delhi',
      languages: ['Sanskrit', 'Hindi', 'English'],
      image: 'purohit1.jpg',
      rating: 4.6,
      about: 'Combines Vedic rituals with astrological insights for personalized ceremonies based on individual horoscopes.',
      ceremonies: ['Navagraha Shanti', 'Rahu-Ketu Shanti', 'Sade Sati Pooja', 'Planetary Remedial Rituals']
    },
    {
      id: 5,
      name: 'Shri Muralidhara Sharma',
      expertise: 'Temple-style Pujas',
      experience: '20 years',
      location: 'Mysore',
      languages: ['Sanskrit', 'Kannada', 'Tamil'],
      image: 'purohit2.jpg',
      rating: 4.7,
      about: 'Specializes in elaborate temple-style pujas with traditional decorations and full ritual sequences.',
      ceremonies: ['Lakshmi Puja', 'Saraswati Puja', 'Durga Puja', 'Shiva Abhishekam']
    },
    {
      id: 6,
      name: 'Shri Vishwanath Joshi',
      expertise: 'Vedic Chanting & Homas',
      experience: '22 years',
      location: 'Pune',
      languages: ['Sanskrit', 'Marathi', 'Hindi'],
      image: 'purohit3.jpg',
      rating: 4.8,
      about: 'Expert in Rigvedic chanting and fire rituals. Conducts workshops on Vedic chanting along with rituals.',
      ceremonies: ['Rudrabhishekam', 'Veda Parayana', 'Gayatri Homam', 'Purusha Sukta Homam']
    }
  ];

  return (
    <div className="purohits-page">
      <HeroSection 
        title="Our Esteemed Purohits"
        subtitle="Connect with authentic Vedic scholars for your spiritual needs"
        image="hero-bg.jpg"
      />
      
      <section className="all-purohits">
        <div className="container">
          <h2 className="section-title">Meet Our Purohits</h2>
          <p className="section-subtitle">Qualified Vedic scholars with years of experience in performing authentic rituals</p>
          
          <div className="purohits-grid">
            {allPurohits.map(purohit => (
              <PurohitCard key={purohit.id} purohit={purohit} detailed={true} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="purohit-selection">
        <div className="container">
          <h3>How to Choose the Right Purohit?</h3>
          <div className="selection-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h4>Identify Your Needs</h4>
              <p>Determine the type of ceremony or ritual you need performed.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h4>Check Expertise</h4>
              <p>Look for purohits specialized in that particular ceremony.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h4>Consider Language</h4>
              <p>Ensure the purohit can explain rituals in a language you understand.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h4>Review Ratings</h4>
              <p>Check feedback from previous clients about their experience.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Purohits;