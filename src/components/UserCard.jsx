import { useContext } from "react";
import { Link as RouteLink } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography
} from "@mui/material";
import AppContext from "../context/AppContext";

const UserCard = ({ user }) => {
  const { setUserData } = useContext(AppContext);

  return (
    <Card>
      <CardActionArea
        component={RouteLink}
        to={`/user/${user.login}`}
        onClick={() => setUserData(user)}>
        <CardMedia
          component="img"
          height="300"
          image={user.avatar_url}
          alt={`User ${user.login}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {user.login}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default UserCard;
