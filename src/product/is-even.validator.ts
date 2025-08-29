/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
// stock : even

import { registerDecorator, ValidationArguments } from "class-validator";

export function IsEven(){         
    return function(object: Object , propertyName: string){
           registerDecorator({
             name : 'isEven',
             target: object.constructor,
             propertyName:propertyName,
            
             validator:{
                 validate(value: any ){
                      return typeof(value) === "number" && value %2 === 0
                 },
                 defaultMessage(args: ValidationArguments){
                       return `${args.property} must be an even number`
                 }
             }
           })
    }

}