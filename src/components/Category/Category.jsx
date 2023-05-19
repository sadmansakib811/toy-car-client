
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Marvel from './marvel/Marvel';
import StarWars from './StarWars/StarWars';
const Category = () => {
  return (
    <div>
      <Tabs>
        <TabList className=' bg-secondary'>
          <Tab>Marvel Toys</Tab>
          <Tab>Star Wars</Tab>
          <Tab>DC Toys</Tab>
          <Tab>Avengers</Tab>
        </TabList>

        <TabPanel>
          <Marvel></Marvel>
        </TabPanel>
        <TabPanel>
          <StarWars></StarWars>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
