import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { RestaurantController } from './restaurant/restaurant.controller';
import { restaurantProviders } from './restaurant/restaurant.provider';
import { RestaurantService } from './service/restaurants.service';

@Module({
  imports: [DatabaseModule],
  controllers: [RestaurantController],
  providers: [...restaurantProviders, RestaurantService],
})
export class RestaurantsModule {}
