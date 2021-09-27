import { IsNotEmpty } from 'class-validator';
export class CreatePaymentDueDto {
    @IsNotEmpty()
    readonly company: number;
    readonly total_requests: string;
    readonly total_amount_due: string;
    readonly payment_status: string;
    readonly duration: string;
}
