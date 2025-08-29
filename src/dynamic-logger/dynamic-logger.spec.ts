import { Test, TestingModule } from '@nestjs/testing';
import { DynamicLogger } from './dynamic-logger';

describe('DynamicLogger', () => {
  let provider: DynamicLogger;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DynamicLogger],
    }).compile();

    provider = module.get<DynamicLogger>(DynamicLogger);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
