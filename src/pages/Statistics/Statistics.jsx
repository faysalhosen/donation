import { useEffect, useState } from "react";
import Chart from 'react-apexcharts'



const Statistics = () => {
    const [allCard, setCard] = useState([]);
    const [notFound, setNotFound] = useState('')

    useEffect(() => {
        const getItem = JSON.parse(localStorage.getItem('DonationItems'))
        if (getItem) {
            setCard(getItem);
        } else {
            setNotFound('No data found');
        }

    }, []);

    
    const totalCard = 12;
    const persent = (allCard.length / totalCard) * 100;
    const remaining = 100 - persent;


    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 ">
                {
                    <div>
                       {
                         notFound ?<div> <p className="h-[80vh] flex justify-center items-center text-2xl">{notFound}</p></div> :
                         <div>
                           <Chart className='h-[80vh] flex justify-center items-center' type="pie" height={500} series={[persent, remaining]}
                              options={{
                                labels: ['your Donation ', 'Total Donation']
                              }}>
                          </Chart>
  
                         </div>
                       }
                    </div>
                }
            </div>
        </div>
    );

    
};

export default Statistics;