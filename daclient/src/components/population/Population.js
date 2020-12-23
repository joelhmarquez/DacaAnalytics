import AgeGroupGraphElem from './agegroup/AgeGroupGraphElem'
import CountryOfBirthGraphElem from './countryofbirth/CountryOfBirthGraphElem'
import MaritalStatusGraphElem from './maritalstatus/MartialStatusGraphElem'
import SexGraphElem from './sex/SexGraphElem'
import StateGraphElem from './state/StateGraphElem'

function population() {
    return (
      <div>
        <AgeGroupGraphElem/>
        <SexGraphElem/>
        <MaritalStatusGraphElem/>
        <CountryOfBirthGraphElem/>
        <StateGraphElem/>
      </div>
    );
  }
  
  export default population;