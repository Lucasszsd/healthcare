import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Guide extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;
}

export const GuideSchema = SchemaFactory.createForClass(Guide);
