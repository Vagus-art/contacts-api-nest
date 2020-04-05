import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Index("contacts_pkey", ["id"], { unique: true })
@Index("contacts_phone_key", ["phone"], { unique: true })
@Entity("contacts", { schema: "public" })
export class ContactsEntity {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", length: 255 })
  name: string;

  @Column("bigint", { name: "phone", unique: true })
  phone: number;
}
