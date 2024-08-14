import { Button, Input, InputRef, Popconfirm, Space, Switch, Table, TableColumnsType, TableColumnType } from 'antd';
import moment from 'moment';
import { useEffect, useRef, useState } from 'react';
import { DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons';
import { FilterDropdownProps } from 'antd/es/table/interface';
import useUserQuery from '../../../../common/hooks/users/useUserQuery';
import { Iuser } from '../../../../common/interfaces/auth';
import useUserMutation from '../../../../common/hooks/users/useUserMutation';
import FormUser from './FormUser';
import Highlighter from 'react-highlight-words';
const ListUser = () => {
    const [user, setUser] = useState<Iuser|null>(null)
    const query = useUserQuery()
    const [users, setUsers] = useState([] as Iuser[])
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef<InputRef>(null);
    const mutation = useUserMutation()
    useEffect(() => {
        if (query.data) {
            const newUsers = query?.data?.map((user: Iuser) => {
                return {
                    key: user._id,
                    ...user
                }
            })
            setUsers(newUsers)
        }

    }, [query.data])
    const handleSearch = (
        selectedKeys: string[],
        confirm: FilterDropdownProps['confirm'],
        dataIndex: any,
        
    ) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
        
    };
    const handleReset = (clearFilters: () => void) => {
        clearFilters();
        setSearchText('');
    };
    const getColumnSearchProps = (dataIndex: any): TableColumnType<Iuser> => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            setSearchText((selectedKeys as string[])[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered: boolean) => (
            <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
        ),
        onFilter: (value, record:any) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes((value as string).toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });
    const handleStatusChange = async (dataUser:Iuser) => {
        const newStatus = !dataUser.status;
        const newUsers:Iuser = {
            ...dataUser,
            status: newStatus
        }
        mutation.mutate({ action: 'checked', user: newUsers })
        console.log(dataUser)
    };
    
    const columns: TableColumnsType<Iuser> = [
        {
            title: 'Name',
            dataIndex: 'lastname',
            key: 'lastname',
            ...getColumnSearchProps('lastname'),
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },

        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Ngày tạo',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (createdAt: Date) => moment(createdAt).format('DD/MM/YYYY'),
            sorter: (a:any, b:any) => {
                const dateA = new Date(a.createdAt);
                const dateB = new Date(b.createdAt);
                return dateA.getTime() - dateB.getTime();
              },
              sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Status',
            dataIndex:'status',
            key: 'status',
            render: (status: boolean,record:Iuser) => {
                return (
                    <p className={`flex gap-2 justify-between flex-shrink-0 ${status ? "text-green-500" : "text-rose-500"}`}>
                    {status ? "Hoạt động" : "Ngừng hoạt động"}
                    <Switch defaultValue={status}  onClick={() => handleStatusChange(record)} />
                </p>
                )
            },
            filters: [
                {
                  text: 'Hoạt động',
                  value: true,
                },
                {
                  text: 'Ngừng hoạt động',
                  value: false,
                },
              ],
              onFilter: (value, record:any) => record.status === value,

        }, {
            title: "Action",
            render: (user: Iuser) => (
                <div className='flex gap-2'>
                    <Popconfirm title="Xóa sản phẩm" description="Bạn có muốn xóa không?"
                        okText="Có"
                        cancelText="Không"
                        onConfirm={() => mutation.mutate({ action: 'delete', user: user })}
                    >
                        <Button type="primary" danger><DeleteOutlined /></Button>
                    </Popconfirm>
                    <Button type="primary" onClick={() => setUser(user)}>
                        <EditOutlined />
                    </Button>
                </div>
                // setOnForm(!onfrom), setOptionForm("update"), form.setFieldsValue({ ...user, date: moment() }), setId(user._id) }
            )
        }
    ];
    return (
        <div>
            <FormUser  data={user} setUser={setUser}/>
            <Table dataSource={users} columns={columns} />
        </div>
    )
}

export default ListUser