const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-x-gray-500">
            About Me
          </h2>
        </div>

        <p className="text-xl mt-20">
          Mayowa, a skilled full-stack developer, celebrates his prowess in
          building web applications. With a rich skill set encompassing PHP,
          Laravel, Node.js, Express, MySQL, HTML/CSS, React, Python, and Bulma,
          Mayowa showcases versatility and expertise across the entire
          development stack. His proficiency in both front-end and back-end
          technologies reflects a well-rounded approach to creating robust and
          visually appealing web solutions. May your journey as a full-stack
          developer continue to be filled with success and innovation!

          <br/>
          <br/>
   <h1 className="text-bold">       I also provide online coding lessons. Feel free to reach out to me on WhatsApp at +2348160587687</h1>
        </p>

        <br />

        <p className="text-xl"></p>
      </div>

      
    </div>
  );
};

export default About;
