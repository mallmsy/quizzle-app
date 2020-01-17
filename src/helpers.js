const setObject = (el) => {
    const newEl = {...el}
    newEl.all_answers = [el.correct_answer, ...el.incorrect_answers]

    return newEl;
};

export default setObject;
