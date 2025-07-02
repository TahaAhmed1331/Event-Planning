import { useRef } from 'react';
import { DollarSign, Users, ChartLine, Banknote } from 'lucide-react'; // ✅ Added icons
import Header from '../components/Header';
import Cardd from '../components/Earnings/Cardd';
import Creditcard from '../../public/assets/creditcard.png';
import Graphh from '../components/Earnings/Graphh'


const Earnings = () => {
  const scrollRef = useRef(null);

  return (
    <div
      ref={scrollRef}
      className='bg-white/30 backdrop-blur-lg hide-scrollbar overflow-x-hidden 
      overflow-y-auto p-6 shadow-md border pt-0 border-lightBorder w-full h-full rounded-3xl'
    >
      <Header
        scrollContainerRef={scrollRef}
        headingText='Earnings'
      />

      <div className="flex gap-6 flex-wrap mt-6">
        <Cardd 
          icon={<DollarSign size={48} color="#FFFFFF" strokeWidth={1.5} />} 
          title="Revenue" 
          amount="$49,555" 
           bgColor="bg-primary"
          
        />

        <Cardd 
          icon={<Banknote size={48} color="#FFFFFF" strokeWidth={1.5} />} 
          title="Expenses" 
          amount="$24,300" 
          bgColor="bg-forestGreen"
        />

        <Cardd 
          icon={<ChartLine size={48} color="#FFFFFF" strokeWidth={1.5} />} 
          title="Profit" 
          amount="$12,150" 
          bgColor="bg-GoogleYellow"
        />

        <img className='w-[360px]' src={Creditcard} alt="creditcard" />
      </div>

      <div className='flex items-center justify-center mt-[100px]'>
        <Graphh></Graphh>
      </div>


    </div>
  );
};

export default Earnings;
