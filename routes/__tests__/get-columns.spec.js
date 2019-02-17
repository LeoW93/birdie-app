/* global jest*/
import getColumns from '../get-columns';

test('Should export the correct method', () => {
  expect(getColumns.method).toBe('get');
});

test('Should export the correct endpoint', () => {
  expect(getColumns.endpoint).toBe('/get-columns');
});

describe('# handler', () => {
  test('Should call the db.getColumns method', async () => {
    let req = createRequest();
    await getColumns.handler(req);
    expect(req.services.db.getColumns).toHaveBeenCalledTimes(1);
  });

  describe.each`
    result
    ${null}
    ${undefined}
    ${[]}
  `('result from db query = $result', ({result}) => {
    test('Should return an empty array', async () => {
      let req = createRequest();
      req.services.db.getColumns.mockResolvedValue(result);
      let columns = await getColumns.handler(req);
      expect(columns).toEqual([]);
    })
  });

  test('Should map each result to the "Field" property', async () => {
    let req = createRequest();
    let result = [{Field: 'test-field'}, {}];
    req.services.db.getColumns.mockResolvedValue(result);
    let columns = await getColumns.handler(req);
    expect(columns).toEqual(['test-field', undefined]);
  })
  function createRequest() {
    return {
      services: {
        db: {
          getColumns: jest.fn()
        }
      }
    }
  }
})