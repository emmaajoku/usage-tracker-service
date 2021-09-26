import { IsNotEmpty } from 'class-validator';
export class CreateRegistrationDto {
    @IsNotEmpty()
    readonly company_name: string;
    readonly email: string;
    readonly phone: string;
    readonly status: string;
}
