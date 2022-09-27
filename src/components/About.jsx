import React from 'react';

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white pt-40">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
          I am a Student of Computer Science and Engineering and a passionate
          developer who love to build web applications and Apps using
          technologies like Html , CSS , JS , React Js etc. I
          have Worked on different projects like
          YouTube Clone Website, Online Food Website,
          portfolio website, and Barber Shop Website.
        </p>

        <br />

        <p className="text-xl">
          I have gained multiple skills in my development journey like HTML,
          CSS, JavaScript, Java, React Js, SQL and MySQL. I have fundamental knowledge of AWS and I am a Certified
          Certified Cloud Practitioner.
        </p>
      </div>
    </div>
  );
};

export default About;
