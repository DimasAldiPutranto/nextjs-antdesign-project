import { useEffect, useState } from 'react';
import { Table, Input, Button } from 'antd';

const Main = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filteredData, setFilteredData] = useState([]);
    const [country, setCountry] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        fetch ('http://universities.hipolabs.com/search?country=indonesia&name=universitas')
        .then((response) => response.json())
        .then((data) => {
            setData(data);
            setFilteredData(data);
            setLoading(false);
        });
    }, []);

    const handleFilter = () => {
        const filtered = data.filter(item => 
          item.country.toLowerCase().includes(country.toLowerCase()) &&
          item.name.toLowerCase().includes(name.toLowerCase())
        );
        setFilteredData(filtered);
      };

        const columns = [
            {
                title : 'Name',
                dataIndex : 'name',
                key : 'name',
            },
            {
                title : 'Country',
                dataIndex : 'country',
                key : 'country',
            }
        ];

        return (
            <div>
                <Input placeholder = "Filter by Country"
                value = {country}
                onChange={(e) => setCountry(e.target.value)}
                style={{marginBottom : '10px', width : '200px'}}
                />
                <Input placeholder = "Filter by Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ marginBottom : '10px', width : '200ps' }}
                />
                <Button type ="primary" onClick ={handleFilter}>
                    Filter
                    </Button>

                <Table columns={columns} data 
            </div>
        )
    }
    
}