import React, { startTransition, Suspense } from "react";
import { Tabs } from "antd";

const Comments = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(require("./Comments"));
    }, 2000);
  });
});
const Photos = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(require("./Photos"));
    }, 2000);
  });
});

const UseTransition2 = () => {
  const [tab, setTab] = React.useState("photos");

  function handleTabSelect(tab: string) {
    setTab(tab);
  }
  function handleTabSelect2(tab: string) {
    startTransition(() => {
      setTab(tab);
    });
  }

  return (
    <div>
      <Tabs onChange={handleTabSelect}>
        <Tabs.TabPane tab="Tab 1" key="photos" />
        <Tabs.TabPane tab="Tab 2" key="comments" />
      </Tabs>
      <Tabs onChange={handleTabSelect2}>
        <Tabs.TabPane tab="Tab 1" key="photos" />
        <Tabs.TabPane tab="Tab 2" key="comments" />
      </Tabs>
      <Suspense fallback={<div>Loading...</div>}>
        {tab === "photos" ? <Photos /> : <Comments />}
      </Suspense>
    </div>
  );
};

export default UseTransition2;
