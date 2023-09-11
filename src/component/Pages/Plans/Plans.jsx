import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import couple from '../../../assets/plan/couple.png'
import tick from '../../../assets/plan/tick.svg'
import cross from '../../../assets/plan/cross.svg'
import loyal from '../../../assets/plan/vip-royal.svg'
import monitor from '../../../assets/plan/monitor-flash.svg'
import plant from '../../../assets/plan/organic-plant.svg'
import bg from '../../../assets/plan/bg.svg'
import bg1 from '../../../assets/plan/1bg.svg'
import bg3 from '../../../assets/plan/3bg.svg'

const Plans = () => {
  const gold = {
    plan: "gold",
    price: 34900,
  };
  const goldData = btoa(JSON.stringify(gold));

  const platinum = {
    plan: "platinum",
    price: 54900,
  };
  const platinumData = btoa(JSON.stringify(platinum));

  return (
    <div className="">
      {/* Title */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Soulmate | Services</title>
      </Helmet>
      {/* <div className="h-[200px] md:h-[400px] bg-gradient-to-t from-[#FF725E] to-[#ec1d02] ">
        <div className="text-center space-y-5 pt-10">
          <p className="text-3xl md:text-7xl font-extrabold bg-clip-text text-transparent text-white">
            PRICING
          </p>
          <p className="text-white text-lg">
            Get Started <br /> Pick your Plan Now
          </p>
        </div>
      </div> */}

      {/* card section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto font-lato py-8 gap-7">
        {/* card */}
        <div className="border border-[#E1E5EA] rounded-2xl hover:shadow-2xl duration-500 overflow-hidden">
          <Header bg={bg1} title='Lovebirds' titleImg={plant} price='10' profileCount='10'/>
          <div className="px-5 pt-6">
            <p className="text-[24px] font-alice mb-[18px]">Lite Incudes:</p>
            <Content isCross={true} text='2 Premium Profiles view /mo'/>
            <Content text='Free user profile can view' />
            <Content isCross={true} text='5 Premium Profiles view /mo' />
            <Content isCross={true} text='Send interest' />
            <Content isCross={true} text='Start Chat' />
          </div>
          <LinkBtn />
        </div>

        {/* card */}
        <div className="border border-[#E1E5EA] rounded-2xl hover:shadow-2xl duration-500 overflow-hidden">
          <Header bg={bg} isPopular={true} title='Premium' titleImg={monitor} price='49' profileCount='30' />
          <div className="px-5 pt-6">
            <p className="text-[24px] font-alice mb-[18px]">Lite Incudes:</p>
            <Content text='6 Premium Profiles view /mo' />
            <Content text='Free user profile can view' />
            <Content text='5 Premium Profiles view /mo' />
            <Content text='Send interest' />
            <Content text='Start Chat' />
          </div>
          <LinkBtn />
        </div>

        {/* card */}
        <div className="border border-[#E1E5EA] rounded-2xl hover:shadow-2xl duration-500 overflow-hidden">
          <Header bg={bg3} title='Ultimate ' titleImg={loyal} price='99' profileCount='70' />
          <div className="px-5 pt-6">
            <p className="text-[24px] font-alice mb-[18px]">Lite Incudes:</p>
            <Content text='2 Premium Profiles view /mo' />
            <Content text='Free user profile can view' />
            <Content text='5 Premium Profiles view /mo' />
            <Content text='Send interest' />
            <Content text='Start Chat' />
          </div>
          <LinkBtn />
        </div>
      </div>
    </div>
  );
};

export default Plans;

const Header = ({isPopular, title, titleImg,  price, profileCount, bg}) => {

  return(
    <div className="relative">
      <img className="absolute -z-10 inset-0" src={bg} alt="" />
      <div className="px-5 pt-9">
        <div className="flex justify-between ">
          <div className="flex items-center gap-2">
            <img className="w-9 h-9" src={titleImg} alt="" />
            <p className="text-[36px] font-alice">{title}</p>
          </div>
          <p className={isPopular ? 'text-[#272932] py-[13px] px-[22px] border rounded-full font-lato border-[#0F7173]' : 'text-[#272932] py-[13px] px-[22px] border rounded-full font-lato border-[#0F7173] hidden'}>POPULAR</p>
        </div>
        <p className="text-[#3E4A5B] font-lato text-[22px]">Perfect to get Started</p>
        <div className="flex items-end gap-2">
          <p className="text-[78px] font-alice text-[#272932]"><span className="text-[#A9ACBC]">$</span>{price}</p>
          <p className="text-[#3E4A5B] mb-7">{profileCount} profile/month</p>
        </div>
      </div>
      <hr />
    </div>
  )
}

const Content = ({isCross, text}) => {
  return(
    <div className="flex items-center gap-2 mb-4">
      <img className="h-[22px] w-[22px]" src={isCross ? cross : tick } alt="" />
      <p className="text-[18px] font-lato text-[#3E4A5B]">{text}</p>
    </div>
  )
}

const LinkBtn = () => {
  return(
    <div className="px-5 pb-5 pt-6 flex">
      <Link className="w-full py-4 bg-primary-500 text-center font-bold text-[22px] text-white rounded-full " to={`/payment`}>Get Started</Link>
    </div>
  )
}
