import { useState } from 'react';

function CarList() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState('');
  const [carModel, setCarModel] = useState('');

  function handleAddCar() {
    const newCar = { year: carYear, make: carMake, model: carModel };
    setCars((c) => [...c, newCar]);
    setCarYear(new Date().getFullYear());
    setCarMake('');
    setCarModel('');
  }
  /*function handleRemoveCar(idx) {
    // setCarYear(event.target.value)
  }*/
  function handleYearChange(e) {
    setCarYear(e.target.value);
  }
  function handleMakeChange(e) {
    setCarMake(e.target.value);
  }

  function handleModelChange(e) {
    setCarModel(e.target.value);
  }

  return (
    <div className="card container">
      <h2>List of Car Objects</h2>
      <ul>
        {cars.map((car, idx) => (
          <li key={idx}>
            {car.year} {car.make} {car.model}
          </li>
        ))}
      </ul>

      <input type="number" value={carYear} onChange={handleYearChange} />
      <input type="text" value={carMake} onChange={handleMakeChange} />
      <input
        type="text"
        value={carModel}
        onChange={handleModelChange}
        placeholder="Enter Car Make"
      />
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
}

export default CarList;
