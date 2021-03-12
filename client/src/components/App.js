import { useState, useEffect } from 'react';
import './App.css';
import ClassForm from './ClassForm';
import RaceForm from './RaceForm';
import Choices from './Choices';

const App = () => {
  const [raceList, setRaceList] = useState([]);
  const [classList, setclassList] = useState([]);
  const [choiceState, setChoiceState] = useState([]);
  const [raceMap, setRaceMap] = useState([]);
  const [raceIcons, setRaceIcons] = useState([]);

  const fetchIcons = resClasses => {
    const updatedMap = [];
    resClasses.map(wowclass => fetch(`http://localhost:3003/classicons/${wowclass.id}`)
      .then(res => res.json())
      .then(icon => {
        const updatedClass = wowclass;
        updatedClass.icon = icon.assets[0].value;
        updatedMap.push(updatedClass);
      }));
    setRaceMap(updatedMap);
  };

  useEffect(() => {
    fetch('http://localhost:3003/classes')
      .then(res => res.json())
      .then(res => setclassList(res.classes));
    fetch('http://localhost:3003/races')
      .then(res => res.json())
      .then(res => {
        const noDupes = res.races.filter(race => race.id !== 25 && race.id !== 26);
        setRaceList(noDupes);
      });
    fetch('http://localhost:3003/racemap')
      .then(res => res.json())
      .then(res => fetchIcons(res.classes));
    fetch('http://localhost:3003/raceicons')
      .then(res => res.json())
      .then(res => setRaceIcons(res.races));
  }, []);

  const renderChoice = (choice, form) => {
    if (form === 'class') {
      const classChoice = raceMap.find(wowclass => wowclass.id === parseInt(choice, 10));
      const raceOptions = classChoice.races.map(id => raceList.find(race => race.id === id));
      raceOptions.map(race => {
        const raceIcon = raceIcons.find(icon => icon.id === race.id);
        const updatedRace = race;
        updatedRace.icon = raceIcon.icon;
        return updatedRace;
      });
      setChoiceState(raceOptions);
    } else {
      const raceId = parseInt(choice, 10);
      const raceChoices = raceMap.filter(wowclass => wowclass.races.includes(raceId));
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
