import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import Header from "./Header";
import PortfolioCard from "../portfolio/PortfolioCard";
import { selectPortfolios } from "../portfolio/portfolioCardSlice";
import { fetchAsyncGetPortfolios } from "../portfolio/portfolioCardSlice";
import { apiUrlPortfolios } from "../portfolio/portfolioCardSlice";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const Main: React.FC = () => {
  const classes = useStyles();
  const portfolios = useSelector(selectPortfolios);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const fetchBootLoader = async () => {
      await dispatch(fetchAsyncGetPortfolios());
    };
    fetchBootLoader();
  }, [dispatch]);

  return (
    <>
      <Header />
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {portfolios.map((portfolio) => (
            <Grid item key={portfolio.id} xs={12} md={6}>
              <PortfolioCard
                title={portfolio.title}
                description={portfolio.description}
                github={portfolio.github}
                image={
                  !portfolio.image
                    ? "https://source.unsplash.com/random"
                    : portfolio.image
                }
                user={portfolio.user}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Main;
