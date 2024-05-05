import LocationsFlex from "../shared/LocationsFlex";
import Landing from "../shared/Landing";
import useScreenSize from "../../useHooks/useScreenSize";
import PropTypes from "prop-types";
//importing images:
import hero from "../../assets/about/mobile/image-about-hero.jpg";
import heroTablet from "../../assets/about/tablet/image-about-hero.jpg";
import heroDesktop from "../../assets/about/desktop/image-about-hero.jpg";
import talent from "../../assets/about/mobile/image-world-class-talent.jpg";
import talentTablet from "../../assets/about/tablet/image-world-class-talent.jpg";
import talentDesktop from "../../assets/about/desktop/image-world-class-talent.jpg";
import real from "../../assets/about/mobile/image-real-deal.jpg";
import realTablet from "../../assets/about/tablet/image-real-deal.jpg";
import realDesktop from "../../assets/about/desktop/image-real-deal.jpg";

function About() {
  const screen = useScreenSize().width;

  const bg =
    screen > 768
      ? "bg-[url('/src/assets/about/desktop/bg-pattern-hero-about-desktop.svg')]"
      : "bg-[url('/src/assets/about/mobile/bg-pattern-hero-about-mobile.svg')]";

  return (
    <>
      <section id="landing" className="xl:flex xl:h-[506px]">
        <img
          className="md:rounded-t-2xl lg:rounded-t-none xl:rounded-r-2xl xl:order-2 w-full md-w-auto"
          src={screen >= 1024 ? heroDesktop : screen >= 768 ? heroTablet : hero}
          alt="About page landing image"
        />
        <Landing
          className={`${bg} bg-[100%_25%] md:bg-right-bottom mt-0 md:rounded-b-2xl md:rounded-t-0 lg:rounded-b-none xl:rounded-l-2xl xl:order-1 xl:h-full`}
          title="About Us"
          para="Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients' audiences."
        />
      </section>
      <Article
        className="-mt-12 md:mt-24"
        img={
          screen >= 1024 ? talentDesktop : screen >= 768 ? talentTablet : talent
        }
        title="World-class talent"
        para1="We are a crew of strategists, problem-solvers, and technologists. Every
        design is thoughtfully crafted from concept to launch, ensuring success
        in its given market. We are constantly updating our skills in a myriad
        of platforms."
        para2="Our team is multi-disciplinary and we are not merely interested in form
        — content and meaning are just as important. We give great importance to
        craftsmanship, service, and prompt delivery. Clients have always been
        impressed with our high-quality outcomes that encapsulates their brand’s
        story and mission."
      />
      <LocationsFlex />
      <Article
        img={screen >= 1024 ? realDesktop : screen >= 768 ? realTablet : real}
        title="The real deal"
        para1="As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success."
        para2="We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results."
      />
    </>
  );
}

export default About;

function Article({ className = "", img, title, para1, para2 }) {
  return (
    <section className={`${className} my-12 xl:flex`}>
      <img
        className="md:rounded-t-2xl lg:rounded-t-none xl:rounded-l-2xl w-full md-w-auto"
        src={img}
        alt="World class talent image"
      />
      <article className="py-12 px-6 xl:px-12 xl:flex xl:flex-col xl:item-center xl:justify-center text-center xl:text-left bg-lighterPeach rounded-b-2xl lg:rounded-b-none xl:rounded-r-2xl">
        <div>
          <h2 className="text-3xl md:text-[40px] my-8 text-peach">{title}</h2>
          <p className="my-6">{para1}</p>
          <p className="my-6">{para2}</p>
        </div>
      </article>
    </section>
  );
}

Article.propTypes = {
  className: PropTypes.string,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  para1: PropTypes.string.isRequired,
  para2: PropTypes.string.isRequired,
};
