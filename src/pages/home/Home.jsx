import hero from "../../assets/home/desktop/bg-pattern-hero-home.svg";

function Home() {
  return (
    <>
      <section className="mb-32 relative rounded-2xl">
        <div className="bg-peach w-full h-[640px] rounded-2xl flex justify-between">
          <div className="text-white h-full w-[55%] py-20 pl-24 flex flex-col justify-evenly">
            <h1>Award-winning custom designs and digital branding solutions</h1>
            <p>
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
            </p>
            <button className="btn-dark">Learn more</button>
          </div>
          <div className="w-[45%] bg-[url('./assets/home/desktop/image-hero-phone.png')] bg-right-top -mt-12 mr-2"></div>
        </div>
        <img
          src={hero}
          className="absolute right-0 top-0 z-10"
          alt="background hero"
        />
      </section>
    </>
  );
}

export default Home;
