import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Guide } from './schemas/guide.schema';
import { CreateGuideDto } from './dto/create-guide.dto';

@Injectable()
export class GuideService {
  constructor(@InjectModel(Guide.name) private guideModel: Model<Guide>) {}

  async create(createGuideDto: CreateGuideDto): Promise<Guide> {
    const createdGuide = new this.guideModel(createGuideDto);
    return createdGuide.save();
  }

  async findAll(): Promise<Guide[]> {
    return this.guideModel.find().exec();
  }
}
