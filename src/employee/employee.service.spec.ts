/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let service: EmployeeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployeeService],
    }).compile();

    service = module.get<EmployeeService>(EmployeeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a employee',()=>{
         const emp = {name: "Peter", age: 34}
         expect(service.create(emp)).toEqual(emp)
         expect(service.employees.length).toBeGreaterThanOrEqual(1)
  })

  it('should return all employees',()=>{
       const emp1 = { name: "Peter", age: 33}
       const emp2 = { name: "John", age: 34}
       service.create(emp1)
       service.create(emp2)

       expect(service.findAll()).toEqual([emp1, emp2])
       

  })


});
