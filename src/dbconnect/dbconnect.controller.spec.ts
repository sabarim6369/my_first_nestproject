import { Test, TestingModule } from '@nestjs/testing';
import { DbconnectController } from './dbconnect.controller';

describe('DbconnectController', () => {
  let controller: DbconnectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DbconnectController],
    }).compile();

    controller = module.get<DbconnectController>(DbconnectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
