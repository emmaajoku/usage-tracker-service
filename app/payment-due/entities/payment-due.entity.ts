import { Registration } from "app/registration/entities/registration.entity";
import { PrimaryGeneratedColumn, Column, Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity({name: 'payment_due'})
export class PaymentDue {
    @PrimaryGeneratedColumn()
    id: number;
  
    @ManyToOne(() => Registration)
    @JoinColumn({name : 'company_id'})
    company_id: Registration;
    
    @Column({type: 'varchar', nullable : false, default: '0'})
    total_requests: string;

    @Column({type: 'varchar', nullable : false, default: '0'})
    total_amount_due: string;
  
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    public created_at: Date;
  
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    public updated_at: Date;
}
