import { createContext, useContext, useState } from "react";
import { useEffect } from "react";

const FavouritesContext = createContext();

export function FavouritesProvider({ children }) {
    const [favourites, setFavourites] = useState(() => {
        const saved = localStorage.getItem("favourites");
        return saved ? JSON.parse(saved) : [];
});


function addFavourite(property) {
  setFavourites((prev) =>
    prev.find((p) => p.id === property.id)
      ? prev
      : [...prev, property]
  );
}

function removeFavourite(id) {
  setFavourites((prev) =>
    prev.filter((property) => property.id !== id)
  );
}
useEffect(() => {
  localStorage.setItem("favourites", JSON.stringify(favourites));
}, [favourites]);
function reorderFavourites(newOrder) {
  setFavourites(newOrder);
}


  function isFavourite(id) {
    return favourites.some((property) => property.id === id);
  }

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addFavourite,
        removeFavourite,
        reorderFavourites,
        isFavourite,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
}

export function useFavourites() {
  return useContext(FavouritesContext);
}
