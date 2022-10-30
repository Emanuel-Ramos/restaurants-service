import { Controller, Get, Param } from '@nestjs/common';
import { Restaurant } from './restaurant.entity';
import { RestaurantService } from '../service/restaurants.service';

@Controller('restaurants')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Get('lista')
  async lista(): Promise<Restaurant[]> {
    return this.restaurantService.findAll();
  }
}
