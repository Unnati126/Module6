import { useState } from 'react';

function AddCatForm({ onAddCat }) {
  const [name, setName] = useState('');
  const [latinName, setLatinName] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !latinName || !image) return alert("All fields are required");

    const newCat = {
      id: Date.now(), 
      name,
      latinName,
      image,
    };

    onAddCat(newCat);
    setName('');
    setLatinName('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
      <h3>Add a New Big Cat</h3>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Latin Name"
          value={latinName}
          onChange={(e) => setLatinName(e.target.value)}
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      
      <button type="submit">Add Cat</button>
    </form>
  );
}

export default AddCatForm;