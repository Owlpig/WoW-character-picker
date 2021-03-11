import { useState, useLayoutEffect } from 'react';
import './App.css';
import ClassForm from './ClassForm';
import RaceForm from './RaceForm';

const App = () => {
  const [raceList, setRaceList] = useState([]);
  const [classList, setclassList] = useState([]);
  const [choiceState, setChoiceState] = useState([]);
  const [raceMap, setRaceMap] = useState([]);
  let formType;

  const fetchIcons = () => {
    const updatedMap = raceMap.map(async wowclass => {
      const icon = await fetch(`http://localhost:3003/classicons/${wowclass.id}`).then(res => res.json());
      const updatedClass = wowclass;
      updatedClass.icon = icon.assets[0].value;
      return updatedClass;
    });
    setRaceMap(updatedMap);
  };

  useLayoutEffect(() => {
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
      .then(res => setRaceMap(res.classes));
    fetchIcons();
  }, []);

  const renderChoice = async (choice, form) => {
    formType = form;
    if (form === 'class') {
      const idx = parseInt(choice, 10) - 1;
      const classChoice = raceMap[idx];
      const choiceNames = classChoice.races.map(id => raceList.find(race => race.id === id));
      setChoiceState(choiceNames);
    } else {
      const raceId = parseInt(choice, 10);
      const raceChoices = raceMap.filter(wowclass => wowclass.races.includes(raceId));
      setChoiceState(raceChoices);
    }
  };

  return (
  <div className="App">
    <main className='main'>
    <header className='form-header'>
      <RaceForm renderChoice={renderChoice} raceList={raceList}/>
      <ClassForm renderChoice={renderChoice} classList={classList}/>
    </header>
    <p className='subheader'>What {formType} can you pick?</p>
    <section className='choice-list'>
      {choiceState.map(choice => <div key={choice.id}><img className='icon' href={choice.icon}/>{choice.name}</div>)}
    </section>
    </main>
  </div>
  );
};

export default App;
