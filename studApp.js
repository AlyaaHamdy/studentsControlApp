
const yargs = require ('yargs')


const students = require('./students')
yargs.command({
         command:'add',
         describe:('Add Student'),
         builder:{
             id:{
                describe:'This is ID description in add command',
                type:'number',
                demandOption:true

             },
             name:{
                describe:'This is Name description in add command',
                type:'string',
                demandOption:true
              
             },
             degree:{
              describe:'These are degrees description in add command',
              type:'array',
              demandOption:true
            
           },
           total:{
            describe:'This is the total of degrees description in add command',
            type:'number',
          
         },

         },
         handler:()=>{
            students.addStudent(yargs.argv.id,yargs.argv.name,yargs.argv.degree,yargs.argv.total)
         }
     })
     yargs.command({
      command:'delete',
      describe:('Delete Student'),
      builder:{
        id:{
          describe:'This is ID description in delete command',
          type:'number',
          demandOption:true

       },
        
    },
      handler:()=>{
        students.deleteStudent(yargs.argv.id)
        }
      })
    
     yargs.command({
      command:'read',
      describe:('Read Students'),
      builder:{
        id:{
          describe:'This is ID description in read command',
          type:'number',
          demandOption:true

       },
        
    },
      
      handler:()=>{
        students.readStudent(yargs.argv.id)}

      })
     
      yargs.command({
          command:'list',
          describe:('List Students'),
          handler:()=>{
              students.listStudent()

      }
    
 
    })
 
 
 yargs.parse()
