import { Controller, Get, Post, Body } from '@nestjs/common';
import { GuideService } from './guide.service';
import { CreateGuideDto } from './dto/create-guide.dto';

@Controller('guides')
export class GuideController {
  constructor(private readonly guideService: GuideService) {}

  @Post()
  create(@Body() createGuideDto: CreateGuideDto) {
    return this.guideService.create(createGuideDto);
  }

  @Get()
  findAll() {
    return this.guideService.findAll();
  }
}
