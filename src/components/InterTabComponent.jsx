import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import InterSchoolData from '../data/InterSchoolData'
import { useState } from 'react';
import TabCardComponent from './shared/TabCardComponent';

const InterTabComponent = () => {
    const [interSchoolData, setInterSchoolData] = useState(InterSchoolData)

    return (
        <Tabs>
            <TabList>
                <Tab>국제학교</Tab>
            </TabList>

            <TabPanel>
                <div className="tab-content-grid container">
                    {interSchoolData.map((school) => (
                        <TabCardComponent school={school} />
                    ))}
                </div>
            </TabPanel>
        </Tabs>
    )
}

export default InterTabComponent