 import '.././App.css';
 function Hero(){
    return(
     <div className="relative w-full pt-[82px] ">
    <img src="/hero.png" className="w-full" alt='test' />
    <div className='absolute top-[82px] gap-y-10 left-0 bottom-0 right-0 flex flex-col items-center justify-center text-white  font-poppins' >
      <div className='flex flex-col gap-y-0  md:gap-y-2 x xl:gap-y-4'>
      <div className='text-2xl sm:text-[32px] md:text-[52px] lg:text-[60px] xl:text-[72px] font-semibold leading-[79px]'>The Autumn Edition Has Arrived</div>
      <div className='text-[16px]  md:text-[20px] xl:text-2xl leading-[26px] '>Explore the latest trend and timeless pieces for the new season</div>
      </div>
      <button class="bg-red1  text-[16px]  xl:text-[18px] px-3.5 py-4 font-medium leading-4 xl:leading-5 border border-none rounded-[10px]">Discover New In</button>
      
      </div>
    </div> 
    
    )
 }

 export default Hero;