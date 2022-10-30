import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantModule } from './restaurants/restaurant.module';

@Module({
  imports: [RestaurantModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
