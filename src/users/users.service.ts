import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            id: 1,
            name: 'Pedro',
            email: 'pedro@gmail.com',
        },
        {
            id: 2,
            name: 'Lucia',
            email: 'lucia@gmail.com',
        },
        {
            id: 3,
            name: 'Maria',
            email: 'maria@gmail.com',
        }
    ]
    getUsers(){
        return this.users;
    }
}
