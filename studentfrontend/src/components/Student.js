import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { color, Container } from '@mui/system';
import { Paper } from '@mui/material';
import {useEffect, useState} from "react";
import Button from "@mui/material/Button";

export default function Student() {
    const paperStyle={padding: '50px 20px', width:600, margin:"20px auto"}
    const paperStyle2={margin:"0 15px"}
    const [name, setName]=useState('')
    const [students, setStudents]=useState([])
    const [address, setAddress]=useState('')
    const  handleClick=(e)=>{
        e.preventDefault()
        const  student={name, address}
        console.log(student)
        fetch("http://localhost:8080/student/save", {
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(student)}).then(()=>{
                console.log("New Student Added")

        })
    }

    useEffect(()=> {
        fetch("http://localhost:8080/student/getAll")
            .then(res=>res.json())
            .then((result)=>{
            setStudents(result);
        }
    )
    },[])

  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}><u>Добавить студента</u>
            </h1>
        <form  noValidate autoComplete='off'>
      <TextField id="standard-basic"  label="Student Name" variant="standard" fullWidth
      value={name} onChange={(e)=>setName(e.target.value)}
      />
      <TextField id="standard-basic" label="Student Address" variant="standard" fullWidth
                 value={address} onChange={(e)=>setAddress(e.target.value)}
      />
            <Button variant="contained" color="secondary" onClick={handleClick}>Добавить</Button>
      </form>
      </Paper>
        <Paper elevation={3} style={paperStyle}>

            {students.map(student=>(
                <Paper elevation={6} style={{margin:"10px", padding: "15px", textAlign: "left"}} key={student.id}>
                    Id:{student.id}<br/>
                    Name:{student.name}<br/>
                    Address:{student.address}
                </Paper>
            ))}

        </Paper>
      </Container>
  );
}
