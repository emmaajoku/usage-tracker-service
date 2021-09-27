import { PaymentDue } from './entities/payment-due.entity';
import {EntityRepository, Repository} from 'typeorm';
import { InternalServerErrorException, NotFoundException } from '@nestjs/common';

@EntityRepository(PaymentDue)
export class PaymentRepository extends Repository <PaymentDue> {

    /**
     * 
     * @param id
     * @returns 
     */
    async getPaymentById(id: string): Promise<PaymentDue[]> {
        try {
            const result: any = await this.findOne({where: {id}});

            if (!result) {
                throw new NotFoundException (`A payment id: ${id}  not found`);
            }
            return result;
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }


    /**
     * 
     * @param company 
     * @returns 
     */
    async getPaymentDueByCompany(company: number): Promise<PaymentDue> {
        try {
            const result: any = await this.findOne(company);
            
            if (!result) {
                throw new NotFoundException (`A Register company with id: ${company}  not found`);
            }
            return result;
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }

    /**
     * 
     * @param id 
     * @param usageData 
     * @returns 
     */
    async saveCompanyForAccount(id: number, usageData) {
        return this.save({ ...usageData, id: Number(id) });
    }

    /**
     * 
     * @param usageData 
     * @returns 
     */
    async createCompanyForAccount(usageData) {
        return this.create(usageData);
    }



}
