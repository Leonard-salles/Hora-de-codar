import {useCallback, useEffect, useState} from "react"

import './App.css';
import StartScreen from './components/StartScreen';

import { wordsList } from "./data/words"
import Game from "./components/Game";
import GameOver from "./components/GameOver";

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"}, 
  {id: 3, name: "end" }
]

function App() {

  const [gameStage,setGameStage] = useState(stages[0].name);
  const [words] = useState( wordsList );

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategoty] = useState("");
  const [letters, setLetters] = useState([])

  
    const [guessedLetters, setGuessedLetters] =  useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);

    const guessesQty = 3

    const [guesses, setGuesses] = useState(guessesQty);
    const [score, setScore ] = useState(0);

  const pickWorldAndCategory = useCallback(() =>{
    // pick random category
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    //pick  radom word
    const word = words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category }
  },[words] )

  //start secret world game
  const startGame = useCallback(() => {
    // clear all letters 
    clearLetterStage()
    // pick world and pic category
    const { word, category } = pickWorldAndCategory()
    
    // create array of letters
    let wordLetter = word.split("")
    
    wordLetter = wordLetter.map((i) => i.toLowerCase())
    


    //fill states
    setPickedWord(word)
    setPickedCategoty(category)
    setLetters(wordLetter)

    setGameStage(stages[1].name)
  }, [pickWorldAndCategory])

  // provess the letter input
  const verifyLetter = (letter) =>{
    const normalizedLetter = letter.toLowerCase();

    //check if letter already been ultilized
    if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter))
    {
      return;
    }

    // push guessed letter or remove a guesse
    if(letters.includes(normalizedLetter)){
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters, normalizedLetter
      ])
    } else{
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters, normalizedLetter
      ])

      setGuesses((actualGuesses) => actualGuesses -1)

    }

  }

  const clearLetterStage = () => {
    setGuessedLetters([]);
    setWrongLetters([])
  }


  //check if guesses ended
  useEffect(() => {
    if(guesses <=0){
      //reset all 

      clearLetterStage()

      setGameStage(stages[2].name)
    }
  }, [guesses])

  // check win condition
  useEffect(() => {

    const uniqueLetters = [...new Set(letters)]

    //wind condition 
    if(guessedLetters.length === uniqueLetters.length && gameStage === stages[1].name){

      //add score
      setScore((actualScore) => actualScore += 100)

      // restart game with new word
      startGame();

    }

  }, [guessedLetters, letters, startGame])

  // restar the game
  const retry = () =>{
    setScore(0)
    setGuesses(guessesQty)
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <Game 
      verifyLetter={verifyLetter}
      pickedWord={pickedWord}
      pickedCategory={pickedCategory}
      letters={letters}
      guessedLetters = {guessedLetters}
      wrongLetters = {wrongLetters}
      score = {score}
      guesses = {guesses} />}
      {gameStage === "end" && <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;
