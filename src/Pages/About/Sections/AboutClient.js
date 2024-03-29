import React from 'react'
import PNClientSlider from '../../../components/PNClientSlider'
import Client1 from '../../../assets/image/Home/svg/client1.svg'
import Client2 from '../../../assets/image/Home/svg/client2.svg'
import Client3 from '../../../assets/image/Home/svg/client3.svg'
import Client4 from '../../../assets/image/Home/svg/client4.svg'
import Client5 from '../../../assets/image/Home/svg/client5.svg'

const AboutClient = () => {

  const aboutClient = [
    [
      {
        img: Client1
      },
      {
        img: Client2
      },
      {
        img: Client3
      },
      {
        img: Client4
      },
      {
        img: Client5
      },
      {
        img: Client1
      },
      {
        img: Client2
      },
      {
        img: Client3
      },
      {
        img: Client4
      },
      {
        img: Client5
      }
    ]
  ]

  return (
    <div className='pb-[50px] md:pb-[75px] lg:pb-[100px] xl:pb-40'>
      {aboutClient.map((hClient, hclientIndex) => {
         return (
           <PNClientSlider key={hclientIndex} client={hClient} heading='700+ Our Trusted Client' />
         )
       })}
    </div>
  )
}

export default AboutClient
