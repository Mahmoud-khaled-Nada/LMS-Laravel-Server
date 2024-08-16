import { FC, ReactNode} from 'react'
interface Props {
    children: ReactNode;
}
const MainHeader:FC<Props> = ({children}) => {
  return (
    <div className=" bg-[url('/images/bg-line-about.png')] bg-no-repeat bg-center bg-Primary  ">
            <div className='bg-[#000927c7] '>
            {children}
            </div>
            
    </div>
  )
}

export default MainHeader