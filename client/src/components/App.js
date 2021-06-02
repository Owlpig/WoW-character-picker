import { useState, useEffect } from 'react';
import './App.css';
import ClassForm from './ClassForm';
import RaceForm from './RaceForm';
import Choices from './Choices';

const App = () => {
  const [raceList, setRaceList] = useState([]);
  const [classList, setclassList] = useState([]);
  const [choiceState, setChoiceState] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3003/classes')
      .then(res => res.json())
      .then(data => setclassList(data));
    fetch('http://localhost:3003/races')
      .then(res => res.json())
      .then(data => setRaceList(data));
  }, []);

  const renderChoice = (choice, form) => {
    if (form === 'class') {
      const classId = parseInt(choice, 10);
      const classChoices = raceList.filter(race => race.classes.includes(classId));
      setChoiceState(classChoices);
    } else {
      const raceId = parseInt(choice, 10);
      const raceChoices = classList.filter(wowclass => wowclass.races.includes(raceId));
      setChoiceState(raceChoices);
    }
  };

  const isChosen = () => {
    if (choiceState.length <= 0) {
      return true;
    }
    return false;
  };

  return (
  <div className="App">
    <main className='main'>
      <header className='form-header'>
        <RaceForm renderChoice={renderChoice} raceList={raceList}/>
        <ClassForm renderChoice={renderChoice} classList={classList}/>
      </header>
      {isChosen() && <p className='subheader'>What can you pick based on your choice?</p>}
      <Choices choiceList={choiceState}/>
    </main>
  </div>
  );
};

export default App;
