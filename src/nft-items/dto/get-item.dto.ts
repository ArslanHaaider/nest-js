// requestGetItem.dto.ts

import { ApiProperty } from '@nestjs/swagger';

export class RequestGetItemDto {
    @ApiProperty()
    title: string;
}
