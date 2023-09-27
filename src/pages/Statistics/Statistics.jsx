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
    const yourPercentage = (allCard.length/totalCard)*100;
    const yourRemaining = 100-yourPercentage

    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 ">
                {
                    <div>
                       {
                         notFound ?<div> <p className="h-[80vh] flex justify-center items-center text-2xl">{notFound}</p></div> :
                         <div>
                           <Chart className='h-[80vh] flex justify-center items-center' type="pie" height={400} series={[yourPercentage, yourRemaining]}
                              options={{
                                labels: ['your Donation ', 'Total Donation'],
                                legend: {position:"bottom"}
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