import {registerDecorator, ValidationOptions, ValidationArguments} from "class-validator";

export function IntLength(min:number, max: number, validationOptions?: ValidationOptions) {
   return function (object: Record<string, any>, propertyName: string) {
        registerDecorator({
            name: "IntLength",
            target: object.constructor,
            propertyName: propertyName,
            constraints: [min,max],
            options: validationOptions,
            validator: {
                validate(value: number, args: ValidationArguments) {
                    return value.toString().length>=args.constraints[0]&&value.toString().length<=args.constraints[1];
                },
                defaultMessage(args: ValidationArguments) { // here you can provide default error message if validation failed
                    return `${args.property} must be between ${args.constraints[0]} and ${args.constraints[1]} digits long.`;
                }
            }
        });
   };
}