package com.arjuncodes.studentsystem.service;

import com.arjuncodes.studentsystem.model.Student;
import com.arjuncodes.studentsystem.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.server.ResponseStatusException;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    public Student findById( Integer id ) {
        return studentRepository.findById( id )
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        String.format( "Activity not found with id %d", id )));
    }

    public Student saveStudent(Student student) {

//        Student student = new Student();

//        student
//
//        student.setName(name);
//        student.setAddress(address);
        return studentRepository.save(student);
    }
}
