import { Get, Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
  private students = [
    {
      id: 1,
      name: 'Rabeet',
      age: 20,
    }, // 0
    {
      id: 2,
      name: 'Naqvi',
      age: 25,
    }, // 1
  ];

  //   GET
  getAllStudents() {
    return this.students;
  }

  getStudentById(id: number) {
    const student = this.students.find((student) => student.id === id);
    if (!student) {
      throw new NotFoundException('Student not found!');
    }
    return student;
  }

  //   POST
  createStudent(data: { name: string; age: number }) {
    const newStudent = {
      id: Date.now(),
      ...data,
    };
    this.students.push(newStudent);
    return newStudent;
  }

  //   PUT
  updateStudent(id: number, data: { name: string; age: number }) {
    const index = this.students.findIndex((s) => s.id === id);
    if (index === -1) throw new NotFoundException('Student not found!');
    this.students[index] = { id, ...data };
    return this.students[index];
  }

  // PATCH
  patchStudent(id: number, data: Partial<{ name: string; age: number }>) {
    const student = this.getStudentById(id);
    Object.assign(student, data);
    return student;
  }

  //   DELETE
  deleteStudent(id: number) {
    const index = this.students.findIndex((student) => student.id === id);
    if (index === -1) {
      throw new NotFoundException('Student not found!');
    }
    const deleted = this.students.splice(index, 1); // 1,1
    return { message: 'Student deleted', student: deleted[0] };
  }
}
