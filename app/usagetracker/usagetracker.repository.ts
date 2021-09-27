import {EntityRepository, Repository} from 'typeorm';
import { NotFoundException, Logger } from '@nestjs/common';
import { UsagetrackerEntity } from './entities/usagetracker.entity';

@EntityRepository(UsagetrackerEntity)
export class UsageTrackerRepository extends Repository <UsagetrackerEntity> {

    /**
     * 
     * @param id 
     * @returns 
     */
    async getUsagetrackerByField(id: number): Promise<UsagetrackerEntity> {
        const found: any = await this.findOne({where: {id}});
        if (!found) {
            throw new NotFoundException (`usage tracker with company ID: ${id}  not found`);
        }
        return found;
    }

        /**
     * 
     * @param id 
     * @returns 
     */
         async getUsagetrackerByCompany(company: number): Promise<UsagetrackerEntity> {
            const found: any = await this.findOne({where: {company}});
            return found;
        }

    /**
     * 
     * @param id 
     * @param usageData 
     * @returns 
     */
    async saveUsagetracker(id: number, usageData) {
        return this.save({ ...usageData, id: Number(id) });
    }

    /**
     * 
     * @param id 
     * @param usageData 
     * @returns 
     */
    async createUsagetracker(usageData) {
        return this.save({...usageData});
    }
    /**
     * 
     * @param id 
     * @returns 
     */
    async deleteUsagetrackerEntityById(id: string): Promise<object> {
        const result = await  this.delete(id);
        if (result.affected ===  0) {
            throw new NotFoundException (`UsagetrackerEntity with ID ${id} not found`);
        }
        return {
            success: true,
        };
    }

}
