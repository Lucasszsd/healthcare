import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GuideModule } from './guide/guide.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'frontend'),
    }),
    MongooseModule.forRoot('mongodb://localhost/nest'),
    GuideModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
