import React ,{useState} from 'react'


export default  function useGetData(value){

// Declaración de una variable de estado que llamaremos "value"
 const [value,SetValue] = useState(0);


return value;
} 