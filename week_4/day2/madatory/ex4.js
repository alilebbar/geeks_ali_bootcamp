const users = [
  { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
  { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
  { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
  { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
  { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
  { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }
];
const welcomeStudents = users.map((e)=>`Hello ${e.firstName}`)
console.log(welcomeStudents)
const fullStackResident = users.filter((e)=>e.role==="Full Stack Resident")
console.log(fullStackResident)
const fullLastName = users.filter((f)=>f.role==="Full Stack Resident").map((e)=>e.firstName)
console.log(fullLastName)