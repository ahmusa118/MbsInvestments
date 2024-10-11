import React,{useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import BuyToken from './BuyToken';
import BrandSelect from './BrandSelect';
import './Uploadcar.css'
import Settings from './Settings';
import { Flex, Progress } from 'antd'
import EditCar from './EditCar';
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { app } from './config/FirebaseConfig';
import YearPicker from './YearPicker';
import { useNavigate } from 'react-router-dom';
import { Carousel, Button,Tabs , Select, Modal,message,Card } from 'antd';
const Post = () => {
   
    const [sample, setSample] = useState(false);
  const [category, setCategory] = useState('');
  const [mileage, setMileage] = useState('');
  const [images, setImages] = useState([]);
  const [count,setCount]=useState(0)
  const [carAddress,setCarAddress]=useState('')
  const [progress,setProgress]=useState(0)
  const [carState,setCarState]=useState('')
  const [fetchedtoken,setFetchedtoken]=useState(null)
  const [price, setPrice] = useState('');
const [model,setModel]=useState('')
const [user, setUser] = useState(null);
const auth = getAuth(app);
const navigate = useNavigate();
const [transmission,setTransmission]=useState('')
const [color,setColor]=useState('')
  const [copy,setCopy]=useState(false)
  const [used,setUsed]=useState('')
const [year,setYear]=useState('')
const [carLocation,setCarLocation]=useState('')
  const [make, setMake] = useState('');
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [modalText, setModalText] = useState('');
  const [page,setPage]=useState('')
const [loading,setLoading]=useState(false)
  const location = useLocation();

  const handleFileChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    setImages(selectedImages);
  };

  const brands = {
    "American Brands": ["Ford", "Chevrolet", "Tesla", "Dodge", "Jeep", "Cadillac", "GMC", "Lincoln"],
    "German Brands": ["BMW", "Mercedes-Benz", "Audi", "Volkswagen", "Porsche", "Opel"],
    "Japanese Brands": ["Toyota", "Honda", "Nissan", "Mazda", "Subaru", "Mitsubishi", "Suzuki"],
    "South Korean Brands": ["Hyundai", "Kia", "Genesis"],
    "Italian Brands": ["Ferrari", "Lamborghini", "Maserati", "Fiat", "Alfa Romeo"],
    "British Brands": ["Aston Martin", "Bentley", "Rolls-Royce", "Jaguar", "Land Rover", "Mini"],
    "French Brands": ["Renault", "Peugeot", "Citroën", "Bugatti"],
    "Swedish Brands": ["Volvo", "Koenigsegg"],
    "Other Notable Brands": ["Tesla", "Lotus"]
  }
  const handleLogout = async () => {
    try {
        await signOut(auth); // Sign out the user
 // Clear user state
        navigate('/'); // Redirect to home page after logout
    } catch (error) {
        console.error('Error during logout:', error);
    }
}
  useEffect(() => {
    const fetchTkn = async () => {
      try {
        const response = await fetch(`https://mangaautomobiles.com/api/tokens/${location.state.email}`, {
          method: 'POST',
        });

        if (response.ok) {
          const data = await response.json();
          setFetchedtoken(data); // Set the fetched token data
        } else {
          console.error('Failed to fetch token:', response.status);
        }
      } catch (error) {
        console.error('Error fetching token:', error);
      }
    };

    fetchTkn();
  }, [count, location.state.email]);


  const sendNotification = async (title, body) => {
    try {
      const response = await fetch(`https://mangaautomobiles.com/api/send-notification/${title}/${body}`, {
        method: 'POST', // Ensure you use POST method
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Notification sent successfully:', data);
      } else {
        console.error('Failed to send notification:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const handleUpload = async () => {
    try {
      if (!make || !category || !mileage || !price || !images.length || !year || !color || !model || !transmission) {
        message.error('Please fill in all fields');
        return;
      }
  
      const formData = new FormData();
      formData.append('email', location.state.email);
      formData.append('phone', location.state.phone);
      formData.append('fullName', location.state.fullName);
      formData.append('location', carLocation);
      formData.append('state', carLocation);
      formData.append('address', carAddress);
      formData.append('subType', location.state.subType);
      formData.append('model', model);
      formData.append('used', used);
      formData.append('price', price);
      formData.append('color', color);
      formData.append('transmission', transmission);
      formData.append('make', make);
      formData.append('year', year);
      formData.append('carLocation', carLocation);
      formData.append('category', category);
      formData.append('mileage', mileage);
  
      images.forEach((image) => {
        formData.append('images', image);
      });
  
      setLoading(true);
  
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://mangaautomobiles.com/api/cars', true);
  
      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const percentCompleted = Math.round((event.loaded * 100) / event.total);
          setProgress(percentCompleted);
        }
      };
  
      xhr.onload = function () {
        console.log(`Status: ${xhr.status}`);
        console.log(`Response: ${xhr.responseText}`);
  
        if (xhr.status >= 200 && xhr.status < 300) {
          setSample(false);
          const text = xhr.responseText;
          setModalText(`Car uploaded successfully. Car ID is: ${text}.`);
          sendNotification(`MbsAuto`,`${make} ${model} ${mileage}mi at ${carLocation}`)
          setSuccessModalVisible(true);
  



          setTimeout(() => {
            window.location.reload();
          }, 4000);
        } else if (xhr.status === 400) {
          message.error('Insufficient tokens');
          setPage('buytoken');
        } else if (xhr.status === 413) {
          message.error('Insufficient tokens');
        } else {
          message.error('Failed to upload car. Please try again.');
        }
  
        setLoading(false);
        setProgress(0);
      };
  
      xhr.onerror = function () {
        message.error('Error uploading car. Check internet connection or image size');
        setLoading(false);
        setProgress(0);
      };
  
      xhr.send(formData);
      setCount(prevCount => prevCount + 1);
    } catch (error) {
      console.error('Error:', error); // Log the actual error
      message.error('Error uploading car. Check internet connection or image size');
      setLoading(false);
      setProgress(0);
    }
  };
  
  

  const handleModalOk = () => {
    // Clear modal text and hide modal
    setModalText('');
    setSuccessModalVisible(false);
  };

  return (
    <div>
<Button onClick={handleLogout}>
  Logout
</Button>
{fetchedtoken>0? <>
     <Card className='m-2 w-1/3 shadow font-roboto'>
      <p>{location.state.email.replace(location.state.email[0],location.state.email[0].toUpperCase())}</p>
      <hr />
      <p>{location.state.subType.replace(location.state.subType[0],'')}</p>
      <hr />
       <p>{fetchedtoken} tokens left</p></Card>
      <div className='items-center justify-center flex'>
        
      <Button  onClick={() => setSample(!sample)} className='mt-2 mr-2 ml-2 mb-2'>
        <h1 className='text-black font-roboto'>Check sample</h1>
      </Button>
      {/*<CopyToClipboard text={`abujacar.com/sellersignup?email=${location.state.details.email}`}
          onCopy={() => {setCopy(true), message.success('Please send this link to people')}}>
          <button className='text-black hover:text-[#0000ff] transition ease-in duration-300 font-roboto'>
        Refer a seller
      </button>
</CopyToClipboard>*/}
     
      </div>

     <div className='upload-car-form'>
        <div className=''>
          <h1 className='font-roboto text-center text-xl'>Please upload your images exactly like the sample above</h1>
          <label>Make: </label>
          <BrandSelect brands={brands} setMake={setMake} />
          <label>Year: </label>
          <YearPicker year={year} setYear={setYear} />
          <label>Category: </label>
          <Select
        style={{ width: '100%' }}
        placeholder='Select Category'
        onChange={(value) => {
          setCategory(value)
        }}
      >
      <Option value='Sedan'>
          Sedan
      </Option>
      <Option value='SUV'>
          SUV
      </Option>
      <Option value='Bus'>
          Bus
      </Option>
      <Option value='Pick-up Truck'>
          Pick-up Truck
      </Option>
      <Option value='Motorcycle'>
      Motorcycle
      </Option>
      <Option value='Hatchback'>
      Hatchback
      </Option>
      <Option value='Coupe'>
      Coupe
      </Option>
      <Option value='Station Wagon'>
      Station Wagon
      </Option>
      <Option value='Minivan'>
     Mini Van
      </Option>
      <Option value='Hybrid'>
     Hybrid
      </Option>
      </Select>

          <label>Kilometers: </label>
          <input type='number' value={mileage} onChange={(e) => setMileage(e.target.value)} />

          <label>Price (Naira): </label>
          <input type='number' value={price} onChange={(e) => setPrice(e.target.value)} />

          <label>Model: </label>
          <input 
  type="text" 
  value={model} 
  onChange={(e) => {
    const value = e.target.value;
    const capitalizedValue = value
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
    setModel(capitalizedValue);
  }} 
/>

          <label>Transmission: </label>
          <Select
        style={{ width: '100%' }}
        placeholder='Select Transmission'
        onChange={(value) => {
          setTransmission(value)
        }}
      >
      <Option value='Manual'>
          Manual
      </Option>
      <Option value='Automatic'>
          Automatic
      </Option>
      <Option value='Semi-Automatic'>
          Semi-Automatic
      </Option>
      </Select>

      
      <label>Usage: </label>
          <Select
        style={{ width: '100%' }}
        placeholder='Select Usage'
        onChange={(value) => {
          setUsed(value)
        }}
      >
      <Option value='Brand New'>
      Brand New
      </Option>
      <Option value='Foreign Used'>
          Foreign Used
      </Option>
      <Option value='Nigerian Used'>
      Nigerian Used
      </Option>
      </Select>


          <label className='mt-4'>Color: </label>
          <input 
  type="text" 
  value={color} 
  onChange={(e) => {
    const value = e.target.value;
    const capitalizedValue = value
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
    setColor(capitalizedValue);
  }} 
/>


          <label>Car Location: </label>
          <input 
  type="text" 
  value={carLocation} 
  onChange={(e) => {
    const value = e.target.value;
    const capitalizedValue = value
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
    setCarLocation(capitalizedValue);
  }} 
/>

          <label>Car Address: </label>
          <input 
  type="text" 
  value={carAddress} 
  onChange={(e) => {
    const value = e.target.value;
    const capitalizedValue = value
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
    setCarAddress(capitalizedValue);
  }} 
/>
{progress>0 && <Progress  percent={progress} />}
          <label>Upload Images: </label>
          <input type='file' accept='.jpg, .jpeg, .png' multiple onChange={handleFileChange} />

        
          <Button loading={loading}  type="primary" onClick={handleUpload}>Upload Car</Button>
        </div>
      </div></>:<>
      
      <BuyToken email={location.state.email} details={location.state}/>
      </>}
      <Modal
        title='Upload Success'
        open={successModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalOk}
      >
        {modalText}
      </Modal>
    </div>
  )
}
const onChange = (key) => {
  console.log(key);
};
const UploadCar = () =>{
  const location=useLocation()

  return( 
<Tabs defaultActiveKey="1" items={[{
    key: '1',
    label: 'Post Car',
    children: <Post />,
  },
  {
    key: '2',
    label: 'Edit Post',
    children: <EditCar email={location.state.email}/>,
  },
  {
    key: '3',
    label: 'Settings',
    children: <Settings email={location.state.email}/>,
  }


]} onChange={onChange} />)};

export default UploadCar