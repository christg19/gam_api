import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInsurerDto, UpdateInsurerDto } from './dto/index.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Insurer, InsurerDocument } from './schema/insurer.schema';
import { Model } from 'mongoose';

@Injectable()
export class InsurersService {
    constructor(
        @InjectModel(Insurer.name)
        private insurerModel: Model<InsurerDocument>
    ) { }

    async findAllInsurers(): Promise<Insurer[]> {
        return this.insurerModel.find();
    }

    async findOne(id: string): Promise<Insurer> {
        return this.insurerModel.findOne({
            where: {
                id: id
            }
        });
    }

    private validateURL(url: string): Boolean {
        const pattern = new RegExp('^(https?:\\/\\/)?' +
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
            '((\\d{1,3}\\.){3}\\d{1,3}))' +
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
            '(\\?[;&a-z\\d%_.~+=-]*)?' +
            '(\\#[-a-z\\d_]*)?$', 'i');
        return !!pattern.test(url);
    }

    async create(dto: CreateInsurerDto) {
        if (!dto) {
            throw new Error('DTO is undefined.');
        }

        if (!this.validateURL(dto.logo)) {
            throw new NotFoundException(`URL ${dto.logo} is not valid.`);
        }

        return this.insurerModel.create(dto);
    }

    async update(dto: UpdateInsurerDto, id: string) {
        const existingInsurer = await this.insurerModel.findById(id).exec();

        if (!existingInsurer) {
            throw new NotFoundException(`Insurer with ID ${id} not found`);
        }

        return this.insurerModel.findByIdAndUpdate(id, dto);
    }

    async remove(id: string) {
        const deletedInsurer = await this.insurerModel.findById(id).exec();

        if (!deletedInsurer) {
            throw new NotFoundException(`Insurer with ID ${id} not found`)
        }

        await this.insurerModel.findByIdAndDelete(id).exec();

        return { message: 'Insurer deleted succesfully.' };
    }
}
