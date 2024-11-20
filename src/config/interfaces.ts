export class Role{
    id!: number;
    code!: string;
    name!: string;
}

export interface User {
    id: number
    role: Role
    email: string;
    password: string
    date:Date
}

export interface Role {
    id: number
    name: string
    code: string
}
  