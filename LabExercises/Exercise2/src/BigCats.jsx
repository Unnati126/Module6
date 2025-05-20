import SingleCat from "./SingleCat";

const cats = [
    {
        id: 1,  
        name: 'Cheetah',
        latinName: 'Acinonyx jubatus',
        image: './assets/Cheetah.jpg',
    },
    {
        id: 2,  
        name: 'Cougar',
        latinName: 'Puma concolor',
        image: './assets/Cougar.jpg',
    },
    {
        id: 3,
        name: 'Jaguar',
        latinName: 'Panthera onca',
        image: './assets/Jaguar.jpg',
    },
    {
        id: 4,
        name: 'Leopard',
        latinName: 'Panthera pardus',
        image: './assets/Leopard.jpg',
    },
    {
        id: 5,
        name: 'Lion',
        latinName: 'Panthera leo',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg',
    },
    {
        id: 6,
        name: 'Snow Leopard',
        latinName: 'Panthera uncia',
        image: './assets/Snow Leopard.jpeg',
    },
    {
        id: 7,
        name: 'Tiger',
        latinName: 'Panthera tigris',
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Tiger.50.jpg',
    },
    ];

    function BigCats() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Big Cats</h2>

      <div style={{
        display: 'flex',
        overflow: 'auto',
        paddingBottom: '1rem',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1rem'
      }}>
        {cats.map((cat) => (
          <SingleCat key={cat.id} cat={cat} />
        ))}
      </div>
    </div>
  );
}

export default BigCats;