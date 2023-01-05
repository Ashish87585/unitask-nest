import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {

   async create(createUserDto: CreateUserDto) {
        const user = User.create<any>(createUserDto)

        await user.save()
        delete user.password
        return user;
   }

   async findByEmail (email: string) {
    return await User.findOne({
        where: {
            email: email
        }
    })
   }
    
}
