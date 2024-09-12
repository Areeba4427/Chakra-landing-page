import React from 'react';
function ChakraPhases({ userData }) {
  console.log("data coming in component", userData);

  // Check if userData is available and has the required properties
  if (
    !userData ||
    !userData.marganumber ||
    !userData.first_chakra ||
    !userData.chakra_title_0_27 ||
    !userData.chakra_description_0_27 ||
    !userData.chakra_image_0_27 ||
    !userData.second_chakra ||
    !userData.chakra_title_27_54 ||
    !userData.chakra_description_27_54 ||
    !userData.chakra_image_27_54 ||
    !userData.third_chakra ||
    !userData.chakra_title_54_81 ||
    !userData.chakra_description_54_81 ||
    !userData.chakra_image_54_81
  ) {
    return <p>Loading...</p>; // Show loading text if userData is not yet available or incomplete
  }

  return (
    <section className="chakra-phases">
      <h2>Your Personal Chakra Phases:</h2>
      <img
              src={'https://storage.mlcdn.com/account_image/1013434/aoFfhrlSt6aMo2SPKDxEuWuajxBcVRrpN0bzu0rI.png'}
              className="chakra-image-main"
            />
      
      <div className="chakra-grid">
       
       
        <div className="chakra-phase">
          <h3 className='chakra-head'>0-27 Years Old - Chakra Number  {userData.first_chakra} - {userData.chakra_title_0_27}</h3>
          <div className='chakra-sec'>
            <img
              src={userData.chakra_image_0_27}
              alt={`Chakra Image ${userData.chakra_title_0_27}`}
              className="chakra-image"
            />
            <div>
              <p>{userData.chakra_description_0_27}</p>
            </div>
          </div>
        </div>

        {/* Second Chakra Phase: 27-54 Years */}
        <div className="chakra-phase">
          <h3 className='chakra-head'>27-54 Years Old - Chakra Number {userData.second_chakra} - {userData.chakra_title_27_54}</h3>
          <div className='chakra-sec'>
            <img
              src={userData.chakra_image_27_54}
              alt={`Chakra Image ${userData.chakra_title_27_54}`}
              className="chakra-image"
            />
            <div>
              <p>{userData.chakra_description_27_54}</p>
            </div>
          </div>
        </div>

        {/* Third Chakra Phase: 54-81+ Years */}
        <div className="chakra-phase">
          <h3 className='chakra-head'>54-81+ Years Old - Chakra Number {userData.third_chakra} - {userData.chakra_title_54_81}</h3>
          <div className='chakra-sec'>
            <img
              src={userData.chakra_image_54_81}
              alt={`Chakra Image ${userData.chakra_title_54_81}`}
              className="chakra-image"
            />
            <div>
              <p>{userData.chakra_description_54_81}</p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default ChakraPhases;
