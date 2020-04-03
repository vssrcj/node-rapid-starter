import { swaggerClass, swaggerProperty } from 'koa-swagger-decorator';

@swaggerClass()
class BaseAuthor {
   @swaggerProperty({ type: 'string', example: 'Stephen King' })
   name: string;
}

export class NewAuthor extends BaseAuthor {
}

export class Author extends BaseAuthor {
   @swaggerProperty({ type: 'string', example: '5e86d2c4d9100a2048a31397' })
   id: string;
}
