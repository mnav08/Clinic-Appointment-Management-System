const doctors = [
  { id: 1, name: "Dr. Sarah Chen", speciality: "Cardiology" },
  { id: 2, name: "Dr. Marcus Vance", speciality: "Neurology" },
  { id: 1, name: "Dr. Sarah Chen", speciality: "Cardiology" },
  { id: 3, name: "Dr. Elena Rostova", speciality: "Pediatrics" },
  { id: 4, name: "Dr. Jamal Malik", speciality: "Orthopedics" },
  { id: 1, name: "Dr. Sarah Chen", speciality: "Cardiology" },
  { id: 5, name: "Dr. Maya Lin", speciality: "Dermatology" },
  { id: 6, name: "Dr. David Kim", speciality: "Oncology" },
  { id: 7, name: "Dr. Priya Patel", speciality: "Gastroenterology" },
  { id: 1, name: "Dr. Sarah Chen", speciality: "Cardiology" },
];

const doctorCount = doctors.reduce((acc, doc) => {
  //assigning key = value to acc obj
  acc[doc.id] = (acc[doc.id] || 0) + 1; //lookup the key [doc.id] in acc obj. if none is found assign 0 and add 1.
  return acc;
}, {}); //initialize acc as an empty obj

let maxCount = 0; //keep track of obj with the most count
let mostRequestedId = null; // store what Id has that obj

//destructure obj into [key,value] array
for (const [id, count] of Object.entries(doctorCount)) {
  if (count > maxCount) {
    maxCount = count;
    mostRequestedId = Number(id);
  }
}
const mostBusyDoc = doctors.find((obj) => obj.id === mostRequestedId);

//console.log(mostBusyDoc, maxCount);

const patients = [
  { name: "Moises", age: 28 },
  { name: "Moises", age: 21 },
  { name: "Moises", age: 20 },
  { name: "Moises", age: 35 },
];

const sumAge = patients.reduce((accumulator, current) => {
  return accumulator + current.age;
}, 0);
const avgAge = Math.floor(sumAge / patients.length);
console.log(avgAge);
