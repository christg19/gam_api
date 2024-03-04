import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { InsurersService } from './insurers.service';
import { CreateInsurerDto, UpdateInsurerDto } from './dto/index.dto'
import { ApiTags } from '@nestjs/swagger';

@Controller('insurers')
@ApiTags('insurers')
export class InsurersController {
    constructor(private readonly insurerService: InsurersService,) {

    }

    @Get('all')
    findAllInsurers() {
        return this.insurerService.findAllInsurers();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.insurerService.findOne(id);
    }

    @Post()
    create(@Body(new ValidationPipe({transform: true})) dto: CreateInsurerDto) {
        console.log('DTO received:', dto);
        return this.insurerService.create(dto);
    }
    

    @Put(':id')
    update(
        @Param('id') id: string,
        @Body() updateInsurersDto: UpdateInsurerDto,
    ): Promise<any> {
        return this.insurerService.update(updateInsurersDto, id);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.insurerService.remove(id);
    }

}
