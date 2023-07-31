import heroImg from "./assets/hero.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>print(my projects)</h1>
          <p>
            Hey, Kartik Mishra this Side, I am a prefinal year B-Tech Student at
            VIT-Bhopal University, Here are my Projects listed that I have
            previously worked upon. If you like these projects and want to work
            furthur on them, Here is my github username : Hacker-KM. Thank You
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="women and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
