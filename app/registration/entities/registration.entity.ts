import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'registration' })

export class Registration {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', nullable : true})
    company_name: string;

    @Column({type: 'varchar', nullable : false, unique: true})
    email: string;

    @Column({type: 'varchar', nullable : true})
    phone: string;

    @Column({type: 'int', nullable : false, default: 1})
    status: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    public created_at: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    public updated_at: Date;
}
