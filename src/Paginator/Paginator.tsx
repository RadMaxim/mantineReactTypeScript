import { useEffect, useState } from 'react';
import { Pagination, SimpleGrid } from '@mantine/core';
import {Film} from '../Interface/Interface';
import Cards from '../Card/Card';


function chunk<Film>(array: Film[], size: number): Film[][] {
  if (!array.length) {// базовый случай 
    return [];
  }
  const head = array.slice(0, size);// c 0 по 6 фильм обрезаем 
  const tail = array.slice(size);// с 6 до конца 
  return [head, ...chunk(tail, size)];// рекурсивный случай 
}


const Paginator = (props:{collectionCards:Film[]})=> {
  const {collectionCards} = props;
  const [activePage, setPage] = useState(1);

  const data = chunk(Array.from(collectionCards),6);
 
  
 



  return (
    <>
     
    <SimpleGrid style={{marginTop:"24px"}}  cols={{ base: 1, sm: 2 }}>
      {
      data.length!=0?Array.from(data[activePage - 1])
      .map((film) => {
        return (
         <Cards film={film} />
      )  
      }):""}</SimpleGrid>
      
      <Pagination total={data.length} value={activePage} onChange={setPage} mt="sm" />
    </>
  );
}
export default Paginator;
