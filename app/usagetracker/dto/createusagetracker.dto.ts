import { IsNotEmpty } from "class-validator";

export class CreateUsageTrackerDto {
    @IsNotEmpty()
    readonly email : string;
    readonly created_ad: Date;
    readonly updated_at: Date;
}
