import { useState } from "react";
import SingleCat from "./SingleCat";
import AddCatForm from "./AddCatForm";

const catsData = [
  {
    id: 1,
    name: "Cheetah",
    latinName: "Acinonyx jubatus",
    image: "./assets/Cheetah.jpg",
  },
  {
    id: 2,
    name: "Cougar",
    latinName: "Puma concolor",
    image: "./assets/Cougar.jpg",
  },
  {
    id: 3,
    name: "Jaguar",
    latinName: "Panthera onca",
    image: "./assets/Jaguar.jpg",
  },
  {
    id: 4,
    name: "Leopard",
    latinName: "Panthera pardus",
    image: "./assets/Leopard.jpg",
  },
  {
    id: 5,
    name: "Lion",
    latinName: "Panthera leo",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg",
  },
  {
    id: 6,
    name: "Snow Leopard",
    latinName: "Panthera uncia",
    image: "./assets/Snow Leopard.jpeg",
  },
  {
    id: 7,
    name: "Tiger",
    latinName: "Panthera tigris",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Tiger.50.jpg",
  },
];

function BigCats() {
  const [displayedCats, setDisplayedCats] = useState(catsData);

  const sortAZ = () => {
    const sorted = [...displayedCats].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setDisplayedCats(sorted);
  };

  const sortZA = () => {
    const reversed = [...displayedCats].sort((a, b) =>
      b.name.localeCompare(a.name)
    );
    setDisplayedCats(reversed);
  };

  const filterPanthera = () => {
    const filtered = catsData.filter((cat) =>
      cat.latinName.startsWith("Panthera")
    );
    setDisplayedCats(filtered);
  };

  const resetList = () => {
    setDisplayedCats(catsData);
  };

  const handleAddCat = (newCat) => {
    setDisplayedCats((prevCats) => [...prevCats, newCat]);
  };

  const handleDeleteCat = (id) => {
    const updated = displayedCats.filter((cat) => cat.id !== id);
    setDisplayedCats(updated);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Big Cats</h2>

      <AddCatForm onAddCat={handleAddCat} />

      <div style={{ marginBottom: "1.5rem" }}>
        <button onClick={sortAZ} style={{ marginRight: "10px" }}>
          Sort A-Z
        </button>
        <button onClick={sortZA} style={{ marginRight: "10px" }}>
          Sort Z-A
        </button>
        <button onClick={filterPanthera} style={{ marginRight: "10px" }}>
          Show Panthera Only
        </button>
        <button onClick={resetList}>Reset</button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.5rem",
        }}
      >
        {displayedCats.map((cat) => (
          <SingleCat key={cat.id} cat={cat} onDelete={handleDeleteCat} />
        ))}
      </div>
    </div>
  );
}

export default BigCats;