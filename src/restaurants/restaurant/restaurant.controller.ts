import { Restaurant } from './restaurant.entity';
import { RestaurantService } from '../service/restaurant.service';
import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import {
  CreateRestaurantDto,
  ListAllEntities,
  UpdateRestaurantDto,
} from '../dto/restaurant.dto';

@Controller('restaurant')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Post('newRestaurant')
  create(@Body() createRestaurantDto: CreateRestaurantDto) {
    return this.restaurantService.newRestaurant(createRestaurantDto);
  }
  @Get('lista')
  async lista(): Promise<Restaurant[]> {
    return this.restaurantService.findAll();
  }

  @Get()
  findAll(@Query() query: ListAllEntities) {
    return `This action returns all cats (limit: ${query.limit} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateRestaurantDto: UpdateRestaurantDto,
  ) {
    return this.restaurantService.updateRestaurant(id, updateRestaurantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.restaurantService.deleteRestaurant(id);
  }
}
