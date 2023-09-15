import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import InterSchoolData from '../data/InterSchoolData'
import PriUniData from '../data/PriUniData';
import { useState } from 'react';
import TabCardComponent from './shared/TabCardComponent';
import PriUniTabCardComponent from './shared/PriUniTabCardComponent';

const TabsComponent = () => {
    const [interSchoolData, setInterSchoolData] = useState(InterSchoolData)
    const [priUniData, setPriUniData] = useState(PriUniData)

    return (
        <Tabs>
            <TabList>
                <Tab>국제학교</Tab>
                <Tab>대학교</Tab>
            </TabList>

            <TabPanel>
                <div className="tab-content-grid container">
                    {interSchoolData.filter((item, idx) => idx < 8).map((school) => (
                        <TabCardComponent school={school} />
                    ))}
                </div>
            </TabPanel>
            <TabPanel>
                <div className="tab-content-grid container">
                    {priUniData.filter((item, idx) => idx < 8).map((school) => (
                        <PriUniTabCardComponent school={school} />
                    ))}
                </div>
            </TabPanel>
        </Tabs>
    )
}

export default TabsComponent