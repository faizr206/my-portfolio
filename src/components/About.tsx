import AutoCarousel from "./AutoCarousel";

function About() {
  return (
    <div className="hero bg-base-100 p-20">
      <div className="hero-content text-center">
        <div className="max-w-3/4">
          <h1 className="text-5xl font-bold">About</h1>
          <p className="py-6 p-10 m-10">
            I’m <span className="font-semibold text-primary">Faiz</span>, a
            <span className="font-semibold"> developer and problem solver</span>{" "}
            who enjoys building{" "}
            <span className="font-semibold">web applications</span>,
            experimenting with
            <span className="font-semibold"> AI models</span>, and recently,
            <span className="font-semibold"> racing</span>. With a background in
            robotics and programming competitions, I’ve grown into a fast
            learner who adapts easily to new technologies.
          </p>

          <div className="w-full">
            <AutoCarousel></AutoCarousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
