import axios, { AxiosInstance } from 'axios';
import { throttledGetDataFromApi } from './index';

jest.mock('axios');

describe('throttledGetDataFromApi', () => {
  // test('should create instance with provided base url', async () => {
  //   const axiosClient: AxiosInstance = {
  //     get: jest.fn().mockResolvedValue({ data: 'Response data' }),
  //   } as unknown as AxiosInstance;

  //   jest.spyOn(axios, 'create').mockReturnValue(axiosClient);

  //   await throttledGetDataFromApi('/posts');

  //   expect(axios.create).toHaveBeenCalledWith({
  //     baseURL: 'https://jsonplaceholder.typicode.com',
  //   });
  // });

  test('should perform request to correct provided url', async () => {
    const client: AxiosInstance = {
      get: jest.fn().mockResolvedValue({ data: 'Response data' }),
    } as unknown as AxiosInstance;

    jest.spyOn(axios, 'create').mockReturnValue(client);

    const req = await throttledGetDataFromApi('/posts');

    expect(client.get).toHaveBeenCalledWith('/posts');
    expect(req).toBe('Response data');
  });

  test('should return response data', async () => {
    const client: AxiosInstance = {
      get: jest.fn().mockResolvedValue({ data: 'Response data' }),
    } as unknown as AxiosInstance;

    jest.spyOn(axios, 'create').mockReturnValue(client);

    const req = await throttledGetDataFromApi('/posts');

    expect(req).toBe('Response data');
  });
});
