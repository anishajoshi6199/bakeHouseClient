import Hero from '../../components/Hero/Hero';
import AboutUs from '../../components/AboutUs/AboutUs';
import Curve from '../../components/Curve/Curve';
import FoodGallery from '../../components/FoodGallery/FoodGallery';
import Testimonial from '../../components/Testimonial/Testimonial';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';
import '../../styles/global.scss';
import Layout from '../Layout';

function Home() {
  return (
    <>
      <section className="block--hero">
        <Hero />
      </section>
      <AboutUs />
      <Curve />
      <FoodGallery />
      <Testimonial />
      <Menu />
      <Footer />




    </>
  );
}

export default Home; 
