import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { setupServer } from "msw/node";
import PortfolioCard from "../features/portfolio/PortfolioCard";
import { PROPS_PORTFOLIO } from "../features/types";

const server = setupServer();

beforeAll(() => {
  server.listen();
});
afterEach(() => {
  cleanup();
});
afterAll(() => {
  server.close();
});

describe("PortfolioCard Component Test Cases", () => {
  let portfolio: PROPS_PORTFOLIO;
  let long_description: string =
    "Toward brother success suffer stock serve method. Nation lawyer similar room raise. College kitchen TV human raise practice listen consider. Mission age local reach.Page street then continue goal huge. Series whom build enter a. Cut design vote generation practice but.Recent guy ask morning purpose animal. Home film fast Mr help. Thank there town goal fact. Only PM prove Republican lawyer central";

  beforeEach(() => {
    portfolio = {
      title: "test-title1",
      description: long_description,
      image: "",
      github: "https://example.com",
      user: "test-user1",
    };
  });

  it("1: Should render all the elements correctly", async () => {
    render(
      <PortfolioCard
        title={portfolio.title}
        description={portfolio.description}
        image={portfolio.image}
        github={portfolio.github}
        user={portfolio.user}
      />
    );
    expect(screen.getAllByRole("heading").length).toBe(1);
    expect(screen.getAllByRole("heading")).toBeTruthy();
    expect(screen.getByText("test-title1")).toBeInTheDocument();
    expect(screen.getAllByRole("button").length).toBe(3);
    expect(screen.getAllByRole("button")[0]).toBeTruthy();
    expect(screen.getAllByRole("button")[1]).toBeTruthy();
    expect(screen.getAllByRole("button")[2]).toBeTruthy();
    expect(screen.getByTestId("portfolio_title")).toBeTruthy();
    expect(screen.getByTestId("portfolio_description")).toBeTruthy();
    expect(screen.getByTestId("portfolio_user")).toBeTruthy();
    expect(screen.getByText("View")).toBeInTheDocument();
    expect(screen.getByText("Github")).toBeInTheDocument();
  });
  it("2: Should render parameter of portfolio from Main Component with shortcuted_description", async () => {
    render(
      <PortfolioCard
        title={portfolio.title}
        description={portfolio.description}
        image={portfolio.image}
        github={portfolio.github}
        user={portfolio.user}
      />
    );
    let shortcuted_description: string =
      "Toward brother success suffer stock serve method. Nation lawyer similar room raise. College kitchen TV human raise practice listen consider. Mission age local reach.Page street then continue goal huge...";
    let regep_shortcuted_description = new RegExp(shortcuted_description);

    expect(screen.getByText("test-title1")).toBeInTheDocument();
    expect(screen.getByText("test-user1")).toBeInTheDocument();
    expect(screen.getByText("View")).toBeInTheDocument();
    expect(screen.getByText("Github")).toBeInTheDocument();
    expect(screen.getByTestId("portfolio_title")).toHaveTextContent(
      /^test-title1$/
    );
    expect(screen.getByTestId("portfolio_description")).toHaveTextContent(
      regep_shortcuted_description
    );
    expect(screen.getByTestId("portfolio_user")).toHaveTextContent(
      /^test-user1$/
    );
  });
  it("3: Should render parameter of portfolio from Main Component with short_description", async () => {
    let short_description: string = "A string of 100 characters";
    let regep_short_description = new RegExp(short_description);

    render(
      <PortfolioCard
        title={portfolio.title}
        description={short_description}
        image={portfolio.image}
        github={portfolio.github}
        user={portfolio.user}
      />
    );
    expect(screen.getByText("test-title1")).toBeInTheDocument();
    expect(screen.getByText("test-user1")).toBeInTheDocument();
    expect(screen.getByText("View")).toBeInTheDocument();
    expect(screen.getByText("Github")).toBeInTheDocument();
    expect(screen.getByTestId("portfolio_title")).toHaveTextContent(
      /^test-title1$/
    );
    expect(screen.getByTestId("portfolio_description")).toHaveTextContent(
      regep_short_description
    );
    expect(screen.getByTestId("portfolio_user")).toHaveTextContent(
      /^test-user1$/
    );
  });
});
