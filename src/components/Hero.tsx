import picture from "../assets/1x/Artboard 1.png";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* <figure className="hover-gallery max-w-sm rounded-lg shadow-2xl">
          <img src={picture1} />
          <img src={picture2} />
        </figure> */}
        <img src={picture} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">
          <Typewriter
            words={[
              "Halo, saya Faiz 👋", // Indonesian
              "Hi, I’m Faiz 👋", // English
              "Hallo, ich bin Faiz 👋", // German
              "مرحباً، أنا فايز 👋", // Arabic
            ]}
            loop={0} // 0 = infinite
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          /></h1>
          <p className="py-6 text-lg">
            A passionate{" "}
            <span className="font-semibold text-sky-400">programmer</span> who
            loves building
            <span className="font-semibold"> web apps</span>,
            <span className="font-semibold"> AI projects</span>, and creating
            <span className="font-semibold"> visualizations</span>. Always
            curious to learn and experiment with new technologies.
          </p>
          <a href="#projects" className="btn bg-sky-400 hover:bg-sky-600">
            View Projects
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
