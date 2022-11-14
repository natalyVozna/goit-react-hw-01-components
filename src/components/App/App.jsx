import user from '../../user.json';
import data from '../../data.json';
import friends from '../../friends.json';
import transactions from '../../transactions.json';
import { Profile } from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import { Container } from './App.styled';
import { HiChevronDoubleDown } from 'react-icons/hi';
import { Box } from 'components/Box';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Box
        bg="primaryBg"
        color="praimeryText"
        pt={4}
        width="50%"
        display="flex"
        alignItems="center"
        backgroundImage="url('/image/dog.png')"
        backgroundPosition="center"
        border="normal"
        borderColor="accent"
        position="relative"
        as="main" //render teg : replace <div> on <main>
      >
        <Box display="flex" alignItems="center" mt={5} as="section">
          some content
        </Box>
        <Statistics title="Upload stats" stats={data} />
      </Box>

      <FriendList friends={friends} icon={HiChevronDoubleDown} />

      <TransactionHistory items={transactions} />
    </Container>
  );
};
