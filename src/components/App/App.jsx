import { Profile } from "components/Profile/Profile";
import { Container } from "./App.styled";
import { Statistics } from "components/Statistics/Statistics";
import user from "user";
import data from "data"

export const App = () => {
  return (
    <Container>
      <Profile
      key={user.id}
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
/>
<Statistics title="Upload stats" stats={data} />


    </Container>
  );
};
