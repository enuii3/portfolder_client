import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { setupServer } from "msw/node";
import Header from "../features/core/Header";

const server = setupServer();

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

describe("Header Component Test Cases", () => {
  it("1: Should render all the elements correctly", async () => {
    render(<Header />);
    expect(screen.getByRole("heading")).toBeTruthy();
    expect(screen.getByText("PortFolder")).toBeInTheDocument();
  });
});
