import { useState } from "react";
import propertiesData from "../data/properties.json";
import PropertyCard from "../components/PropertyCard";
import { useFavourites } from "../context/FavouritesContext";
import {
  DragDropContext,
  Droppable,
  Draggable,
} from "@hello-pangea/dnd";

function SearchPage() {
  const properties = propertiesData.properties;

  const {
    favourites,
    addFavourite,
    reorderFavourites,
    removeFavourite,
  } = useFavourites();

  const [showFavouritesPanel, setShowFavouritesPanel] = useState(false);
  const [showFavouritesOnly, setShowFavouritesOnly] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [filters, setFilters] = useState({
    type: "",
    minPrice: "",
    maxPrice: "",
    minBedrooms: "",
    maxBedrooms: "",
    postcode: "",
    addedAfter: "",
  });
  const [isDragging, setIsDragging] = useState(false);

  function getPropertyDate(property) {
    const { year, month, day } = property.added;
    return new Date(`${month} ${day}, ${year}`);
  }

function handleDragEnd(result) {
  const { source, destination } = result;
  if (!destination) return;

  //  Block reordering inside properties
  if (
    source.droppableId === "properties" &&
    destination.droppableId === "properties"
  ) {
    return;
  }

  //  Reorder favourites
  if (
    source.droppableId === "favourites" &&
    destination.droppableId === "favourites"
  ) {
    const items = Array.from(favourites);
    const [moved] = items.splice(source.index, 1);
    items.splice(destination.index, 0, moved);
    reorderFavourites(items);
    return;
  }

  //  Add to favourites
  if (
    source.droppableId === "properties" &&
    destination.droppableId === "favourites"
  ) {
    addFavourite(displayedProperties[source.index]);
    setShowFavouritesPanel(true);
    return;
  }

  //  REMOVE from favourites (drag OUT)
  if (
    source.droppableId === "favourites" &&
    destination.droppableId === "properties"
  ) {
    removeFavourite(favourites[source.index].id);
    return;
  }
}





  const filteredProperties = properties.filter((property) => {
    if (filters.type && property.type !== filters.type) return false;
    if (filters.minPrice && property.price < Number(filters.minPrice)) return false;
    if (filters.maxPrice && property.price > Number(filters.maxPrice)) return false;
    if (
      filters.minBedrooms &&
      property.bedrooms < Number(filters.minBedrooms)
    ) return false;

    if (
      filters.maxBedrooms &&
      property.bedrooms > Number(filters.maxBedrooms)
    ) return false;


    if (
      filters.postcode &&
      !property.location.toLowerCase().includes(filters.postcode.toLowerCase())
    ) {
      return false;
    }

    if (filters.addedAfter) {
      const propertyDate = getPropertyDate(property);
      const filterDate = new Date(filters.addedAfter);
      if (propertyDate < filterDate) return false;
    }

    return true;
  });

  const sortedProperties = [...filteredProperties];

  if (sortBy === "price-asc") {
    sortedProperties.sort((a, b) => a.price - b.price);
  }
  if (sortBy === "price-desc") {
    sortedProperties.sort((a, b) => b.price - a.price);
  }
  if (sortBy === "bedrooms-desc") {
    sortedProperties.sort((a, b) => b.bedrooms - a.bedrooms);
  }

  let displayedProperties = sortedProperties;

  if (showFavouritesOnly) {
    displayedProperties = displayedProperties.filter((property) =>
      favourites.some((fav) => fav.id === property.id)
    );
  }

  return (
    <div className="container">
      <h2>Search Page</h2>
      <p>Total properties loaded: {properties.length}</p>

      {/* FILTERS */}
      <div className="form">
        <h3>Filter properties</h3>

        <div className="form-group">
          <label>Property Type</label>
          <select
            value={filters.type}
            onChange={(e) =>
              setFilters({ ...filters, type: e.target.value })
            }
          >
            <option value="">Any</option>
            <option value="House">House</option>
            <option value="Flat">Flat</option>
          </select>
        </div>

        <div className="form-group">
          <label>Min Price</label>
          <input
            type="number"
            value={filters.minPrice}
            onChange={(e) =>
              setFilters({ ...filters, minPrice: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label>Max Price</label>
          <input
            type="number"
            value={filters.maxPrice}
            onChange={(e) =>
              setFilters({ ...filters, maxPrice: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label>Min Bedrooms</label>
          <input
            type="number"
            min="0"
            value={filters.minBedrooms}
            onChange={(e) =>
              setFilters({ ...filters, minBedrooms: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label>Max Bedrooms</label>
          <input
            type="number"
            min="0"
            value={filters.maxBedrooms}
            onChange={(e) =>
              setFilters({ ...filters, maxBedrooms: e.target.value })
            }
          />
        </div>


        <div className="form-group">
          <label>Postcode</label>
          <input
            type="text"
            value={filters.postcode}
            onChange={(e) =>
              setFilters({ ...filters, postcode: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label>Added After</label>
          <input
            type="date"
            value={filters.addedAfter}
            onChange={(e) =>
              setFilters({ ...filters, addedAfter: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label>Sort by</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="">None</option>
            <option value="price-asc">Price ↑</option>
            <option value="price-desc">Price ↓</option>
            <option value="bedrooms-desc">Bedrooms ↓</option>
          </select>
        </div>

        <label>
          <input
            type="checkbox"
            checked={showFavouritesOnly}
            onChange={(e) => setShowFavouritesOnly(e.target.checked)}
          />{" "}
          Show favourites only
        </label>

        <label>
          <input
            type="checkbox"
            checked={showFavouritesPanel}
            onChange={(e) => setShowFavouritesPanel(e.target.checked)}
          />{" "}
          Show favourites panel
        </label>
      </div>

      {/* PROPERTY LIST + FAVOURITES */}
      {displayedProperties.length === 0 ? (
        <p>No properties match your search.</p>
      ) : (
          <DragDropContext
            onDragStart={() => {
              setShowFavouritesPanel(true);
              setIsDragging(true);
            }}
            onDragEnd={(result) => {
              setIsDragging(false);
              handleDragEnd(result);
            }}
          >

        <div className="drag-layout">
          {/* PROPERTIES */}
          <Droppable droppableId="properties">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="property-grid"
              >
                {displayedProperties.map((property, index) => (
                  <Draggable
                    key={property.id}
                    draggableId={property.id}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <PropertyCard property={property} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          {/* FAVOURITES */}
          {showFavouritesPanel && (
            <Droppable droppableId="favourites">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={`favourites-panel ${isDragging ? "drag-active" : ""}`}
                >
                  <h3>Favourites</h3>

                  {favourites.map((property, index) => (
                    <Draggable
                      key={property.id}
                      draggableId={`fav-${property.id}`}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <PropertyCard property={property} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          )}
        </div>
      </DragDropContext>

      )}
    </div>
  );
}

export default SearchPage;
