interface IListType{
  value: string,
  label: string
}

export function changeListToObject(list:IListType[]){
  let object = {}
  list.forEach(item =>{
    object[item.value] = item.label
  } )
  return object
}
