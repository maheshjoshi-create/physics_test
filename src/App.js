import React, { useState } from 'react';

const questions = [
  {
    question: 'What is the SI unit of heat?',
    options: ['Calorie', 'Celsius', 'Kelvin', 'Fahrenheit'],
    correctAnswer: 'Calorie',
    note: 'Heat is a form of energy, and its SI unit is the Calorie.',
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
  // ... Add more questions here (up to 50 or as many as you need)
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