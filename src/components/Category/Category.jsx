
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Marvel from './marvel/Marvel';
import StarWars from './StarWars/StarWars';
import Dc from './DC/Dc';
import Avengers from './Avengers/Avengers';

const Category = () => {
  return (
    <div className=' mt-5'>
      <h1 className=' text-2xl font-bold text-center text-purple-700'> Select Toys From Different Category Tab</h1>
      <Tabs>
        <TabList className=' bg-purple-700 text-white text-center'>
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
        <TabPanel>
          <Dc></Dc>
        </TabPanel>

        <TabPanel>
          <Avengers></Avengers>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
