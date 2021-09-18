import React, { useState, useEffect } from "react";
import { PROPS_PORTFOLIO } from "../types";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const PortfolioCard: React.FC<PROPS_PORTFOLIO> = ({
  title,
  description,
  github,
  image,
  user,
}) => {
  const classes = useStyles();
  const [shortcutedDescription, setShortcutedDescription] = useState("");
  const transitionGithub = (github: string) => {
    window.open(github, "_blank");
  };

  useEffect(() => {
    const shortcutDescription = () => {
      if (description.length >= 200) {
        setShortcutedDescription(description.slice(0, 200) + "...");
      }
    };
    shortcutDescription();
  }, [description]);

  return (
    <>
      <Card className={classes.card}>
        {image ? (
          <CardMedia
            className={classes.cardMedia}
            image={image}
            title="Portfolio Image"
          />
        ) : (
          <></>
        )}
        <CardContent className={classes.cardContent}>
          <Typography
            data-testid="portfolio_title"
            gutterBottom
            variant="h5"
            component="h2">
            {title}
          </Typography>
          <Typography data-testid="portfolio_description">
            {shortcutedDescription ? shortcutedDescription : ""}
          </Typography>
        </CardContent>
        <CardActions>
          <Button data-testid="portfolio_user" size="small" color="primary">
            {/* 投稿者ページへの遷移は後日実装 */}
            {user}
          </Button>
          <Button size="small" color="primary">
            {/* 詳細ページへの遷移は後日実装 */}
            View
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => transitionGithub(github)}>
            Github
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default PortfolioCard;
