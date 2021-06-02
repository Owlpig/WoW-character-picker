const Choices = ({ choiceList }) => {
  const isChosen = () => {
    if (choiceList.length > 0) {
      return true;
    }
    return false;
  };

  return (
    <section className='choice-list'>
      {isChosen() && <p className='choice-heading'>Available options:</p>}
      {choiceList.map(choice => <Choice
        choice={choice}
        key={choice.classId ? choice.classId : choice.id}/>)}
    </section>
  );
};

const Choice = ({ choice }) => {
  const twoIcons = () => {
    if (choice.icon.male) {
      return true;
    }
    return false;
  };

  return (
    <div className='choice-box'>
      {twoIcons()
        ? <div className='icon-container'><img className='icon' src={choice.icon.male}/><img className='icon' src={choice.icon.female}/></div>
        : <div className='icon-container'><img className='icon' src={choice.icon}/></div>
      }
      <p className='choice-text'>{choice.name}</p>
    </div>
  );
};

export default Choices;
