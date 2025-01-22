import { Test, TestingModule } from '@nestjs/testing';
import { DbconnectService } from './dbconnect.service';

describe('DbconnectService', () => {
  let service: DbconnectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbconnectService],
    }).compile();

    service = module.get<DbconnectService>(DbconnectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
