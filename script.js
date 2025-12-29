//complete this code
class Person {
	constructor(_name,_age){
		this.name = name;
		this.age = age;
	}
	getName(){
		return this.name;
	}
	setAge(age){
		this.age = age;
	}
}

class Student extends Person {
	 constructor(name, age) {
	    super(name, age);
	  }
	study(){
		return `${this.name} is a studying.`;
	}
}

class Teacher extends Person {
	constructor(name, age) {
    super(name, age);
  }
  teach(){
    return `${this.name} is a teaching.`;
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
