import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../shared/typeorm/entities/base-entity';

@Entity('users')
export class User extends BaseEntity {
  @Column('varchar', { unique: true })
    email: string

  @Column('varchar')
    password: string

  @Column('varchar')
    firstName: string

  @Column('varchar')
    lastName: string
}
