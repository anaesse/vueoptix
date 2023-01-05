const Service = () => {


    return (
     <section className="bg-[#F0EFEF] h-[100vh]">
         <div className="px-4 sm:px-24 lg:px-28 py-14">
            <h1 className="text-center text-3xl font-semibold text-[#363636] lead-[54px]">Services</h1> 
            <p className="text-[24px] text-[#363636] lead-[36px] py-2">At VueOptix, we place utmost priority  on giving you a healthy vision with ease. Below are some of the services we offer; </p>

            <div class="w-80 border border-transparent my-8 cursor-pointer">
                <div class="h-60 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center bg-[url('https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')] rounded-[10px] ">
                    <p class=" h-60 flex items-end justify-center text-[#FFFDFD] font-[800] text-[24px] lead-[36px]">FRAME AND LENS</p>            
                </div>        
                <div class="py-1 my-4 bg-[#5A2047] rounded-[10px]">      
                    <p class="text-[#FFFDFD] text-[20px] font-medium lead-[30px] px-2">Stylish collection of frames suitable for various occasion.</p>                 
                </div>  
            </div>
         </div>
     </section>
    );
  };
  
  export default Service;