import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { useState } from 'react';
import PriUniData from '../data/PriUniData';
import PriUniTabCardComponent from './shared/PriUniTabCardComponent';
import NatUniData from '../data/NatUniData'
import NatUniTabCardComponent from './shared/NatUniTabCardComponent';

const UniversityTabComponent = () => {
    const [priUniData, setPriUniData] = useState(PriUniData)
    const [natUniData, setNatUniData] = useState(NatUniData)

    return (
        <Tabs>
            <TabList>
                <Tab>사립대학교</Tab>
                <Tab>국립대학교</Tab>
            </TabList>

            <TabPanel>
                <div className="tab-content-grid container">
                    {priUniData.map((school) => (
                        <PriUniTabCardComponent school={school} />
                    ))}
                </div>
            </TabPanel>
            <TabPanel>
                <div className="tab-content-grid container">
                    {natUniData.map((school) => (
                        <NatUniTabCardComponent school={school} />
                    ))}
                </div>
            </TabPanel>
        </Tabs>
    )
}

export default UniversityTabComponent