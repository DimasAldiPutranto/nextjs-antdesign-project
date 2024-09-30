import { Table, Input } from 'antd';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('http://universities.hipolabs.com/search?country=indonesia')
      .then(response => {
        setData(response.data);
        setLoading(false);
      });
  }, []);

  const filteredData = data.filter(university => 
    university.name.toLowerCase().includes(search.toLowerCase())
  );

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Country', dataIndex: 'country', key: 'country' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <Input
        placeholder="Search by university name"
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ marginBottom: '20px', width: '300px' }}
      />
      <Table 
        columns={columns}
        dataSource={filteredData}
        rowKey="name"
        loading={loading}
      />
    </div>
  );
};

export default Dashboard;
