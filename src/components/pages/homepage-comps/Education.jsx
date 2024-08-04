import React from "react";
import { Link as ScrollLink } from "react-scroll";
import CertificateModal from "./CertificateModal";

const Education = () => {
  const [selectedImage, setSelectedImage] = React.useState(null);

  return (
    <section
      name="Education"
      className="relative w-full h-unset md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="mb-2">
          <h2 className="text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl pb-1">
            Education
          </h2>
          <p className="py-6">
            I hold a Bachelor of Computer Application (BCA) degree from the
            University of Lucknow, where I graduated in 2022 with a CGPA of 6.8.
            During my time at the university, I gained a strong foundation in
            computer science principles and practical skills, which have been
            instrumental in my journey as a full-stack developer. The rigorous
            curriculum and hands-on projects provided me with a comprehensive
            understanding of both front-end and back-end development, preparing
            me to tackle real-world challenges with confidence and creativity.
          </p>
        </div>
      </div>

      <ScrollLink
        to="Contact"
        smooth
        duration={500}
        className="absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-primary-color"
      >
        <i className="bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color"></i>
      </ScrollLink>

      <CertificateModal
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
    </section>
  );
};

export default Education;
