import React from 'react'
import { useEffect,useState } from 'react';
 
function Home () {
    const [data, setData] = useState([]);
    useEffect(() => {
        const url = "https://restcountries.com/v2/all?fields=name,region,flag"
        const fetchData = async () => {
            try {
              const response = await fetch(url);
              const json = await response.json();
            //   console.log(json);
              setData(json);
            //   return setData
              
            } catch (error) {
            //    console.log("error", error);
            }
          };
      
          fetchData();
    }, []);
    console.log("ghhhj",data[0]);
  return (
    <div>
    <h3>Home Page</h3>
   
    <table style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
    <tr>
    <th>Name</th>
    <th>Region</th>
    <th>Flag</th>
  </tr>
<tr style={{gap:5}}>
{data.map(item => (
        <div className='region' key={item.name}>
          <td style={{width:'80px'}}>{item.name}</td>
          <td style={{width:'80px'}}>{item.region}</td>
          <td style={{width:'80px'}}><img style={{width:"100px"}} src={item.flag} alt='flag'/></td>
        </div>
      ))}
</tr>
    
    </table>
     
    
          
    
    </div>
    
  )
}

export default Home
