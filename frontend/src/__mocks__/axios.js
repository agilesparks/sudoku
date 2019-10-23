export default {
  get: jest.fn(() => Promise.resolve({ data: {} })),
  post: jest.fn(() => Promise.resolve({ data: {} }))
};


/*'use strict';
jest.mock('axios');
const axios = jest.genMockFromModule('axios');

// This is a custom function that our tests can use during setup to specify
// what the files on the "mock" filesystem should look like when any of the
// `fs` APIs are used.
let returnedData = {}

function __setReturnedData(data) {
 returnedData = data
}

// A custom version of `readdirSync` that reads from the special mocked out
// file list set via __setMockFiles
function get(url) {
  console.log("RRRRRRRRR")
  return jest.fn(() => Promise.resolve({ data: returnedData }));
}

axios.__setReturnedData = __setReturnedData;
axios.get = get;

module.exports = axios;*/

