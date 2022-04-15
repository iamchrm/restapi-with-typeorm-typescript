import { userInterface } from "./userInterface";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// @Entity() is a decorator that tells TypeORM that this class is a table in the database
@Entity("user")
export class User extends BaseEntity implements userInterface {
  // @PrimaryGeneratedColumn() is a decorator that tells TypeORM that this property is a primary key in the database
  @PrimaryGeneratedColumn()
  id: string;
  // @Column() is a decorator that tells TypeORM that this property is a column in the database
  @Column({
    nullable: false,
  })
  name: string;

  @Column({
    nullable: false,
  })
  lastname: string;

  @Column({
    nullable: false,
    unique: true,
  })
  phone: string;

  @Column({
    nullable: false,
    unique: true,
  })
  email: string;

  @Column({
    nullable: false,
  })
  password: string;
}
