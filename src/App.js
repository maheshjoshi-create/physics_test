import React, { useState } from 'react';

const questions = [
  {
    question: 'What is the unit of heat?',
    options: ['Calorie', 'Celsius', 'Kelvin', 'Fahrenheit'],
    correctAnswer: 'Calorie',
    note: 'Heat is a form of energy, and its unit is the Calorie.',
  },
  {
    question: 'Which of the following is a good conductor of heat?',
    options: ['Wood', 'Plastic', 'Metal', 'Rubber'],
    correctAnswer: 'Metal',
    note: 'Metals are excellent conductors of heat due to the free movement of electrons within their structure.',
  },
  {
    question: 'What is the process of heat transfer through direct contact?',
    options: ['Conduction', 'Convection', 'Radiation', 'Evaporation'],
    correctAnswer: 'Conduction',
    note: 'Conduction is the transfer of heat through a material without the movement of the material itself.',
  },
  {
    question: 'Which material is a good insulator of heat?',
    options: ['Copper', 'Aluminum', 'Wool', 'Steel'],
    correctAnswer: 'Wool',
    note: 'Materials like wool and fiberglass are good insulators because they trap air, which is a poor conductor of heat.',
  },
  {
    question: 'What is the transfer of heat through a fluid (liquid or gas)?',
    options: ['Conduction', 'Convection', 'Radiation', 'Sublimation'],
    correctAnswer: 'Convection',
    note: 'Convection involves the movement of the fluid itself, carrying heat from one place to another.',
  },
  {
    question: 'How does heat travel from the Sun to the Earth?',
    options: ['Conduction', 'Convection', 'Radiation', 'Induction'],
    correctAnswer: 'Radiation',
    note: 'Radiation is the transfer of heat through electromagnetic waves, and it doesn\'t require a medium to travel.',
  },
  {
    question: 'What is the temperature at which a substance changes from solid to liquid?',
    options: ['Boiling point', 'Melting point', 'Freezing point', 'Condensation point'],
    correctAnswer: 'Melting point',
    note: 'The melting point is the temperature at which a solid absorbs enough heat to overcome its intermolecular forces and become a liquid.',
  },
  {
    question: 'What is the temperature at which a liquid changes to a gas?',
    options: ['Boiling point', 'Melting point', 'Freezing point', 'Sublimation point'],
    correctAnswer: 'Boiling point',
    note: 'The boiling point is the temperature at which a liquid absorbs enough heat to overcome its intermolecular forces and become a gas.',
  },
  {
    question: 'What is the amount of heat required to raise the temperature of 1 gram of water by 1 degree Celsius?',
    options: ['Specific heat', 'Latent heat', 'Heat capacity', 'Thermal conductivity'],
    correctAnswer: 'Specific heat',
    note: 'Specific heat is a measure of a substance\'s ability to store heat energy.',
  },
  {
    question: 'What is the heat absorbed or released during a phase change?',
    options: ['Specific heat', 'Latent heat', 'Heat capacity', 'Thermal conductivity'],
    correctAnswer: 'Latent heat',
    note: 'Latent heat is the heat absorbed or released during a phase change (e.g., melting, boiling) without a change in temperature.',
  },
  {
    question: 'Which of the following is a common source of heat in our homes?',
    options: ['Sun', 'Electric stove', 'Rain', 'Moon'],
    correctAnswer: 'Electric stove',
    note: 'An electric stove is commonly used to generate heat for cooking in homes.',
  },
  {
    question: 'Which object would feel warm to touch?',
    options: ['Ice', 'Wood', 'Metal spoon in hot soup', 'Plastic toy'],
    correctAnswer: 'Metal spoon in hot soup',
    note: 'Metal conducts heat well, so a metal spoon in hot soup would feel warm.',
  },
  {
    question: 'Which of the following materials does NOT allow heat to pass through easily?',
    options: ['Metal', 'Glass', 'Wood', 'Copper'],
    correctAnswer: 'Wood',
    note: 'Wood is an insulator, meaning it does not allow heat to pass through easily.',
  },
  {
    question: 'Which of these is an example of heat transfer by conduction?',
    options: ['Sunlight warming the Earth', 'Boiling water in a pot', 'Ice melting in your hand', 'Warm air rising'],
    correctAnswer: 'Ice melting in your hand',
    note: 'Conduction is the transfer of heat through direct contact, like when ice melts in your hand.',
  },
  {
    question: 'Which of the following is a bad conductor of heat?',
    options: ['Metal', 'Water', 'Plastic', 'Glass'],
    correctAnswer: 'Plastic',
    note: 'Plastic is a poor conductor of heat, which is why it is often used as a handle for cooking utensils.',
  },
  {
    question: 'What happens to water when it is heated on a stove?',
    options: ['It freezes', 'It evaporates', 'It condenses', 'It solidifies'],
    correctAnswer: 'It evaporates',
    note: 'When water is heated, it evaporates and turns into steam.',
  },
  {
    question: 'Why does a metal chair feel cold in winter?',
    options: ['It is made of cold material', 'It absorbs cold from the air', 'It conducts heat away from your body', 'It reflects cold air'],
    correctAnswer: 'It conducts heat away from your body',
    note: 'Metal conducts heat away from your body quickly, making it feel cold.',
  },
  {
    question: 'Which of these objects will get heated quickly when placed in the sun?',
    options: ['Glass cup', 'Metal spoon', 'Plastic bottle', 'Wooden block'],
    correctAnswer: 'Metal spoon',
    note: 'Metal heats up quickly in the sun because it is a good conductor of heat.',
  },
  {
    question: 'Why do we wear light-colored clothes in summer?',
    options: ['They look cool', 'They absorb more heat', 'They reflect more heat', 'They are cheaper'],
    correctAnswer: 'They reflect more heat',
    note: 'Light-colored clothes reflect more heat, keeping us cooler in summer.',
  },
  {
    question: 'Which of the following is an example of heat transfer by convection?',
    options: ['Boiling water', 'Heating a metal rod', 'Sun warming the Earth', 'Ironing clothes'],
    correctAnswer: 'Boiling water',
    note: 'In boiling water, heat is transferred by convection, where hot water rises and cooler water sinks.',
  },
  {
    question: 'Which of these surfaces is best for reflecting heat?',
    options: ['Black cloth', 'White paper', 'Silver foil', 'Red brick'],
    correctAnswer: 'Silver foil',
    note: 'Silver foil reflects heat well and is often used to keep things cool.',
  },
  {
    question: 'What is the effect of heat on the size of most objects?',
    options: ['They expand', 'They contract', 'They stay the same', 'They melt'],
    correctAnswer: 'They expand',
    note: 'Most objects expand when heated due to the increase in particle movement.',
  },
  {
    question: 'Which of the following processes requires heat?',
    options: ['Melting ice', 'Freezing water', 'Condensing steam', 'Cooling metal'],
    correctAnswer: 'Melting ice',
    note: 'Melting ice requires heat to change from solid to liquid.',
  },
  {
    question: 'Why does metal feel colder than wood at the same temperature?',
    options: ['Metal is colder', 'Metal is a better conductor of heat', 'Wood is warmer', 'Wood absorbs heat'],
    correctAnswer: 'Metal is a better conductor of heat',
    note: 'Metal conducts heat away from your hand faster, making it feel colder.',
  },
  {
    question: 'Which of these materials is best for making a cooking pot?',
    options: ['Plastic', 'Metal', 'Wood', 'Rubber'],
    correctAnswer: 'Metal',
    note: 'Metal is used to make cooking pots because it conducts heat well.',
  },
  {
    question: 'What is the primary source of heat energy on Earth?',
    options: ['Electricity', 'Sun', 'Wind', 'Fire'],
    correctAnswer: 'Sun',
    note: 'The Sun is the primary source of heat energy on Earth.',
  },
  {
    question: 'Which of these is an example of heat transfer by radiation?',
    options: ['Heat from a fire', 'Heating water', 'Touching a hot pan', 'Blowing on hot soup'],
    correctAnswer: 'Heat from a fire',
    note: 'Radiation is the transfer of heat through electromagnetic waves, like heat from a fire.',
  },
  {
    question: 'Which type of heat transfer occurs when you touch a hot object?',
    options: ['Convection', 'Radiation', 'Conduction', 'Evaporation'],
    correctAnswer: 'Conduction',
    note: 'Conduction occurs when heat is transferred by direct contact with a hot object.',
  },
  {
    question: 'Why does a fan cool you down?',
    options: ['It adds heat', 'It increases humidity', 'It speeds up evaporation', 'It reduces temperature'],
    correctAnswer: 'It speeds up evaporation',
    note: 'A fan cools you down by speeding up the evaporation of sweat, which removes heat from your body.',
  },
  {
    question: 'What is the effect of heat on the speed of particles in a substance?',
    options: ['They slow down', 'They stop moving', 'They move faster', 'They change direction'],
    correctAnswer: 'They move faster',
    note: 'Heat makes particles move faster, which increases the temperature of the substance.',
  },
  {
    question: 'What do we call the process of changing water into steam?',
    options: ['Freezing', 'Condensation', 'Boiling', 'Melting'],
    correctAnswer: 'Boiling',
    note: 'Boiling is the process of changing water into steam by heating it.',
  },
  {
    question: 'Why do we feel warm when standing in sunlight?',
    options: ['The air heats up', 'Our body absorbs heat from the Sun', 'The ground is hot', 'The wind blows warm air'],
    correctAnswer: 'Our body absorbs heat from the Sun',
    note: 'Our body absorbs heat from the Sun’s rays, making us feel warm.',
  },
];

const McqApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [showWrongAnswers, setShowWrongAnswers] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
    setSelectedOption('');
    setShowWrongAnswers(false);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption('');
    setShowWrongAnswers(false);
  };

  const handleShowWrongAnswers = () => {
    setShowWrongAnswers(true);
  };

  return (
    <div style={styles.container}>
      <div style={styles.quizBox}>
        <h2 style={styles.title}>Physics Test on Heat</h2>
        {currentQuestion < questions.length ? (
          <div>
            <p style={styles.question}>
              {questions[currentQuestion].question}
            </p>
            <ul style={styles.optionsList}>
              {questions[currentQuestion].options.map((option, index) => (
                <li key={index} style={styles.optionItem}>
                  <input
                    type="radio"
                    id={option}
                    name="option"
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => handleOptionChange(option)}
                    style={styles.radioButton}
                  />
                  <label htmlFor={option} style={styles.optionLabel}>
                    {option}
                    {showWrongAnswers &&
                      selectedOption === option &&
                      option !== questions[currentQuestion].correctAnswer && (
                        <span style={styles.wrongAnswer}> (Wrong)</span>
                      )}
                  </label>
                </li>
              ))}
            </ul>
            {selectedOption && (
              <div>
                {selectedOption === questions[currentQuestion].correctAnswer ? (
                  <p style={styles.correctAnswerNote}>
                    Correct! {questions[currentQuestion].note}
                  </p>
                ) : showWrongAnswers && (
                  <p style={styles.wrongAnswerNote}>
                    Incorrect. {questions[currentQuestion].note}
                  </p>
                )}
              </div>
            )}
            <button style={styles.button} onClick={handleNextQuestion}>
              Next Question
            </button>

            {selectedOption && (
              <button style={styles.button} onClick={handleShowWrongAnswers}>
                Show Wrong Answers
              </button>
            )}
          </div>
        ) : (
          <div>
            <p style={styles.quizFinished}>Quiz Finished!</p>
            <p style={styles.score}>Your Score: {score}</p>
            <button style={styles.button} onClick={handleRestart}>
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: 'url("https://source.unsplash.com/1600x900/?abstract")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  quizBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    maxWidth: '500px',
    width: '100%',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    textAlign: 'center',
    color: '#333',
  },
  question: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#555',
  },
  optionsList: {
    listStyleType: 'none',
    padding: 0,
    marginBottom: '1.5rem',
  },
  optionItem: {
    marginBottom: '0.5rem',
  },
  radioButton: {
    marginRight: '0.5rem',
    cursor: 'pointer',
  },
  optionLabel: {
    fontSize: '1rem',
    color: '#444',
    cursor: 'pointer',
  },
  button: {
    display: 'block',
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '1rem',
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginBottom: '0.5rem',
  },
  quizFinished: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#555',
    textAlign: 'center',
  },
  score: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    color: '#333',
    textAlign: 'center',
  },
  wrongAnswer: {
    color: 'red',
    marginLeft: '5px',
  },
  correctAnswerNote: {
    color: 'green',
    marginTop: '0.5rem',
  },
  wrongAnswerNote: {
    color: 'red',
    marginTop: '0.5rem',
  },
};

export default McqApp;
