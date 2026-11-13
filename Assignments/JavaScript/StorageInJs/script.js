const x = 20;

const emp = {
    name: "Rahul",
    age: 28,
    gender: "male",
    salary: 26000,
};

localStorage.setItem("Number", x);

localStorage.setItem("employeeData", JSON.stringify(emp));

const EMP = JSON.parse(localStorage.getItem("employeeData"));

