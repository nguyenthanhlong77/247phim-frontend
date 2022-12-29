import React from 'react';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import MUIDataTable from 'mui-datatables';
import adminApi from '../../api/adminApi';
import { useDispatch, useSelector } from 'react-redux';
import { adminActions } from '../../redux-toolkit/slice/admin';

function UserList(props) {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const userList = useSelector((state) => state.admin.userList);

  useEffect(() => {
    console.log(123);
    dispatch(adminActions.fetchUserList());
    dispatch(adminActions.fetchSlideList());
  }, []);

  useEffect(() => {
    let newData = [];
    if (!userList === false)
      userList.map((user) =>
        newData.push([
          user.username,
          user.gender,
          user.role,
          user.email,
          new Date(user.createdAt).toLocaleString('en-GB', { hour12: false }),
          user,
        ])
      );
    setData(newData);
  }, [userList]);

  const columns = [
    'Tài khoản',
    'Giới tính',
    'Quyền',
    'Email',
    'Ngày tạo',
    {
      name: 'Chỉnh sửa',
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => (
          <>
            {/* <Button variant="warning" className="button-edit">
              {' '}
              Chỉnh sửa
            </Button> */}
            <Button
              onClick={() => {
                handleRemoveUser(value);
              }}
              variant="danger"
              className="button-edit"
            >
              Xóa
            </Button>
          </>
        ),
      },
    },
  ];

  const options = {
    selectableRows: 'none',
    download: false,
    print: false,
    fullWidth: true,
    tableBodyHeight: '84vh',
  };

  const handleRemoveUser = async (user) => {
    // if (window.confirm(`Bạn chắc chắn muốn xóa người dùng: ${user.username}`) === true) {
    //   const res = await adminApi.removeUser(user._id);
    // }
  };

  return (
    <div style={{}}>
      <MUIDataTable title={'Danh sách tài khoản'} data={data} columns={columns} options={options} />
    </div>
  );
}

export default UserList;
