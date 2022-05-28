import styled from 'styled-components';
import { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;
`;
const rotate = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

export const Spinner = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: transparent;
  border: 3px solid #fcecea;
  border-top: 3px solid #e44331;
  animation: ${rotate} 1s linear infinite;
`;

export const Icon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='64'
      height='64'
      className='loading_screen--logo'
    >
      <g fill='none' fillRule='evenodd'>
        <path
          fill='#E44332'
          d='M56 0H8C3.6 0 0 3.6 0 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V8c0-4.4-3.6-8-8-8'
          className='logo_bg'
        ></path>
        <g fill='#FFF' className='logo_stripe'>
          <path d='M13.672 29.986c1.13-.652 25.344-14.585 25.9-14.906.554-.32.582-1.302-.038-1.656-.621-.354-1.8-1.024-2.239-1.28a2.04 2.04 0 00-1.995.023c-.309.178-21.002 12.077-21.694 12.47a2.698 2.698 0 01-2.677 0L0 18.286v5.397c2.66 1.55 9.274 5.402 10.877 6.307.957.54 1.873.527 2.795-.005'></path>
          <path d='M13.672 40.77c1.13-.652 25.344-14.585 25.9-14.906.554-.32.582-1.303-.038-1.657-.621-.354-1.8-1.023-2.239-1.28a2.04 2.04 0 00-1.995.024c-.309.178-21.002 12.076-21.694 12.47a2.698 2.698 0 01-2.677-.001C10.277 35.043 0 29.07 0 29.07v5.397c2.66 1.55 9.274 5.401 10.877 6.306.957.54 1.873.527 2.795-.004'></path>
          <path d='M13.672 51.553l25.9-14.906c.554-.32.582-1.302-.038-1.656-.621-.354-1.8-1.024-2.239-1.28a2.04 2.04 0 00-1.995.023c-.309.179-21.002 12.077-21.694 12.47a2.698 2.698 0 01-2.677 0L0 39.853v5.398c2.66 1.549 9.274 5.401 10.877 6.306.957.54 1.873.527 2.795-.005'></path>
        </g>
      </g>
    </svg>
  );
};
