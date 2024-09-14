import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    private users: any []= [
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
    createtUsers(user: CreateUserDto){
        this.users.push(user);
        return { 

            ...user,
            id:this.users.length + 1
        }
    }
}
