import { AddnewrestaurantModuleModule } from './addnewrestaurant-module.module';

describe('AddnewrestaurantModuleModule', () => {
  let addnewrestaurantModuleModule: AddnewrestaurantModuleModule;

  beforeEach(() => {
    addnewrestaurantModuleModule = new AddnewrestaurantModuleModule();
  });

  it('should create an instance', () => {
    expect(addnewrestaurantModuleModule).toBeTruthy();
  });
});
