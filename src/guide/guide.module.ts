import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GuideController } from './guide.controller';
import { GuideService } from './guide.service';
import { Guide, GuideSchema } from './schemas/guide.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Guide.name, schema: GuideSchema }]),
  ],
  controllers: [GuideController],
  providers: [GuideService],
})
export class GuideModule {}
