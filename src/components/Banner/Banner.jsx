import "./style.css";

const Banner = ({ bannerTxt }) => {
  return (
    <section className={`main-section`}>
      <h1 className="banner-heading">{bannerTxt}</h1>
    </section>
  );
};

export default Banner;
