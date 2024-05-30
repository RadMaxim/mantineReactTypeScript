import { Flex, Pagination } from '@mantine/core';
import { usePagination } from '@mantine/hooks';
interface MovieData {
  ids:number,
  title: string;
  date: string;
  vote_average: number;
  img: string;
}

const Demo=(props:{travelers:MovieData[]})=> {
const paginator = usePagination({
  total:3,
  initialPage:1,
  onChange(page) {
    console.log(page)
  },
})

  return <Flex mt="24px" mb="82px" justify="flex-end">
    <Pagination 
    total={3} 
    radius="xs" />
    {/* <div className="paginations_btns">

    </div> */}
    </Flex>;
}
export default Demo;