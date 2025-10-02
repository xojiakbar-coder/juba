import { Team } from '../sections/Team';
import { Case } from '../sections/Case';
import { About } from '../sections/About';
import { Clients } from '../sections/Clients';
import { Services } from '../sections/Services';
import { Home as HomePage } from '../sections/Home';

import Send from '@/pages/Send/Send';
import Contact from '@/pages/Contact/Contact';

// styles
import styles from './View.module.scss';

const Home = () => {
  const sections = [
    {
      id: 1,
      element: HomePage
    },
    {
      id: 2,
      element: Services
    },
    {
      id: 3,
      element: Case
    },
    {
      id: 4,
      element: About
    },
    {
      id: 5,
      element: Clients
    },
    {
      id: 6,
      element: Team
    },
    {
      id: 7,
      element: Contact
    },
    {
      id: 8,
      element: Send
    }
  ];

  return (
    <div className={styles.container}>
      {sections.map(({ id, element: Element }) => (
        <div key={id}>
          <Element />
        </div>
      ))}
    </div>
  );
};

export default Home;
