import { useEffect, useState } from "react";
import Card from "./Card";
import { fetchDragonBallCharacters } from "../services/dragonballService";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CardContainer() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const data = await fetchDragonBallCharacters();
      setCharacters(data.items);
    };

    getCharacters();
  }, []);

  // Flechas personalizadas con mejor posición
  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          left: "10px", // Posicionamos la flecha más dentro de la pantalla
          zIndex: 1,
        }}
        onClick={onClick}
      >
        <svg
          className="fill-current text-gray-300 hover:text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          width="32"
          height="32"
        >
          <path d="M13 16l-6-6 6-6v12z" />
        </svg>
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          right: "10px", // Posicionamos la flecha más dentro de la pantalla
          zIndex: 1,
        }}
        onClick={onClick}
      >
        <svg
          className="fill-current text-gray-300 hover:text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          width="32"
          height="32"
        >
          <path d="M7 16l6-6-6-6v12z" />
        </svg>
      </div>
    );
  };

  // Configuración del carrusel
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto mt-20 px-4 py-4">
      <div className="px-4 py-4" style={{ backgroundColor: "#0F52BA" }}>
        <Slider {...settings}>
          {characters.map((character) => (
            <div key={character.id} className="p-2">
              <Card
                description={character.name}
                imageUrl={character.image}
                ki={character.ki} // Asegúrate de que esto esté disponible
                race={character.race} // Asegúrate de que esto esté disponible
                gender={character.gender} // Asegúrate de que esto esté disponible
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
