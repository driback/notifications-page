import { useEffect, useState } from "react";
import HeaderNotification from "./Header/index";
import MainNotification from "./Main/index";
import { getData } from "../data";

function App() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    setDatas(() => getData());
  }, []);

  useEffect(() => {
    countRead();
  }, [datas]);

  const readAll = () => {
    setDatas((datas) => datas.map((data) => ({ ...data, unread: false })));
  };

  const countRead = () => {
    return datas.filter((data) => data.unread).length;
  };

  return (
    <div className="App">
      <HeaderNotification markAllRead={readAll} count={countRead()} />
      <MainNotification gettingData={datas} />
    </div>
  );
}

export default App;
