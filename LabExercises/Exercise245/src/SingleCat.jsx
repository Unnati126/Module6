/*function SingleCat({ cat }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '1rem',
      textAlign: 'center',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    }}>

      <img
        src={cat.image}
        alt={cat.name}
        style={{ width: '100%', borderRadius: '8px', height: '200px', objectFit: 'cover' }}
      />
      <h3>{cat.name}</h3>
      <p><em>{cat.latinName}</em></p>
    </div>
  );
}

export default SingleCat;*/


function SingleCat({ cat, onDelete }) {
  return (
    <div style={{ border: "1px solid gray", padding: "1rem" }}>
      <img
        src={cat.image}
        alt={cat.name}
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />
      <h3>{cat.name}</h3>
      <p><em>{cat.latinName}</em></p>
      {onDelete && (
        <button onClick={() => onDelete(cat.id)} style={{ color: "red" }}>
          Delete
        </button>
      )}
    </div>
  );
}

export default SingleCat;
