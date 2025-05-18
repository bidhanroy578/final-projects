import { useState } from "react";
import ItemCard from "../../../components/card_styles/ItemCard";
import useMenu from "../../../hooks/useMenu";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const TabSection = () => {

    const [tabIndex, setTabIndex] = useState(0);

    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');

    return (
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList>
                <Tab>Salad</Tab>
                <Tab>Pizza</Tab>
                <Tab>Soups</Tab>
                <Tab>Desserts</Tab>
                <Tab>Offered</Tab>
            </TabList>

            <TabPanel>
                <ItemCard items={salad} />
            </TabPanel>
            <TabPanel>
                <ItemCard items={pizza} />
            </TabPanel>
            <TabPanel>
                <ItemCard items={soup} />
            </TabPanel>
            <TabPanel>
                <ItemCard items={dessert} />
            </TabPanel>
            <TabPanel>
                <ItemCard items={offered} />
            </TabPanel>
        </Tabs>
    );
};

export default TabSection;