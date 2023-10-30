import wave from '../../assets/images/wave.png';
import meal3 from '../../assets/images/meal3.png';
import meal4 from '../../assets/images/meal4.png';
import meal5 from '../../assets/images/meal5&16.png';
import './style.scss';

const Curve = () => {
  return (
    <div>
      <section className="block--curve">
        <div className="curve">
          <img className="wave scale-y-[0.8]" src={wave} alt="" />

          <div className="curve_content">
            <h2>Our Food Quality</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              laboriosam nostrum natus odit quam fuga temporibus nihil, error
              tenetur animi.
            </p>
          </div>
          <div className="img_top">
            <img src={meal3} alt="" />
          </div>
          <div className="img_mid">
            <img src={meal4} alt="" />
          </div>
          <div className="img_bottom">
            <img src={meal5} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Curve;
