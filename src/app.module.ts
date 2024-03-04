import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InsurersModule } from './insurers/insurers.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_DB),
    InsurersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
 //docker run --name gamdb -e MONGO_INITDB_ROOT_USERNAME=chris -e MONGO_INITDB_ROOT_PASSWORD=mockDB -d -p 27017:27017 mongo