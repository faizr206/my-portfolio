import Slider from "react-slick";

export default function AutoCarousel() {
  const images = [
    "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/unity-game-engine-icon.png",
    "https://cdn.worldvectorlogo.com/logos/arduino-1.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Godot_icon.svg/2048px-Godot_icon.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/640px-ISO_C%2B%2B_Logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Logo_C_sharp.png/640px-Logo_C_sharp.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png",
    "https://cdn.creazilla.com/icons/3254256/pytorch-icon-size_256.png",
    "https://cdn.mobygames.com/promos/4943010-assoluto-racing-logo.png",
  ];

  const settings = {
    dots: false,
    infinite: true, // infinite loop
    speed: 1000, // slide animation speed
    slidesToShow: 5, // number of cards visible
    slidesToScroll: 1,
    autoplay: true, // enable autoplay
    autoplaySpeed: 2000, // 2 seconds per slide
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="p-5">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="p-3">
            <div className="bg-slate-200 rounded-lg shadow flex items-center justify-center h-40 p-5">
              <img
                src={src}
                alt={`slide-${index}`}
                className="object-contain h-full"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
