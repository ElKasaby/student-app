const fs = require('fs')
const yargs = require('yargs')
const student = require('./student')

yargs.command({
    command:'add',
    builder:{
        id:{
            describe:'this ID in add command',
            demandOption: true,
            type:'number'
        },
        name:{
            describe:'this name in add command',
            demandOption: true,
            type:'string'
        },
        grade:{
            describe:'this grade in add command',
            demandOption: true,
            type:'array'
        },
        comment:{
            describe:'this grade in add command',
            type:'string'
        }
    },
    handler:(argv)=>{
        student.addStuden(argv.id,argv.name,argv.grade,argv.comment)
    }
})

yargs.command({
    command:'delete',
    builder:{
        id:{
            describe:'this ID in delete command',
            demandOption: true,
            type:'number'
        }
    },
    handler:(argv)=>{
        student.deleteStudent(argv.id)
    }
})

yargs.command({
    command:'read',
    builder:{
        id:{
            describe:'this ID in read command',
            demandOption: true,
            type:'number'
        }
    },
    handler:(argv)=>{
        student.readStudent(argv.id)
    }
})

yargs.command({
    command:'list',
    handler:()=>{
        student.listStudent()
    }
})

yargs.command({
    command:'*',
    handler:()=>{
        console.log('Sorry this is not a command');
    }
})

yargs.parse()
