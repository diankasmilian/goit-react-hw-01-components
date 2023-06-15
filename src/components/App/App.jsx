import { Profile } from "components/Profile/Profile";
import { Container } from "./App.styled";
import user from "user";

export const App = () => {
  return (
    <Container>
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
    </Container>
  );
};
