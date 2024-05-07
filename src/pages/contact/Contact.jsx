import LocationsFlex from "../shared/LocationsFlex";
import Form from "./form/Form";

function Contact() {
  return (
    <>
      <section
        id="Landing"
        className={`xl:flex xl:items-center xl:justify-between my-12 p-6 md:p-12 xl:px-24 w-full text-center text-white md:rounded-2xl bg-peach bg-no-repeat bg-[url('/src/assets/contact/mobile/bg-pattern-hero-contact-mobile.svg')] md:bg-[url('/src/assets/contact/desktop/bg-pattern-hero-desktop.svg')] xl:bg-[0%_100%] md:bg-[-150px_-85px]`}
      >
        <div className="text-center md:text-left xl:w-[450px]">
          <h1 className="my-6 text-4xl md:text-5xl">Contact Us</h1>
          <p className="my-6 md:mx-auto">
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>
        <Form />
      </section>
      <LocationsFlex />
    </>
  );
}

export default Contact;
