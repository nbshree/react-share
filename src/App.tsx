import React, {Suspense, useState, useTransition} from 'react';
import {Tabs} from 'antd';
import logo from './logo.svg';
import './App.css';
// const Test = React.lazy(() => import('./Test'));

const Test = React.lazy(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(require('./Test'));
        }, 2000);
    });
});
const Test2 = React.lazy(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(require('./Test2'));
        }, 2000);
    });
});

function App() {
    const [active, setActive] = useState('1')
    const [showActive, setShowActive] = useState('1')
    const [isPending, startTransition] = useTransition();


    return (
        <div className="App">

            <Tabs defaultActiveKey="1" activeKey={active} onChange={(v) => {
                setActive(v);
                startTransition(() => {
                    setShowActive(v);
                });
            }}>
                <Tabs.TabPane tab="Tab 1" key="1"/>
                <Tabs.TabPane tab="Tab 2" key="2"/>
                <Tabs.TabPane tab="Tab 3" key="3"/>
            </Tabs>
            {isPending &&<div>Loading111111...</div>}
            <Suspense fallback={<div>Loading...</div>}>
                {showActive === '1' ? <Test /> : <Test2 />}
            </Suspense>

        </div>
    );
}

export default App;
