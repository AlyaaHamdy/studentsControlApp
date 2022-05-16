const fs = require('fs')
const { name } = require('process')




/////////////////////add Student
const addStudent =(id,name,degree,total)=>{
    const students = loadStudent()
    const duplicateId = students.find((student)=>{
        return student.id === id 
    })
   // console.log(duplicateId)


    if (!duplicateId){
        students.push({
            id,
            name,
            degree,
            total
        })
       // displayResult(sum)
        //degrees()
        saveStudent(students)
        console.log('saved Successfully')
    }
    else{
        console.log('Error duplicate ID')
    }
    
}



///////////////////////////delete Student
const deleteStudent = (id) =>{
    const students = loadStudent()
    const studentsToKeep = students.filter((student)=>{
        return student.id !== id 
    })
    if (students.length !== studentsToKeep.length ){
        saveStudent(studentsToKeep)
        console.log ('Removed')
    }
    else{
        console.log('Not Found')
    }
}


////////////////////////////////read Students
const readStudent = (id)=>{
    const students =loadStudent()
    const studentToRead = students.find((student)=>{
        return student.id === id
    })
    if(studentToRead){
        console.log(studentToRead.id,studentToRead.name)
    }
    else{
        console.log('Not Existed')
    }
}
/////////////////////////list Students
const listStudent = () =>{
    const students = loadStudent()
    students.forEach(student => {
        console.log(student.id)
    });
}




let degrees = [];

for (let i =0 ;i<degrees.length;i++){
    console.log(degrees[i])
    sum = 0;
    
}

















const loadStudent = () =>{
    try{
        const data = fs.readFileSync('students.json').toString()

        return JSON.parse(data)
    }catch(e){
        return[]
    }

}

const saveStudent = (students) =>{
    const saveData = JSON.stringify(students)
    fs.writeFileSync('students.json',saveData)
}









module.exports ={
    addStudent,
    deleteStudent,
    readStudent,
    listStudent
    
}
