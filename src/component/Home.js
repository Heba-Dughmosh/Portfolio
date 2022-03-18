import Typewriter from "typewriter-effect";
const Home = () => {
  return (
    <div className="home">
      <h1>Hello, I'm Heba</h1>
      <h2>
        <Typewriter
          options={{
            strings: ["Full Stack Web Developer with focus on Frontend and Design"],
            pauseFor: 2500,
            autoStart: true,
            loop: true,
          }}
        />
      </h2>
    </div>
  );
};

export default Home;
