import { useCallback, useEffect, useState } from "react";

interface IColorOption {
  backgroundColor: string;
  correct: boolean;
}

const useHexGame = () => {
  const [colorOptions, setColorOptions] = useState<IColorOption[]>([]);

  const startGame = useCallback(() => {
    const correctAnswer = {
      backgroundColor: generateRandomHexColor(),
      correct: true,
    };
    const incorrectAnswers = Array(3)
      .fill({})
      .map(() => ({
        backgroundColor: generateRandomHexColor(),
        correct: false,
      }));

    setColorOptions(
      [correctAnswer, ...incorrectAnswers].sort(() => Math.random() - 0.5)
    );
  }, []);
  const generateRandomHexColor = () => {
    return `#${((Math.random() * 0xffffff) << 0).toString(16)}`.toUpperCase();
  };

  useEffect(() => {
    startGame();
  }, [startGame]);

  return { colorOptions, startGame };
};

export default useHexGame;
