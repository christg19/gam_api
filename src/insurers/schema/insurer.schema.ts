import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type InsurerDocument = Insurer & Document;

@Schema({ timestamps: true })
export class Insurer {
    @Prop()
    name: string;

    @Prop()
    description?: string;

    @Prop()
    logo: string;
}

export const InsurerSchema = SchemaFactory.createForClass(Insurer);