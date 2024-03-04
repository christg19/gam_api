import { Module } from '@nestjs/common';
import { InsurersService } from './insurers.service';
import { InsurersController } from './insurers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Insurer, InsurerSchema } from './schema/insurer.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{ name: Insurer.name, schema: InsurerSchema }]),
  ],
  providers: [InsurersService],
  controllers: [InsurersController]
})
export class InsurersModule {}
