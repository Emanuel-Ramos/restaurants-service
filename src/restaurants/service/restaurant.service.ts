import { Injectable, Inject } from '@nestjs/common';
import { Repository, UpdateResult } from 'typeorm';
import { UpdateRestaurantDto } from '../dto/restaurant.dto';
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
  async newRestaurant(body): Promise<Restaurant> {
    return this.restaurantRepository.save(body);
  }
  async deleteRestaurant(id): Promise<void> {
    this.restaurantRepository.delete(id);
  }
  async updateRestaurant(id, body): Promise<UpdateResult> {
    return this.restaurantRepository.update(id, body);
  }
}
