import { RestaurantlistModule } from './restaurantlist.module';

describe('RestaurantlistModule', () => {
  let restaurantlistModule: RestaurantlistModule;

  beforeEach(() => {
    restaurantlistModule = new RestaurantlistModule();
  });

  it('should create an instance', () => {
    expect(restaurantlistModule).toBeTruthy();
  });
});
