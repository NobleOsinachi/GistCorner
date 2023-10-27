export function shuffleArray(array: Array<any>) {
  // Create a copy of the original array to avoid modifying it directly
  const shuffledArray = [...array];

  // Use the Fisher-Yates algorithm to shuffle the array
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}
