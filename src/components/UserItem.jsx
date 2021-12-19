import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const UserItem = ({ user }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="210"
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

export default UserItem;
