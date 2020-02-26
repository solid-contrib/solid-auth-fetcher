import { IFetcher } from "../Fetcher";
import { Response } from "cross-fetch";

export const FetcherMockResponse: Response = new Response(
  JSON.stringify({ arbitrary: "response" })
);

export const FetcherMock: jest.Mocked<IFetcher> = {
  fetch: jest.fn(async (_url, _init) => FetcherMockResponse)
};