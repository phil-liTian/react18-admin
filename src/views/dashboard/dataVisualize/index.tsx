import { Tabs } from 'antd'

const DataVisualize = () => {
  const items = [
    { label: "未来7日", key: '1' },
    { label: "近七日", key: '2' },
    { label: "近一月", key: '3' },
    { label: "近三月", key: '4' },
    { label: "近半年", key: '5' },
    { label: "近一年", key: '6' }
  ];
  return <div className="dataVisualize-box">
    <div className="card top-box">
      <div className="top-title">数据可视化</div>
      <Tabs items={items} />
    </div>
  </div>
}

export default DataVisualize
