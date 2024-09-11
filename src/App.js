import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import ChakraPhases from './components/ChakraPhases';
import Footer from './components/Footer';
import SectionComponent from './components/section';
import './App.css';

// Custom hook to get URL parameters
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

function App() {
  const [userData, setUserData] = useState({
    marganumber:'',

    first_chakra:'',
    chakra_title_0_27:'',
    chakra_description_0_27:'',
    chakra_image_0_27:'',

    second_chakra:'',
    chakra_title_27_54:'',
    chakra_description_27_54:'',
    chakra_image_27_54:'',

    third_chakra:'',
    chakra_title_54_81:'',
    chakra_description_54_81:'',
    chakra_image_54_81: ''         
 
  });

  // Fetch URL parameters using the custom hook directly in the component
  const query = useQuery();

  useEffect(() => {
  // Extract the values from URL parameters
const marganumber = query.get('marganumber') || '';
const first_chakra = query.get('first_chakra') || '';
const chakra_title_0_27 = query.get('chakra_title_0_27') || '';
const chakra_description_0_27 = query.get('chakra_description_0_27') || '';
const chakra_image_0_27 = query.get('chakra_image_0_27') || '';

const second_chakra = query.get('second_chakra') || '';
const chakra_title_27_54 = query.get('chakra_title_27_54') || '';
const chakra_description_27_54 = query.get('chakra_description_27_54') || '';
const chakra_image_27_54 = query.get('chakra_image_27_54') || '';

const third_chakra = query.get('third_chakra') || '';
const chakra_title_54_81 = query.get('chakra_title_54_81') || '';
const chakra_description_54_81 = query.get('chakra_description_54_81') || '';
const chakra_image_54_81 = query.get('chakra_image_54_81') || '';

// Set the extracted data to state
setUserData({
  marganumber,
  first_chakra,
  chakra_title_0_27,
  chakra_description_0_27,
  chakra_image_0_27,
  
  second_chakra,
  chakra_title_27_54,
  chakra_description_27_54,
  chakra_image_27_54,

  third_chakra,
  chakra_title_54_81,
  chakra_description_54_81,
  chakra_image_54_81,
});
}, []); // Add query as a dependency to the effect


  
  return (
    <div className="App">
      <Header />
      <div>
        <SectionComponent
          imageSrc="https://storage.mlcdn.com/account_image/1013434/wdtb04jVMOxZicf1KTkYVGU2Jvsi19o7hMkn3XqM.png"
          title="Chaturashrama: The Grand Divisions of Human Life"
          text={`In Hindu culture, life is divided into four stages, known as Āśrama in Sanskrit. We are each influenced by one chakra energy that becomes more open within us in each stage, shaping our lives and personalities as we grow. The fourth stage is our Marga Dharma, or life path number, which becomes activated when we step onto our spiritual path or begin to realize our life's purpose. Understanding the chakra energies that shape these stages helps you align with the natural rhythms of your life.`}
        />
      </div>    
      <section className="chakra-section">
        <ChakraPhases userData={userData} />
      </section>
      <div>
        <SectionComponent
          imageSrc="https://storage.mlcdn.com/account_image/1013434/DSTGSv7sxSLwl2CYyYYBwCL9q719tiNqG55oYgak.png"
          title="Chaturashrama: The Grand Divisions of Human Life"
          text={`Combining your Marga Dharma number with these three chakra phases provides a comprehensive understanding of your life's direction. By aligning with these energies, you can navigate through key life stages with greater clarity and purpose, making informed decisions that resonate with your personal energy flow. You will gain a profound understanding of your energy at any moment in your life - past, present, and future. The more you align with your energy field, the more your life becomes a natural flow, filled with synchronicities.`}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
