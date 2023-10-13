import meal1 from '../../assets/images/meal1.png';
import './style.scss';
import NavBar from '../Navbar/Navbar';
import { useNavigate } from "react-router-dom";

const Hero = () => {

  const navigate = useNavigate()

  const onClickHandler = () => {
    navigate('/ContactUs');
  }

  return (
    <>
      <NavBar />
      <div className="hero grid grid--1x2">
        <picture className="hero_img">
          <img src={meal1} alt="Meal Serving Plate" />
        </picture>
        <div className="hero_content">
          <h1>Contact Us For</h1>
          <h1>Best Breakfast</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            laboriosam nostrum natus odit quam fuga temporibus nihil, error
            tenetur animi.
          </p>
          <a className="btn" onClick={onClickHandler} target="_blank">
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
