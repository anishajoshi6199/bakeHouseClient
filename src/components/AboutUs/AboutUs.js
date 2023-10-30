import meal2 from '../../assets/images/meal2.jpg';
import './style.scss';

const AboutUs = () => {
  return (
    <>
      <section className="block--aboutUs">
        <div className="container aboutUs grid grid--1x2">
          <picture className="aboutUs_img">
            <img src={meal2} alt="" />
          </picture>
          <div className="aboutUs_content">
            <h2 className="aboutUsHeading">About Us</h2>
            <p className="">
              Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Aperiam velit,
              distinctio voluptatibus illum dolores at
              praesentium. Laboriosam rem nesciunt
              earum ipsam culpa. Voluptatem iste atque
              aliquam libero eveniet laudantium
              ducimus.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
