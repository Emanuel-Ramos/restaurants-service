export class CreateRestaurantDto {
  name: string;
  description: string;
  rating: number;
  visited: boolean;
}
export class ListAllEntities {
  restaurants: CreateRestaurantDto[];
  limit: 100;
}
export class UpdateRestaurantDto {
  id: number;
  name?: string;
  description?: string;
  rating?: number;
  visited?: boolean;
}
