import sonlis_screenshot from "../assets/sonlis_screenshot.png";
import cp_screenshot from "../assets/cp_screenshot.png";
import gamedev_screenshot from "../assets/gamedev_screenshot.png";

function Skills() {
  return (
    <div className="hero bg-base-100 p-20">
      <div className="hero-content text-center flex-col">
        <h1 className="text-5xl font-bold mb-10">Skills</h1>

        {/* Grid wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          <div className="card bg-base-100 shadow-sm">
            <figure>
              <img src={sonlis_screenshot} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Web Developer</h2>
              <p className=" text-left">
                Builds responsive and interactive websites using React,
                TailwindCSS, and Laravel, turning ideas into functional web
                applications.
              </p>
              <div className="card-actions justify-end">
                <a
                  className="btn btn-primary"
                  href="https://web.archive.org/web/20241010024551/http://soniclinguistic.id/home"
                  target="_blank"
                >
                  Web Archive Link
                </a>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-sm">
            <figure>
              <img src={gamedev_screenshot} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Game Developer</h2>
              <p className=" text-left">
                Designs and implements games using Unity and Godot, creating
                engaging mechanics and interactive experiences.
              </p>
              <div className="card-actions justify-end">
                <a
                  href="https://skip-gamedev.itch.io/"
                  target="_blank"
                  className="btn btn-primary"
                >
                  Itch.io webpage
                </a>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-sm">
            <figure>
              <img src={cp_screenshot} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Competitive Programmer</h2>
              <p className="text-left">
                Solves algorithmic and data structure challenges on platforms
                like Codeforces and TLX, focusing on efficient problem-solving
                under time constraints.
              </p>
              <div className="card-actions justify-end">
                <a href="https://codeforces.com/profile/farizz" target="_blank" className="btn btn-primary">Codeforces Profile</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
