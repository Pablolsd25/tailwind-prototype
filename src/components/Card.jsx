const Card = ({ description, imageUrl, ki, race, gender }) => {
  return (
    <div className="max-w-sm bg-gray-800 rounded-lg bg-opacity-30 shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 relative">
      {/* Imagen ajustada para que se vea completa */}
      <div className="h-64 w-full">
        <img
          src={imageUrl}
          alt="Imagen de la tarjeta"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Texto con el nombre del personaje */}
      <div className="p-5">
        <p className="text-lg font-semibold text-white truncate">
          {description}
        </p>
      </div>

      {/* Información adicional oculta por defecto */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-gray-800 bg-opacity-70 p-4">
        <div className="text-center text-white">
          <p className="text-sm">Ki: {ki}</p>
          <p className="text-sm">Raza: {race}</p>
          <p className="text-sm">Género: {gender}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
