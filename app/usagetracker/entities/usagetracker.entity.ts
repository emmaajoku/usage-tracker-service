import { Registration } from './../../registration/entities/registration.entity';

import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'requests' })
export class UsagetrackerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Registration, x => x.id)
  company?: number;

  @Column({type: 'bigint', nullable : false, default: 0})
  counter: number;
  
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  public created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  public updated_at: Date;
}