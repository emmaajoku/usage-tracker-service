import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'rates' })

export class Rate {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({type: 'varchar', nullable : true})
    total_request_from: string;

    @Column({type: 'varchar', nullable : true})
    total_request_to: string;

    @Column({type: 'varchar', nullable : true})
    rate: string;
    
}
