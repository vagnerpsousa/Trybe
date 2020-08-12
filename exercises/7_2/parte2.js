const lesson1 = {
	materia: 'Matemática',
	numeroEstudantes: 20,
	professor: 'Maria Clara',
	turno: 'manhã',
};

const lesson2 = {
	materia: 'História',
	numeroEstudantes: 20,
	professor: 'Carlos',
};

const lesson3 = {
	materia: 'Matemática',
	numeroEstudantes: 10,
	professor: 'Maria Clara',
	turno: 'noite',
};
// exe1

const addTurno = (obj, key, value) => obj[key] = value
addTurno(lesson2, 'turno', 'manhã');
console.log(lesson2);
//exe2
const listKeys = obj => {
	console.log(Object.keys(obj));
}
listKeys(lesson1);
//exe3
const objSize = obj => Object.keys(obj).length;
console.log(objSize(lesson2))
//exe4
const objValues = obj => Object.values(obj);
console.log(objValues(lesson2));
//exe5
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
//exe6
const countStudent = obj => {
	let total = 0;
	const array = Object.keys(obj);
	console.log(array);
	for(i in array) {
		total += obj[array[i]].numeroEstudantes;
	}
	return total;
}
console.log(`Números de estudantes ${countStudent(allLessons)}`);
//exe7
const getValueByNumber = (obj, number) => Object.values(obj)[number]; 
console.log(getValueByNumber(lesson1, 0));
//exe8
const verifyPair = (obj, key, value) => {
	const arr = Object.entries(obj);
  for (let i in arr) {
    if (arr[i][0] === key && arr[i][1] === value) isEqual = true;
  }
  return isEqual;
};
console.log(verifyPair(lesson2,'professor','Carlos'));
// bonus exe1
