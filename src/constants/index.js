
import { w1, w2, w3, w4, w5, wbg, Carousel1,frontgle, Mbslogo, Tire, Amg, Speed, Truck} from '../assets'
export const navLinks=[{
    id:'hero', name:'Home'
},{id:'services',name:'Services'},{
id:'team',name:'Team'
},
{id:'partners',name:'Partners'},
{id:'contact',name:'Contact Us'}
]

export const features = [
    {
      id: "abujacar",
      images: [w1,w2],
      bg:w1,
      title: "Car Importation",
      num:0,
      logo: Mbslogo,
      page:'/tl',
      content:
        "At MBS Automobile, we specialize in providing top-quality, reliable cars to the Nigerian market through our seamless car importation service. With years of experience in the automotive industry, we understand the unique needs of Nigerian car buyers and offer a wide range of vehicles, from brand-new to certified pre-owned models, sourced from trusted markets around the world. ",
    },
    {
      id: "abujacarrentals",
      images: [Carousel1,frontgle],
      bg:Tire,
      title: "Marketing and Sales",
      num:1,
      logo: Mbslogo,
      page:'/rental',
      content:
        "At MBS Marketing & Sales, we are dedicated to helping businesses grow by delivering innovative and result-driven marketing solutions tailored to the Nigerian market. With a deep understanding of consumer behavior and industry trends, we provide comprehensive strategies designed to boost brand visibility, generate leads, and drive sales.",
    },
    {
      id: "cafebyabujacar",
      images: [Carousel1,frontgle],
      bg:w4,
      title: "Car maintenance recommendations",
      num:2,
      logo: Mbslogo,
      page:'/cafe',
      content:
        "At MBS Car Maintenance Services, we are committed to ensuring the longevity and performance of your vehicle through expert care and reliable maintenance solutions. Serving car owners across Nigeria, we provide tailored maintenance recommendations that keep your vehicle running smoothly, efficiently, and safely.  ",
    },
    {
      id: "abujacarlogistics",
      images: [w3,w4,w5],
      bg:w5,
      title: "Vehicle Logistics",
      num:3,
      logo: Mbslogo,
      content:
        "A top haulage and freight service company focused on meeting customers need for small and large capacity automobile logistics. We are flexible and responsive when ensuring the secure storage, handling and transportation of vehicles within the FCT and nationwide.",
    }
  ];