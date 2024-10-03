let student_name = 'Mary';
gpa = 3.2;
honor_role = false;

if(honor_role === true){
    console.log("Congratulations")
}else {
    console.log("You also did great")
}


if(gpa >= 0 && gpa <=1.9){
    console.log('F')
}else if(gpa >= 2 && gpa <= 2.4){
    console.log('D')
}else if(gpa >= 2.5 && gpa <= 2.9){
    console.log('C')
}else if(gpa >=3.0 && gpa <= 3.4){
    console.log('B')
}else if(gpa >= 3.5 && gpa <= 4.0){
    console.log(A)
}else{
    console.log('Try next time')
}


let student_names = ['Bright', 'Nunti', 'Elvis'];
let studet_gpas = [3.0, 2.9, 3.8];
let honor_roles = [false, false, true];


if(honor_roles === true){
    console.log("congratulations everyone")
}else if(honor_roles === 2/3){
    console.log("Congrats Guys")
}else {
    console.log("Try again next time")
}

student_names.push("Blessdel");
console.log(student_names);

studet_gpas.push(4);
console.log(studet_gpas);

honor_roles.push(true);
console.log(honor_roles);

let last_student = student_names.pop();
