import SqlServer from '../SqlServer';

jest.mock('mysql', () => ({
  createConnection: jest.fn().mockReturnValue({query: jest.fn(), end: jest.fn()})
}));

test('Should set properties on the instance according to the config provided', () => {
  let cfg = createConfig();
  let server = new SqlServer(cfg);
  expect(server.table).toBe('census_learn_sql');
  expect(server.config).toEqual({
    user: cfg.user,
    password: cfg.password,
    host: cfg.host,
    port: cfg.port,
    database: cfg.name
  })
});

function createConfig() {
  return {
    host: 'birdie-test.cyosireearno.eu-west-2.rds.amazonaws.com',
    port: 3306,
    user: 'test-read',
    password: 'xnxPp6QfZbCYkY8',
    name: 'birdietest',
    table: 'census_learn_sql'
  }
}