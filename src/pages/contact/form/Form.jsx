import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../../components/Modal";
import error from "../../../assets/contact/desktop/icon-error.svg";

function Form() {
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    nameError: false,
    emailError: false,
    phoneError: false,
    messageError: false,
  });

  const [modal, setModal] = useState(false);

  function openModal() {
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  function inputChangeHandler(e) {
    let id = e.target.id;

    setFormInput((prevState) => {
      return {
        ...prevState,
        [id]: e.target.value,
      };
    });

    setFormErrors((prevState) => {
      return {
        ...prevState,
        [`${id}Error`]: false,
      };
    });
  }

  function submitHandler(e) {
    e.preventDefault();

    if (
      formInput.name === "" ||
      formInput.email === "" ||
      formInput.phone === "" ||
      formInput.message === ""
    ) {
      setFormErrors((prevState) => {
        return {
          ...prevState,
          nameError: formInput.name === "",
          emailError: formInput.email === "",
          phoneError: formInput.phone === "",
          messageError: formInput.message === "",
        };
      });

      return;
    }

    console.log(formInput);
    openModal();
  }

  return (
    <>
      <form
        className="w-full my-6 xl:my-0 xl:w-[375px] md:text-right"
        onSubmit={submitHandler}
      >
        <div className="relative">
          <input
            id="name"
            className="w-full outline-0 p-3 my-2 border-0 border-b-[1px] focus:border-b-4 placeholder:font-medium placeholder:text-[#ffc0b2] border-white text-white bg-transparent"
            placeholder="Name"
            onChange={inputChangeHandler}
            value={formInput.name}
          />
          {formErrors.nameError && (
            <p className="absolute right-0 top-5 text-xs italic">
              Can’t be empty <img className="inline ml-2 mb-1" src={error} />
            </p>
          )}
        </div>
        <div className="relative">
          <input
            id="email"
            className="w-full outline-0 p-3 my-2 border-0 border-b-[1px] focus:border-b-4 placeholder:font-medium placeholder:text-[#ffc0b2] border-white text-white bg-transparent"
            placeholder="Email Address"
            onChange={inputChangeHandler}
            value={formInput.email}
          />
          {formErrors.emailError && (
            <p className="absolute right-0 top-5 text-xs italic">
              Can’t be empty <img className="inline ml-2 mb-1" src={error} />
            </p>
          )}
        </div>
        <div className="relative">
          <input
            id="phone"
            className="w-full outline-0 p-3 my-2 border-0 border-b-[1px] focus:border-b-4 placeholder:font-medium placeholder:text-[#ffc0b2] border-white text-white bg-transparent"
            placeholder="Phone Number"
            onChange={inputChangeHandler}
            value={formInput.phone}
          />
          {formErrors.phoneError && (
            <p className="absolute right-0 top-5 text-xs italic">
              Can’t be empty <img className="inline ml-2 mb-1" src={error} />
            </p>
          )}
        </div>
        <div className="relative">
          <textarea
            id="message"
            className="w-full outline-0 p-3 my-2 border-0 border-b-[1px] focus:border-b-4 placeholder:font-medium placeholder:text-[#ffc0b2] border-white text-white bg-transparent"
            placeholder="Your Message"
            onChange={inputChangeHandler}
            value={formInput.message}
            rows="3"
          />
          {formErrors.messageError && (
            <p className="absolute right-0 top-5 text-xs italic">
              Can’t be empty <img className="inline ml-2 mb-1" src={error} />
            </p>
          )}
        </div>
        <button className="btn-dark mt-6" type="submit">
          Submit
        </button>
      </form>
      <Modal
        open={modal}
        className="mt-3 mx-[40px] py-6 px-12 bg-peach text-white border-2 border-white rounded-2xl shadow-lg"
      >
        <div className="text-center md:text-left xl:w-[450px]">
          <h1 className="my-6 text-4xl md:text-5xl">Thank you!</h1>
          <p className="my-6 md:mx-auto">
            Thank you for contacting us {formInput.name}, we have received your
            message and will get back to you through your email{" "}
            {formInput.email}, as soon as possible.
          </p>
        </div>
        <Link to="/">
          <button className="btn-dark block mt-6 ml-auto" onClick={closeModal}>
            Close
          </button>
        </Link>
      </Modal>
    </>
  );
}

export default Form;
