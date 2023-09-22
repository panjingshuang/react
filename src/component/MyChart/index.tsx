import React from 'react'
import { useRequest } from 'ahooks';

import  { getInfo } from '../../api/test'

export default ()=>{
  const { loading, run ,data} = useRequest(getInfo,{
    manual: true,
    onSuccess:(result, params)=>{
      if(result.success){
        console.log(params,result)
      }
    }
  });
  if(loading){
    return <div>loading</div>
  }
  return (
   <>
    <div>{data ? data.title : ''}</div>
    <div><button onClick={()=>{run()}}>点击触发返回数据</button></div>
   </>
  )
}


