import { Injectable, NotFoundException } from '@nestjs/common';

export type User = { username: string, id, email?: string }

@Injectable()
export class UsersService {
    users: User[] = []

    findAll(kw:string): User[] {
        if (kw !== undefined)
            return this.users.filter((user) => user.username.includes(kw));
        return this.users
    }

    findOne(id: number): User {
        const user = this.users.find((user) => user.id === id);
        if (user === undefined)
            throw new NotFoundException(`User with id ${id} not found`);
        return user;
    }

    createUser(args) : User {
        const id = this.users.push({id: this.users.length, ...args});
        return {id, ...args}
    }

    updateUser(id, args) : User {
        this.users = this.users.map((user => {
            if (id === user.id) 
                return {...user, ...args};
            return user;
        }))

        return this.findOne(id);
    }

    deleteUser(id) : User {
        const user = this.findOne(id);
        if (user.id === -1)
            throw new NotFoundException(`User with id ${id} not found`);
        this.users = this.users.filter((user) => user.id !== id);
        return user; 
    }
}
