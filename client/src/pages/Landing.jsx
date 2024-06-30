import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';
import { Logo } from '../components';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
       
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            Vacan<span>See</span>
          </h1>
          <p>
          "Unlock local job opportunities with VacanSee! Register now to stay informed about the latest vacancies near you. With real-time notifications and personalized alerts, finding your next career move has never been easier. Don't miss out—join VacanSee today and take the first step towards your dream job!"
          </p>
          <Link to='/register' className='btn register-link'>
            Register
          </Link>
          <Link to='/login' className='btn '>
            Login
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
