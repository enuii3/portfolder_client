import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { setupServer } from "msw/node";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import portfolioReducer from "../features/portfolio/portfolioCardSlice";
import Main from "../features/core/Main";

import { rest } from "msw";
import { apiUrlPortfolios } from "../features/portfolio/portfolioCardSlice";

const handlers = [
  rest.get(apiUrlPortfolios, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          title: "test-title1",
          description: "test-description1",
          image: "",
          github: "https://example.com",
          user: "test-user1",
        },
        {
          id: 2,
          title: "test-title2",
          description: "test-description2",
          image: "http://localhost:8000/media/portfolios/testTitle1179.png",
          github: "https://example.com",
          user: "test-user2",
        },
      ])
    );
  }),
];
const server = setupServer(...handlers);

beforeAll(() => {
  server.listen();
});
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
afterAll(() => {
  server.close();
});

describe("Main Component Test Cases", () => {
  let store: any;
  beforeEach(() => {
    store = configureStore({
      reducer: {
        portfolioCard: portfolioReducer,
      },
    });
  });
  it("1: Should render all the elements correctly", async () => {
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );
    expect(screen.queryByText("test-title1")).toBeNull();
    expect(screen.queryByText("test-title2")).toBeNull();
    expect(await screen.findByText("test-title1")).toBeInTheDocument();
    expect(await screen.findByText("test-title2")).toBeInTheDocument();
  });
});
