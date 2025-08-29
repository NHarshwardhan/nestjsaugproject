/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {
   
     public employees: any[] = []

     create(employee: {name: string, age: number}){
         this.employees.push(employee)
         return employee
     }

     findAll():any{
          return this.employees
     }

    
}
