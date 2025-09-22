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
            <div className="carousel carousel-center rounded-box h-40">
              <div className="carousel-item p-5 bg-slate-300">
                <img
                  src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/unity-game-engine-icon.png"
                  alt="Pizza"
                  className=" object-contain"
                />
              </div>
              <div className="carousel-item p-5 bg-slate-200">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/arduino-1.svg"
                  alt="Pizza"
                  className=" object-contain"
                />
              </div>
              <div className="carousel-item p-5 bg-slate-300">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Godot_icon.svg/2048px-Godot_icon.svg.png"
                  alt="Pizza"
                  className="object-contain"
                />
              </div>
              <div className="carousel-item p-5 bg-slate-200">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/640px-ISO_C%2B%2B_Logo.svg.png"
                  alt="Pizza"
                  className=" object-contain"
                />
              </div>
              <div className="carousel-item p-5 bg-slate-300">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
                  alt="Pizza"
                  className="object-contain"
                />
              </div>
              <div className="carousel-item p-5 bg-slate-200">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Logo_C_sharp.png/640px-Logo_C_sharp.png"
                  alt="Pizza"
                  className=" object-contain"
                />
              </div>
              <div className="carousel-item p-5 bg-slate-300">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png"
                  alt="Pizza"
                  className="object-contain"
                />
              </div>
              <div className="carousel-item p-5 bg-slate-300">
                <img
                  src="https://cdn.creazilla.com/icons/3254256/pytorch-icon-size_256.png"
                  alt="Pizza"
                  className="object-contain"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://cdn.mobygames.com/promos/4943010-assoluto-racing-logo.png"
                  alt="Pizza"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
