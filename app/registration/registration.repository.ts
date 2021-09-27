import {EntityRepository, Repository} from 'typeorm';
import { InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { Registration } from './entities/registration.entity';
import { CreateRegistrationDto } from './dto/create-registration.dto';

@EntityRepository(Registration)
export class RegistrationRepository extends Repository <Registration> {

    /**
     * 
     * @param email
     * @returns 
     */
    async getRegisterCompanyByEmail(email: string): Promise<Registration> {
        try {
            const result: any = await this.findOne({where: {email}});

            if (!result) {
                throw new NotFoundException (`A Register company with email: ${email}  not found`);
            }
            return result;
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }


    /**
     * 
     * @param id 
     * @returns 
     */
    async getRegisterCompanyById(id: number): Promise<CreateRegistrationDto> {
        try {
            const result: any = await this.findOne(id);
            
            if (!result) {
                throw new NotFoundException (`A Register company with id: ${id}  not found`);
            }
            return result;
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }
    

    /**
     * 
     * @param id 
     * @param createRegistrationDto 
     * @returns 
     */
    async createCompanyAccount(createRegistrationDto: CreateRegistrationDto): Promise<Registration> {
        try {
            return this.save({ ...createRegistrationDto });
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
  
    }

    /**
     * 
     * @param id 
     * @returns 
     */
    async deleteCompanyAccountById(id: string): Promise<object> {
        const result = await  this.delete(id);
        if (result.affected ===  0) {
            throw new NotFoundException (`Unable  to delete Company account because ID ${id} not found`);
        }
        return {
            success: true,
        };
    }

}
