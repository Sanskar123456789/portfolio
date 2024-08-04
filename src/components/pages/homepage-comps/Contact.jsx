const Contact = () => {
  return (
    <section
      name="Contact"
      className="relative w-full md:h-screen p-4 text-white h-unset"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl">
            Contact
          </h2>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="justify-center items-center">
          Feel free to reach out to me for any inquiries, collaborations, or
          opportunities. You can contact me via email at
          <a
            href={"mailto:sanskar.agarwal91@gmail.com"}
            className=" text-white font-semibold ml-4"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Sanskar.agarwal91@gmail.com{" "}
          </a>
          or give me a call at 9628853634. I'm always open to discussing new
          projects, sharing ideas, and connecting with fellow tech enthusiasts.
          Let's create something amazing together!
        </div>
      </div>
    </section>
  );
};

export default Contact;
