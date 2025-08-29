/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
     
    constructor(private empService: EmployeeService){}


    @Post()
    create(@Body() body: any){
       return this.empService.create(body)
    }

    @Get()
    findAll():any{
         return this.empService.findAll()
    }
}
