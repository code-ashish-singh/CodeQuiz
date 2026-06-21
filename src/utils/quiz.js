/** Fisher-Yates shuffle, returns a new array (does not mutate the input). */
function shuffle(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/** Shuffle the full question bank — every quiz uses all of its questions. */
export function pickQuestions(bank) {
  return shuffle(bank);
}

/** Score a set of answers (array of selected option strings, same order as questions). */
export function scoreAnswers(questions, answers) {
  return questions.reduce(
    (total, question, index) => (answers[index] === question.answer ? total + 1 : total),
    0
  );
}
