import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { SeedModule } from './seed/seed.module';
import { UsersModule } from './users/users.module';
import { ItemsModule } from './items/items.module';
import { CategoriesModule } from './categories/categories.module';
import { SwapsModule } from './swaps/swaps.module';
import { ReviewsModule } from './reviews/reviews.module';
import { NotificationsModule } from './notifications/notifications.module';
import { UploadsModule } from './uploads/uploads.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import validationSchema from './config/validation';

@Module({
  imports: [
      ConfigModule.forRoot({
        isGlobal: true,
        load: [configuration],
        envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
        validationSchema
      }),
      PrismaModule,
      AuthModule,
      SeedModule,
      UsersModule,
      ItemsModule,
      CategoriesModule,
      SwapsModule,
      ReviewsModule,
      NotificationsModule,
      UploadsModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
