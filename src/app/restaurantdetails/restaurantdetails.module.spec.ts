import { RestaurantdetailsModule } from './restaurantdetails.module';

describe('RestaurantdetailsModule', () => {
  let restaurantdetailsModule: RestaurantdetailsModule;

  beforeEach(() => {
    restaurantdetailsModule = new RestaurantdetailsModule();
  });

  it('should create an instance', () => {
    expect(restaurantdetailsModule).toBeTruthy();
  });
});
