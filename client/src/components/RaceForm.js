const { useState } = require('react');

const RaceForm = ({ renderChoice, raceList }) => {
  const [selectedRace, setSelectedRace] = useState({ value: '' });

  const handleChange = e => {
    setSelectedRace({ value: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    renderChoice(selectedRace.value, 'race');
  };

  return (
    <form className='race-form' onSubmit={e => handleSubmit(e)}>
      <label htmlFor='races'>Choose a race:</label>
      <select defaultValue="" id='races' onChange={e => handleChange(e)}>
        <option value="" disabled hidden>None selected</option>
        {raceList.map(race => <option key={race.id} value={race.id}>{race.name}</option>)}
      </select>
      <input type='submit' value='Submit'/>
    </form>
  );
};

export default RaceForm;
