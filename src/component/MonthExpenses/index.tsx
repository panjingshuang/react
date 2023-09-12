import React, { useState } from 'react';
import { Table, Space, Tag, DatePicker, Button, Input, Select } from 'antd';
import { connect } from 'react-redux';
import type { ColumnsType } from 'antd/es/table';
import locale from 'antd/es/date-picker/locale/zh_CN';
import 'dayjs/locale/zh-cn';
import { SearchOutlined } from '@ant-design/icons';
import {
  deleteItem,
  addItem,
  searchList,
  editIem
} from '../../store/monthExpenses/actions'
import {
  PAY_TYPE,
  AMOUNT_Type,
  PAY_TAG,
  PAY_TYPE_OBJ
} from '../../store/monthExpenses/reducer'
const { TextArea } = Input;

interface DataType {
  amount: string;
  consume: string;
  amountType: string;
  payType: string;
  detail: string;
  time: string,
  key: number
}


function MonthExpenses(props) {
  const [isEdit, setEditStatus] = useState(-1)
  const [formData, setFormData] = useState<DataType>()
  const onChange = () => {
  }
  const handleAdd = () => {
    props.addItem()
  }
  const handleEdit = (record) => {
    if(isEdit == record.key){ // 保存
      // 数据保存
      // 提交数据到store中
    }else{  // 变成编辑
      setFormData(record)
      setEditStatus(record.key)
    }
  }
  const handleFrom = (e,type)=>{
    const SELECT_LIST_TYPE = ['amountType','payType']
    let value 
    if(SELECT_LIST_TYPE.indexOf(type) > -1){
      value = e
    }else{
      value = e.target.value
    }
    formData[type] = value
    setFormData({...formData})
  }
  const columns: ColumnsType<DataType> = [
    {
      title: '消费名称',
      dataIndex: 'consume',
      key: 'consume',
      render: (_, record) => (
        <div>{isEdit == record.key ? <Input placeholder="请输入消费名称"  value={formData['consume']} onChange={(e)=>{handleFrom(e,'consume')}}/> : _}</div>
      ),
    },
    {
      title: '消费类型',
      dataIndex: 'amountType',
      key: 'amountType',
      render: (_, record) => (
        <div>{isEdit == record.key ? <Select
          value={formData['amountType']}
          style={{ width: 120 }}
          options={AMOUNT_Type}
          onChange={(e)=>{handleFrom(e,'amountType')}}
        /> : _}</div>
      ),
    },
    {
      title: '消费金额',
      dataIndex: 'amount',
      key: 'amount',
      render: (_, record) => (
        <div>{isEdit == record.key ? <Input placeholder="请输入消费金额" value={formData['amount']} onChange={(e)=>{handleFrom(e,'amount')}}/> : _}</div>
      ),
    },
    {
      title: '支付方式',
      dataIndex: 'payType',
      key: 'payType',
      render: (_, record) => (
        <div>{isEdit == record.key ? <Select
          value={formData['payType']}
          style={{ width: 120 }}
          onChange={(e)=>{handleFrom(e,'payType')}}
          options={PAY_TYPE}
        /> : <Tag color={PAY_TAG[_]}>{PAY_TYPE_OBJ[_]}</Tag>}</div>
      ),
    },
    {
      title: '详情',
      dataIndex: 'detail',
      key: 'detail',
      render: (_, record) => (
        <div>{isEdit == record.key ? <TextArea rows={2} value={formData['detail']} onChange={(e)=>{handleFrom(e,'detail')}}/> : _}</div>
      ),
    },
    {
      title: '修改时间',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type="dashed" onClick={() => { handleEdit(record) }}>{isEdit == record.key ? '保存' : '编辑' } </Button>
          <Button danger type="dashed" >删除</Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Space className='mb-5'>
        <DatePicker onChange={onChange} picker="month" locale={locale} />
        <Button type="dashed" icon={<SearchOutlined />}>
          Search
        </Button>
        <Button onClick={handleAdd}>新增消费</Button>
      </Space>
      <Table columns={columns} dataSource={props.data} />
    </>
  )
}

export default connect(function (state: any) {
  return { data: state.monthExpensesReducer }
}, { addItem })(MonthExpenses)