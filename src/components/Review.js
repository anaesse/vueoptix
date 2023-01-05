const Reviews = () => {


    return (
     <section className="bg-white h-[100vh]">
         <div className="px-4 sm:px-24 lg:px-28 pt-14">
            <h1 className="text-center text-3xl font-semibold text-[#363636] lead-[54px]">REVIEWS</h1> 
            <p className="text-[24px] text-center text-[#363636] lead-[36px] py-2">Here’s what our clients have to say about us;</p>

            <div class="w-80 border border-transparent mt-6  cursor-pointer">
                <div class="rounded-full h-52 w-52 bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center bg-[url('https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')]">           
                </div>        
                <div class="h-48 w-48 mt-4 mb-5 bg-[#F0EFEF] rounded">      
                                     
                </div>  
            </div>
            <div className=" flex items-center justify-center">
            <button type="button" class="text-white focus:ring-4 focus:outline-none  font-semibold rounded-lg text-[16px] px-5 py-2 text-center text-#FFFDFD mr-3 md:mr-0 bg-gradient-to-t from-[#FF2626] to-[#0A27BF]">Coming soon, AR feature and Eyewareness blog...</button>
            </div>
         </div>
     </section>
    );
  };
  
  export default Reviews;