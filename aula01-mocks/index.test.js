const { error } = require('./src/constants');
const File = require('./src/file');
const { rejects, deepStrictEqual } = require('assert');

(async () => {
  {
    const filePath = './mocks/emptyFile-invalid.csv';
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    const result = File.csvToJson(filePath);

    const testResult = await rejects(result, rejection) ? 'test fail' : 'test done';

    console.log('emptyFile-invalid:', testResult);

  }
  {
    const filePath = './mocks/fourItems-invalid.csv';
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    const result = File.csvToJson(filePath);

    const testResult = await rejects(result, rejection) ? 'test fail' : 'test done';

    console.log('fourItems-invalid:', testResult);
  }
  {
    const filePath = './mocks/threeItems-valid.csv';
    const result = await File.csvToJson(filePath);
    const expected = [
      {
        "id": 123,
        "name": "Felipe Fernandes",
        "profession": "Javascript Student",
        "birthDay": 2000
      },
      {
        "id": 321,
        "name": "Lucas Simao",
        "profession": "Javascript Developer",
        "birthDay": 1998
      },
      {
        "id": 231,
        "name": "Yuri Barros",
        "profession": "Developer and QA",
        "birthDay": 1997
      }
    ]

    const testResult =
      deepStrictEqual(JSON.stringify(result), JSON.stringify(expected))
        ? 'test fail' : 'test done';

    console.log('threeItems-valid:', testResult);

  }
})();
