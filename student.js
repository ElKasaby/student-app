const fs = require('fs')

const addStuden = (id ,name ,grade ,comment )=>{
    const students = loadStudent()
    let total = 0
    grade.forEach(element => {
        total = total + element
    });
    const duplicateID = students.filter((student)=>{
        return student.id === id
    })
    if(duplicateID.length === 0 ){
        students.push(
            {
                id,
                name,
                grade,
                total,
                comment
            }
        )
        saveStudent(students)
        console.log("Save Successfully");
    }else{
        console.log("Error duplicate ID ");
    }
}

const deleteStudent = (id)=>{
    const student = loadStudent()
    const studentsToKeep = student.filter((student)=>{
        return student.id !== id 
    })
    const idInStudent = student.filter((student)=>{
        return student.id === id 
    })
    if(idInStudent.length === 0){
        console.log("Sorry, This ID not found");
    }else{
        saveStudent(studentsToKeep)
        console.log("Delete Successfully");
    }
}

const readStudent = (id)=>{
    const student = loadStudent()
    const studentID = student.find((student)=>{
        return student.id === id
    })

    if(studentID){ 
        console.log(studentID)
    }else{
        console.log("Sorry, This ID not found");
    }
}

const listStudent = ()=>{
    const load = loadStudent()
    load.forEach(element => {
        console.log(element);
    });
}

const loadStudent = ()=>{
    try{
        const dataBuffer = fs.readFileSync('student.json').toString()
        return JSON.parse(dataBuffer)
    }
    catch(e){
        return []
    }
}

const saveStudent = (student)=>{
    const saveData = JSON.stringify(student)
    fs.writeFileSync('student.json',saveData)
}



module.exports = {
    addStuden,
    deleteStudent,
    readStudent,
    listStudent
}