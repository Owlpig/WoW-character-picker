const { useState } = require('react');

const ClassForm = ({ renderChoice, classList }) => {
  const [selectedClass, setSelectedClass] = useState({ value: '' });

  const handleChange = e => {
    setSelectedClass({ value: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    renderChoice(selectedClass.value, 'class');
  };

  return (
    <form className='class-form' onSubmit={e => handleSubmit(e)}>
      <label htmlFor='classes'>OR Choose a class:</label>
      <select defaultValue="" id='classes' onChange={e => handleChange(e)}>
        <option value="" disabled hidden>None selected</option>
        {classList.map(wowclass => <option
        key={wowclass.classId}
        value={wowclass.classId}>{wowclass.name}</option>)}
      </select>
      <input type='submit' value='Submit'/>
    </form>
  );
};

export default ClassForm;
