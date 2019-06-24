import './index.less';
import React, { useState, useEffect,Fragment,SFC }  from 'react'
import { Table } from 'antd'
import { connect } from 'dva'

interface TestPage {
  admittanceBody: string | object | undefined
}

interface Props {
  arr?: Array<any>
  admittanceBody?:string | object | undefined
  dispatch?:any
}

declare interface IRooyState {  //全局情况下这个可以定义个总的
  testPage?:TestPage
}

//val is type
const MY_NAME = 'MY_NAME';
const MY_SEX = 'MY_SEX';

type MY_NAME = typeof MY_NAME;
type MY_SEX = typeof MY_SEX;

type EnthusiasmAction = MY_NAME | MY_SEX;

interface IncrementEnthusiasm {
  type: EnthusiasmAction;
}

function incrementEnthusiasm(): IncrementEnthusiasm {
  return {
      type: MY_NAME
  };
}

// @connect(({ admittanceBody }) => ({ admittanceBody })) //不需要显示定义，但是不能用于函数
const testPage:SFC<Props>=(props:Props)=> {
  const {admittanceBody,dispatch} =props
  const [tableData, setTableData] = useState<any[]>([])
  const [count, setCount] = useState<number>(0)
  const [loading,setLoading] = useState<boolean>(true)



  useEffect(() => {  
    // dispatch({ type: 'testPage/importAssetLoading', payload: 'duuliy666' })
    console.log(props)
    const tableData:Array<object>=[
      {
        id:'01',
        name:'duuliy1'
      },
      {
        id:'02',
        name:'duuliy2'
      }
    ]
    thatMap(tableData,55)
    setTableData(tableData)
    setCount(tableData.length)
    setLoading(false)
  },[])

  const thatMap=(arr:Array<object>,num:number)=>{
    for(let i = 0 ; i<num; i++){
      let obj:{}={
        id:`${i+3}`,
        name:`${'duuliy'+num}`
      }
      arr.push(obj)
    }
    return arr
  }

  const btnOnclick=()=>{
    dispatch({ type: 'testPage/importAssetLoading', payload: 'duuliy666' })
  }

  const pageChange=()=>{

  }

  const columns:Array<object> = [
    {
      title: 'ID',
      dataIndex: 'id'
    },
    {
      title: '姓名',
      dataIndex: 'name'
    }
  ]
 
  return ( //执行顺序问题  只能放在最后
    <Fragment>
      <div>
        姓名:
        <span>
          {incrementEnthusiasm().type}
        </span>
        <br/>
        <button onClick={btnOnclick}>
          点击触发
        </button>
        <br/>
        <span>
          {admittanceBody }
        </span>
      </div>
      <Table
        bordered={false}
        rowKey={(r, i) => (i + '')}
        columns={columns}
        loading={loading}
        dataSource={tableData.length ? tableData : []}
        style={{ margin: '100px 0 0 100px',width:800 }}
        pagination={{
          showQuickJumper: true,
          showSizeChanger: true,
          pageSizeOptions: ['10', '20', '30', '40'],
          onShowSizeChange: pageChange,
          showTotal: () => `共 ${count} 条数据`,
          total: count || 0,
          onChange: pageChange
        }}
      />
    </Fragment>
  )
}

export default connect(({ testPage={} as TestPage }:IRooyState) => ({
  admittanceBody:testPage["admittanceBody"]
}))(testPage)