import Layout from "../../layout/Layout";
import hero from "../../assets/home/desktop/bg-pattern-hero-home.svg";
import app from "../../assets/home/desktop/image-app-design.jpg";
import graphic from "../../assets/home/desktop/image-graphic-design.jpg";
import web from "../../assets/home/desktop/image-web-design-large.jpg";

function Home() {
  return (
    <Layout>
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
      <section className="flex justify-between w-full h-[640px] mb-32">
        <div className="relative">
          <img className="rounded-2xl" src={web} alt="Web Design Photo" />
          <div className="bg-[#00000080] rounded-2xl absolute top-0 bottom-0 left-0 right-0 z-20 flex justify-center items-center">
            <div className="text-white text-center">
              <h2 className="my-6">WEB DESIGN</h2>
              <p className="my-6 tracking-[5px]">
                VIEW PROJECTS <span className="text-peach">{">"}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="relative">
            <img className="rounded-2xl" src={app} alt="Web Design Photo" />
            <div className="bg-[#00000080] rounded-2xl absolute top-0 bottom-0 left-0 right-0 z-20 flex justify-center items-center">
              <div className="text-white text-center">
                <h2 className="my-6">APP DESIGN</h2>
                <p className="my-6 tracking-[5px]">
                  VIEW PROJECTS <span className="text-peach">{">"}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img className="rounded-2xl" src={graphic} alt="Web Design Photo" />
            <div className="bg-[#00000080] rounded-2xl absolute top-0 bottom-0 left-0 right-0 z-20 flex justify-center items-center">
              <div className="text-white text-center">
                <h2 className="my-6">GRAPHIC DESIGN</h2>
                <p className="my-6 tracking-[5px]">
                  VIEW PROJECTS <span className="text-peach">{">"}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Home;
