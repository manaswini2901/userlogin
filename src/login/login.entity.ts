import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('login')
export class LoginEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  password: string;

  @Column()
  lastName: string;
}
