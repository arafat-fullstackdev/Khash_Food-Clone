import React from 'react'

export default function Home() {
  return (
    <div className='display-flex'>

      <section>
        <img src="../../img/logo.webp" alt="Khash Food" />
      </section>
     <div className='display-flex, my-3px mx-2, px-4,
justify-content: space-between'>
       <li>Home</li>
      <li>Product</li>
      <li>Service</li>
      <li>Acc</li>
     </div>

    </div>
  );
}
