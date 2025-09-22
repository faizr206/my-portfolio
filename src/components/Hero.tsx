import picture from "../assets/1x/Artboard 1.png";

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
          <h1 className="text-5xl font-bold">Hi, I’m Faiz 👋</h1>
          <p className="py-6 text-lg">
            A passionate{" "}
            <span className="font-semibold text-primary">programmer</span> who
            loves building
            <span className="font-semibold"> web apps</span>,
            <span className="font-semibold"> AI projects</span>, and creating
            <span className="font-semibold"> visualizations</span>. Always
            curious to learn and experiment with new technologies.
          </p>
          <a href="#projects" className="btn btn-primary">View Projects</a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
