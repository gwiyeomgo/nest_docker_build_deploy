
export type MockType<T> = {
  [P in keyof T]: jest.Mock<any, any>;
};


export const repositoryMockFactory: <T>() => MockType<{
  average: jest.Mock<any, any, any>;
  metadata: any;
  save: jest.Mock<any, any, any>;
  findOne: jest.Mock<any, any, any>;
  insert: jest.Mock<any, any, any>;
  update: jest.Mock<any, any, any>;
  increment: jest.Mock<any, any, any>;
  getId: jest.Mock<any, any, any>;
  sum: jest.Mock<any, any, any>;
  preload: jest.Mock<any, any, any>;
  delete: jest.Mock<any, any, any>;
  remove: jest.Mock<any, any, any>;
  countBy: jest.Mock<any, any, any>;
  findAndCount: jest.Mock<any, any, any>;
  find: jest.Mock<any, any, any>;
  merge: jest.Mock<any, any, any>;
  create: jest.Mock<any, any, any>;
  findOneOrFail: jest.Mock<any, any, any>;
  recover: jest.Mock<any, any, any>;
  findByIds: jest.Mock<any, any, any>;
  restore: jest.Mock<any, any, any>;
  manager: any;
  query: jest.Mock<any, any, any>;
  count: jest.Mock<any, any, any>;
  clear: jest.Mock<any, any, any>;
  upsert: jest.Mock<any, any, any>;
  existsBy: jest.Mock<any, any, any>;
  softRemove: jest.Mock<any, any, any>;
  target: any;
  hasId: jest.Mock<any, any, any>;
  softDelete: jest.Mock<any, any, any>;
  queryRunner: any;
  decrement: jest.Mock<any, any, any>;
  findBy: jest.Mock<any, any, any>;
  exists: jest.Mock<any, any, any>
}> = jest.fn(() =>({
  manager: jest.fn(),
  metadata: jest.fn(),
  queryRunner: jest.fn(),
  createQueryBuilder: jest.fn(),
  target: jest.fn(),
  hasId: jest.fn(),
  getId: jest.fn(),
  create: jest.fn(),
  merge: jest.fn(),
  preload: jest.fn(),
  save: jest.fn(),
  remove: jest.fn(),
  softRemove: jest.fn(),
  recover: jest.fn(),
  insert: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
  softDelete: jest.fn(),
  restore: jest.fn(),
  count: jest.fn(),
  find: jest.fn(),
  findAndCount: jest.fn(),
  findByIds: jest.fn(),
  findOne: jest.fn(),
  findOneOrFail: jest.fn(),
  findBy: jest.fn(),
  query: jest.fn(),
  clear: jest.fn(),
  increment: jest.fn(),
  decrement: jest.fn(),
  upsert: jest.fn(), // ✅ 추가됨
  sum: jest.fn(), // ✅ 추가됨
  average: jest.fn(), // ✅ 추가됨
  exists: jest.fn(), // ✅ 추가됨
  existsBy: jest.fn(), // ✅ 추가됨
  countBy: jest.fn(), // ✅ 추가됨
}));

