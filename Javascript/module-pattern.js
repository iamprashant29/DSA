function createEmployee() {
    var firstName = undefined;
    var lastName = undefined;

    const employeeObj = {
        setFirstName: function (name) {
            firstName = name;
        },
        getFirstName: function () {
            return firstName;
        },
        setLastName: function (name) {
            lastName = name;
        },
        getLastName: function () {
            return lastName;
        }
    }
    return employeeObj;
}

const emp1 = createEmployee();
emp1.setFirstName("Prashant");
emp1.setLastName("Iyengar");
console.log(emp1.getFirstName() + " " + emp1.getLastName());
