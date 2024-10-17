export const fetchDragonBallCharacters = async () => {
  let allCharacters = [];
  let page = 1;
  let hasMorePages = true;

  try {
    while (hasMorePages) {
      const response = await fetch(
        `https://dragonball-api.com/api/characters?page=${page}`
      );
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }

      const data = await response.json();

      if (data.items && data.items.length > 0) {
        allCharacters = [...allCharacters, ...data.items];
        page++;
      } else {
        hasMorePages = false; // No hay más personajes en las páginas siguientes
      }
    }

    return { items: allCharacters }; // Retornamos todos los personajes obtenidos
  } catch (error) {
    console.error("Hubo un problema al obtener los personajes:", error);
    return { items: [] }; // Retornamos un array vacío si hay un error
  }
};
