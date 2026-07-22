const patients = [
  { id: 1001, name: "Moises" },
  { id: 1002, name: "Daniela" },
];

function findId(patient) {
  const isPatient = patients.some((item) => item.id === patient.id);
  return isPatient;
}

console.log(findId({ id: 1003, name: "Moises" }));
