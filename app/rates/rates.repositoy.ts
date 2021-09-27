import {EntityRepository, Repository} from 'typeorm';
import { InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { Rate } from './entities/rate.entity';

@EntityRepository(Rate)
export class RateRepository extends Repository <Rate> {

    /**
     * 
     * @param total_request_to 
     * @returns 
     */
    async getRateByTotalRequestTo(total_request_to: string): Promise<Rate> {
        try {
            const result: any = await this.findOne({where: {total_request_to}});
            return result;
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }


    /**
     * 
     * @param total_request_to 
     * @returns 
     */
     async getRateByTotalRequestFrom(total_request_from: string): Promise<Rate> {
        try {
            const result: any = await this.findOne({where: {total_request_from}});
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
    async getRateById(id: number): Promise<Rate> {
        try {
            const result: any = await this.findOne(id);
            
            if (!result) {
                throw new NotFoundException (`Rate with id: ${id}  not found`);
            }
            return result;
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }


}
