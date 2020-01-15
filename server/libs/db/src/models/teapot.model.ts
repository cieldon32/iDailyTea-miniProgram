import { prop, modelOptions } from '@typegoose/typegoose';
import { ApiProperty, ApiPropertyOptions } from '@nestjs/swagger';

@modelOptions({
    schemaOptions: {
        timestamps: true
    }
})
export class User {
    @ApiProperty({
        
    })
    @prop()
    material: string

    @prop()
    name: string

    @prop()
    author: string

    @prop()
    pic: string

    @prop()
    desc: string

    @prop()
    context: string
}