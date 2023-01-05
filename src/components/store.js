const Store = () => {


    return (
     <section className="bg-white h-[100vh]">
         <div className="px-4 sm:px-24 lg:px-28 pt-14">
            <h1 className="text-center text-3xl font-semibold text-[#363636] lead-[54px]">ONLINE STORE</h1>
            <div class="w-80 bg-white border border-transparent  cursor-pointer my-5">
                <div class="h-60 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center bg-[url('https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')] ">
                    <p class=" h-60 flex items-end justify-center text-[#FFFDFD] font-[800] text-[24px] lead-[36px]">FRAME AND LENS</p>            
                </div>        
                <div class="py-5">      
                    <p class="text-[#363636] text-[20px] font-semibold py-2">Jaguar Cat Eye Frame</p>            
                    <span class=" text-[24px] lead-[36px] font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#0A27BF] to-[#FF2626] ">19,999</span>      
                </div>  
            </div>
            <div className="flex py-5 items-center justify-center">
            <button type="button" class="text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center text-#FFFDFD mr-3 md:mr-0 bg-gradient-to-t from-[#FF2626] to-[#0A27BF]">Visit Store</button>
            </div>
         </div>
     </section>
    );
  };
  
  export default Store;