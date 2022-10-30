import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Restaurant } from '../restaurant/restaurant.entity';

@Injectable()
export class RestaurantService {
  constructor(
    @Inject('RESTAURANT_REPOSITORY')
    private restaurantRepository: Repository<Restaurant>,
  ) {}

  async findAll(): Promise<Restaurant[]> {
    return this.restaurantRepository.find();
  }
}
