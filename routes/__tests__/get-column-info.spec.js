import getColumnInfo from '../get-column-info';

test('Should export the correct method', () => {
  expect(getColumnInfo.method).toBe('post');
});

test('Should export the correct endpoint', () => {
  expect(getColumnInfo.endpoint).toBe('/get-column-info');
});

describe('# handler', () => {
  test('Should call the db.getColumnInfo method', async () => {
    let req = createRequest();
    await getColumnInfo.handler(req);
    expect(req.services.db.getColumnInfo).toHaveBeenCalledTimes(1);
    expect(req.services.db.getColumnInfo).toHaveBeenCalledWith(req.body.column);
  });

  test('Should throw an error if no column is provided in the body', async () => {
    let req = createRequest({column: undefined});
    let e;
    try {
      await getColumnInfo.handler(req);
    } catch (error) {
      e = error;
    }
    expect(e.message).toBe('Column name not provided');
  })

  test('Should throw an error if there is no information returned for the specified column', async () => {
    let req = createRequest();
    req.services.db.getColumnInfo.mockResolvedValue(null);
    let e;
    try {
      await getColumnInfo.handler(req);
    } catch (error) {
      e = error;
    }
    expect(e.message).toBe('Column not found');
  })

  test('Should return the results from the db call', async () => {
    let req = createRequest();
    req.services.db.getColumnInfo.mockResolvedValue([{foo: 'bar'}]);
    let result = await getColumnInfo.handler(req);
    expect(result).toEqual([{foo: 'bar'}])
  })

  function createRequest(body = {}) {
    return {
      body: {column: 'test-column', ...body},
      services: {
        db: {
          getColumnInfo: jest.fn().mockResolvedValue([])
        }
      }
    }
  }
})