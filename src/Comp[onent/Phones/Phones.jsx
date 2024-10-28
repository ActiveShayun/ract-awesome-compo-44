import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, Tooltip,} from 'recharts';
import { CirclesWithBar } from 'react-loader-spinner'

const Phones = () => {
    const [phones , setPhones] = useState([]);
    const [loader, setLoader] = useState(true)
    useEffect(()=>{
      axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
      .then(data => {
        const allPhones = data.data.data.map(phone =>{
            const obj ={
             phone: phone.phone_name,
             price: parseInt(phone.slug.split('-')[1])
            }
            return obj
        })
        console.log(allPhones);
            setPhones(allPhones)
            setLoader(false)
    })
    },[])

    return (
        <div>
     { loader && <CirclesWithBar
            height="100"
            width="100"
            color="#4fa94d"
            outerCircleColor="#4fa94d"
        innerCircleColor="#4fa94d"
        barColor="#4fa94d"
        ariaLabel="circles-with-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
                        />}
           
            <h2 className="text-4xl">phones : {phones.length}</h2>
            <BarChart width={850} height={440} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
          <Tooltip></Tooltip>
        </BarChart>
        </div>
    );
};

export default Phones;