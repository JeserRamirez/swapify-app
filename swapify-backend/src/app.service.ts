import { Injectable } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {

  // constructor(private config: ConfigService) {
  //   console.log(`current environment ${this.config.get<string>('NODE_ENV')}`)
  //   console.log(`current port ${this.config.get<number>('PORT')}`)
  //   console.log(`current url ${this.config.get<string>('DATABASE_URL')}`)
  // }

  getHello(): string {
    return 'Hello World!';
  }
}
