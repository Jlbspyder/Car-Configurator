import { useState} from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { suvModels } from '../../data'
import { MdEdit } from "react-icons/md";
import './summary.css'

const Summary = ({spec}) => {
    const {state} = useLocation()
    const { spe, price, col } = state || {}
    const cars = suvModels.flatMap((model) => model.specs);
    // const spec = cars.find((spec) => spec.id === parseInt(id))


    console.log(price)
    const car = Object.entries(spec.colors);
      const [selectedCar, setSelectedCar] = useState(car[0][1][7]);

      const color = Object.keys(spec.colors);
      const [selectedColor, setSelectedColor] = useState(color[0]);

const buildTotal = () => {
    let delivery = 1445
    let buildTotal;
   return buildTotal = delivery + spec.price  
}

// console.log('spec:', spec)
// console.log('color:', col)


  return (
    <div className='summary text-white'>
      <div className="h-full">
          <div>
            <h1 className='text-3xl text-center'>{spec.model}</h1>
            <h1 className='text-center text-2xl'>{spec.name}</h1>
          </div>
            <img src={selectedCar} alt={spec.name} />
          <div className='md:hidden flex flex-col items-center gap-4'>
            <button className='bg-white text-black px-30 py-3 cursor-pointer font-semibold'>View Inventory</button>
            <button className='border px-28 py-3 cursor-pointer font-semibold'>Request a Quote</button>
          </div>
      </div>
      <div className='border-t md:bg-[rgba(0,0,0,0.7)] border-gray-500 w-[83%] h-full md:h-[50%] xl:h-full md:mt-[-200px] xl:mt-0 xl:mr-0 md:mr-[20px] mt-10 md:w-[80%] xl:w-[50%] md:p-4 xl:px-8 xl:pt-20 xl:mt-[-50px]'>
        <h1 className='my-4 font-semibold text-[18px] md:text-[15px] xl:text-[20px]'>Price Breakdown</h1>
        <div className='flex flex-col gap-6 md:gap-2 font-semibold'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center md:text-[13px] xl:text-[18px] gap-1'>
                    <MdEdit className='edit' />
                    {spec.name}
                </div >
                <div className='md:text-[13px] xl:text-[18px]'>${spec.price.toLocaleString()}</div>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-1 md:gap-1 md:text-[13px] xl:text-[18px]'>
                    <MdEdit className='edit' />
                    {selectedColor}
                </div>
                <div className='md:text-[13px] xl:text-[18px]'>${0}</div>
            </div>
        </div>
        <div className='flex flex-col gap-2 md:gap-1 border-t border-gray-500 mt-5'>
            <div className='flex justify-between mt-5 md:text-[13px] xl:text-[18px]'>
                <p>Destination Fee</p>
                <h3>$1,445</h3>
            </div>
            <div className='flex justify-between'>
                <p className='text-2xl  md:text-[18px] xl:text-[22px]'>Build Total*</p>
                <h3 className='text-3xl md:text-[15px] xl:text-[22px]'>${buildTotal().toLocaleString()}</h3>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Summary
