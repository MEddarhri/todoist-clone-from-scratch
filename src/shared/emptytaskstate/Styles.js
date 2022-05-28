import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > * + * {
    margin-top: 20px;
  }
`;

export const Sentence = styled.p`
  font-size: ${(props) => props.size || '15px'};
  color: ${(props) => props.color || '#000'};
  font-weight: ${(props) => props.weight || '400'};
`;

export const Button = styled.div`
  background-color: #db4c3f;
  font-size: 15px;
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #b3362b;
  }
`;

export const EmptyStateSvg = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='220'
      height='200'
      fillRule='evenodd'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeMiterlimit='1.5'
      clipRule='evenodd'
      data-svgs-path='theme_todoist/today_new.svg'
      viewBox='0 0 220 200'
    >
      <g transform='translate(-2300)'>
        <g>
          <path
            fill='none'
            d='M1800-100h300v300h-300z'
            transform='matrix(.73333 0 0 .66667 980 66.667)'
          ></path>
          <path
            fill='#F9E4E2'
            d='M3105.14 1275.25s22.45-8.55 37.57 16.58c0 0 9.38-12.2 27.02-6.73 0 0 23.67-43.48 70.44-27.94l.47-2.03c6.6-28.64-8.02-58.08-32.7-65.85-12.7-4-23.16-7.29-23.16-7.29s-1.8-2.74-4.71-7.16c-9.69-14.73-24.12-24.29-39.99-26.49-15.87-2.2-31.84 3.13-44.26 14.79-4.35 4.13-9.14 8.07-14.49 11.8-3.65 2.56-7.59 4.51-11.71 5.78-.07.05-.14.07-.22.09-20.96 6.51-36.86 26.36-40.91 51.07 11.25 3.67 17.65 10.71 23.43 21.74 0 0 36.26-9.19 53.22 21.64z'
            transform='matrix(-1.028 0 0 .88672 5633.305 -972.326)'
          ></path>
          <path
            fill='none'
            stroke='#ECA19A'
            strokeWidth='1.79'
            d='M16932 1353.33c12.8.49 33.4 5.35 45 29.67'
            transform='matrix(-1.08243 0 0 1.14528 20845.768 -1401.164)'
          ></path>
          <path
            fill='none'
            stroke='#ECA19A'
            strokeWidth='2.002'
            d='M2479.635 179.7c-4.307-3.12-14.668-8.836-29.22-5.18-13.154 3.305-17.81 12.583-17.461 17.461.35 4.447 6.286 3.911 4.656-1.164-2.328-7.52-18.51-11.397-27.124 0'
          ></path>
          <path
            fill='none'
            stroke='#FFF'
            strokeWidth='0.74'
            d='M17073 1303v26.3'
            transform='matrix(-2.69682 0 0 2.69681 48499.53 -3429.105)'
          ></path>
          <path
            fill='#DA4C3F'
            d='M17050 1310l4 12h-8l4-12z'
            transform='matrix(0 2.42188 2.58334 0 -959.447 -41196.554)'
          ></path>
          <path
            fill='none'
            stroke='#FFF'
            strokeWidth='1.26'
            d='M17073 1303v32.67'
            transform='matrix(1.68703 0 0 1.47161 -26385.336 -1799.734)'
          ></path>
          <path
            fill='#ECA19A'
            d='M17050 1310l4 12h-8l4-12z'
            transform='matrix(0 1.1636 -1.42285 0 4299.462 -19715.743)'
          ></path>
          <path
            fill='none'
            stroke='#FFF'
            strokeWidth='1.26'
            d='M17073 1303v27.23'
            transform='matrix(1.68703 0 0 1.47161 -26320.336 -1817.634)'
          ></path>
          <path
            fill='#ECA19A'
            d='M17050 1310l4 12h-8l4-12z'
            transform='matrix(0 1.1636 -1.18977 0 4056.331 -19733.643)'
          ></path>
          <path
            fill='none'
            stroke='#ECA19A'
            strokeWidth='1.57'
            d='M16954 1309l-8.2 54'
            transform='matrix(1.41765 0 0 1.1092 -21695.026 -1360.784)'
          ></path>
          <path
            fill='none'
            stroke='#ECA19A'
            strokeWidth='1.63'
            d='M16954 1309l-8.2 54'
            transform='matrix(1.36846 0 0 1.0707 -20869.024 -1310.404)'
          ></path>
          <path
            fill='none'
            stroke='#ECA19A'
            strokeWidth='1.12'
            d='M17059 1395c6.3-12.21 16.2-8.12 16.2-8.12'
            transform='matrix(-1.92055 0 0 1.6275 35103.3 -2106.794)'
          ></path>
          <path
            fill='none'
            stroke='#ECA19A'
            strokeWidth='1.1'
            d='M16954 1309l-8.2 54'
            transform='matrix(-2.02658 0 0 1.58562 36733.704 -1984.434)'
          ></path>
          <path
            fill='none'
            stroke='#ECA19A'
            strokeWidth='1.1'
            d='M16954 1309l-8.2 54'
            transform='matrix(-2.02658 0 0 1.58562 36725.703 -1984.434)'
          ></path>
          <path
            fill='none'
            stroke='#FFF'
            strokeWidth='2.2'
            d='M16963.7 1313.51v72.57'
            transform='matrix(0 -1.27672 .17087 0 2122.957 21758.478)'
          ></path>
          <path
            fill='none'
            stroke='#FFF'
            strokeWidth='2.2'
            d='M16963.7 1313.51v72.57'
            transform='matrix(0 -1.27672 .17087 0 2122.957 21765.178)'
          ></path>
          <path
            fill='none'
            stroke='#FFF'
            strokeWidth='2.2'
            d='M16963.7 1313.51v72.57'
            transform='matrix(0 -1.27672 .17087 0 2122.957 21771.878)'
          ></path>
          <path
            fill='none'
            stroke='#FFF'
            strokeWidth='2.2'
            d='M16963.7 1313.51v72.57'
            transform='matrix(0 -1.27672 .17087 0 2122.957 21778.478)'
          ></path>
          <path
            fill='none'
            stroke='#FFF'
            strokeWidth='2.2'
            d='M16963.7 1313.51v72.57'
            transform='matrix(0 -1.27672 .17087 0 2122.957 21785.178)'
          ></path>
          <path
            fill='none'
            stroke='#FFF'
            strokeWidth='2.2'
            d='M16963.7 1313.51v72.57'
            transform='matrix(0 -1.27672 .17087 0 2122.957 21791.878)'
          ></path>
          <path
            fill='none'
            stroke='#FFF'
            strokeWidth='2.2'
            d='M16963.7 1313.51v72.57'
            transform='matrix(0 -1.27672 .17087 0 2122.957 21798.578)'
          ></path>
          <path
            fill='none'
            stroke='#ECA19A'
            strokeOpacity='0.5'
            strokeWidth='1.07'
            d='M17059 1395c4.1-7.95 9.8-9.02 13.3-8.78'
            transform='matrix(2.01367 0 0 1.7064 -31943.248 -2203.184)'
          ></path>
          <path
            fill='none'
            stroke='#ECA19A'
            strokeWidth='2.02'
            d='M2797.69 2272.03V2314'
            transform='matrix(1.07577 0 0 .89557 -672.954 -2000.504)'
          ></path>
          <path
            fill='none'
            stroke='#F9E4E2'
            strokeWidth='2.02'
            d='M2797.69 2272.03V2314'
            transform='matrix(1.07577 0 0 .89557 -679.791 -2000.504)'
          ></path>
          <path
            fill='none'
            stroke='#ECA19A'
            strokeWidth='2.02'
            d='M2797.69 2272.03V2314'
            transform='matrix(1.07577 0 0 .89557 -628.954 -2000.484)'
          ></path>
          <path
            fill='none'
            stroke='#F9E4E2'
            strokeWidth='2.02'
            d='M2797.69 2272.03V2314'
            transform='matrix(1.07577 0 0 .89557 -635.791 -2000.484)'
          ></path>
          <path
            fill='none'
            stroke='#ECA19A'
            strokeWidth='2.02'
            d='M2786.29 2292.02l5.06 3.47'
            transform='matrix(1.07577 0 0 .89557 -635.688 -2000.904)'
          ></path>
          <g transform='matrix(1.6556 0 0 1.10373 -25740.735 -1407.094)'>
            <path
              fill='#ECA19A'
              d='M16992.2 1312c.2 0 .4-.25.5-.61.1-.36 0-.75-.2-.97-4.7-4.89-18.7-19.68-22.1-23.23-.4-.46-1-.48-1.5-.03-3.5 3.5-18.4 18.33-23.3 23.25-.2.21-.3.61-.2.97 0 .37.3.62.5.62h46.3z'
            ></path>
            <clipPath id='_clip1'>
              <path d='M16992.2 1312c.2 0 .4-.25.5-.61.1-.36 0-.75-.2-.97-4.7-4.89-18.7-19.68-22.1-23.23-.4-.46-1-.48-1.5-.03-3.5 3.5-18.4 18.33-23.3 23.25-.2.21-.3.61-.2.97 0 .37.3.62.5.62h46.3z'></path>
            </clipPath>
            <g
              fill='none'
              stroke='#E57F78'
              strokeLinecap='butt'
              clipPath='url(#_clip1)'
            >
              <g opacity='0.25'>
                <path
                  strokeWidth='0.71'
                  d='M2797.69 2272.03v29.96'
                  transform='matrix(-.64978 0 0 1.50945 18792.714 -2159.35)'
                ></path>
                <path
                  strokeWidth='0.71'
                  d='M2797.69 2272.03v29.96'
                  transform='matrix(-.64978 0 0 1.50945 18792.714 -2141.2)'
                ></path>
                <path
                  strokeWidth='1.21'
                  d='M2797.69 2272.03V2314'
                  transform='matrix(-.64978 0 0 .4084 18790.3 342.35)'
                ></path>
                <path
                  strokeWidth='1.21'
                  d='M2797.69 2272.03v20.99'
                  transform='matrix(-.64978 0 0 .4084 18790.3 364.55)'
                ></path>
                <path
                  strokeWidth='1.21'
                  d='M2797.69 2243.01V2314'
                  transform='matrix(-.64978 0 0 .4084 18790.3 388.55)'
                ></path>
                <path
                  strokeWidth='0.71'
                  d='M2797.69 2272.03v4.15'
                  transform='matrix(-.64978 0 0 1.50945 18787.88 -2159.35)'
                ></path>
                <path
                  strokeWidth='0.71'
                  d='M2797.69 2272.03v11.36'
                  transform='matrix(-.64978 0 0 1.50945 18787.88 -2150.2)'
                ></path>
                <path
                  strokeWidth='0.71'
                  d='M2797.69 2272.03v21.61'
                  transform='matrix(-.64978 0 0 1.50945 18787.88 -2128.6)'
                ></path>
                <path
                  strokeWidth='0.71'
                  d='M2797.69 2309.8v4.2'
                  transform='matrix(-.64978 0 0 1.50945 18785.467 -2159.35)'
                ></path>
                <path
                  strokeWidth='0.71'
                  d='M2797.69 2289.99V2314'
                  transform='matrix(-.64978 0 0 1.50945 18785.467 -2170.15)'
                ></path>
                <path
                  strokeWidth='0.71'
                  d='M2797.69 2289.99v19.81'
                  transform='matrix(-.64978 0 0 1.50945 18785.467 -2186.5)'
                ></path>
              </g>
              <g opacity='0.25'>
                <path
                  strokeWidth='0.71'
                  d='M2797.69 2272.03v29.96'
                  transform='matrix(-.64978 0 0 1.50945 18783.014 -2181.15)'
                ></path>
                <path
                  strokeWidth='0.71'
                  d='M2797.69 2272.03v29.96'
                  transform='matrix(-.64978 0 0 1.50945 18783.014 -2163)'
                ></path>
                <path
                  strokeWidth='1.21'
                  d='M2797.69 2272.03v20.99'
                  transform='matrix(-.64978 0 0 .4084 18780.6 342.75)'
                ></path>
                <path
                  strokeWidth='1.21'
                  d='M2797.69 2243.01V2314'
                  transform='matrix(-.64978 0 0 .4084 18780.6 366.75)'
                ></path>
                <path
                  strokeWidth='0.71'
                  d='M2797.69 2272.03v11.36'
                  transform='matrix(-.64978 0 0 1.50945 18778.18 -2172)'
                ></path>
                <path
                  strokeWidth='0.71'
                  d='M2797.69 2272.03v21.61'
                  transform='matrix(-.64978 0 0 1.50945 18778.18 -2150.4)'
                ></path>
                <path
                  strokeWidth='0.71'
                  d='M2797.69 2309.8v4.2'
                  transform='matrix(-.64978 0 0 1.50945 18775.767 -2181.15)'
                ></path>
                <path
                  strokeWidth='0.71'
                  d='M2797.69 2289.99V2314'
                  transform='matrix(-.64978 0 0 1.50945 18775.767 -2191.95)'
                ></path>
                <path
                  strokeWidth='0.71'
                  d='M2797.69 2289.99v19.81'
                  transform='matrix(-.64978 0 0 1.50945 18775.767 -2208.3)'
                ></path>
              </g>
              <g opacity='0.25'>
                <path
                  strokeWidth='0.71'
                  d='M2797.69 2272.03v29.96'
                  transform='matrix(-.64978 0 0 1.50945 18773.314 -2153.05)'
                ></path>
                <path
                  strokeWidth='0.71'
                  d='M2797.69 2272.03v29.96'
                  transform='matrix(-.64978 0 0 1.50945 18773.314 -2134.9)'
                ></path>
                <path
                  strokeWidth='1.21'
                  d='M2797.69 2272.03V2314'
                  transform='matrix(-.64978 0 0 .4084 18770.9 348.65)'
                ></path>
                <path
                  strokeWidth='1.21'
                  d='M2797.69 2272.03v20.99'
                  transform='matrix(-.64978 0 0 .4084 18770.9 370.85)'
                ></path>
                <path
                  strokeWidth='1.21'
                  d='M2797.69 2243.01V2314'
                  transform='matrix(-.64978 0 0 .4084 18770.9 394.85)'
                ></path>
                <path
                  strokeWidth='0.71'
                  d='M2797.69 2272.03v4.15'
                  transform='matrix(-.64978 0 0 1.50945 18768.48 -2153.05)'
                ></path>
                <path
                  strokeWidth='0.71'
                  d='M2797.69 2272.03v11.36'
                  transform='matrix(-.64978 0 0 1.50945 18768.48 -2143.9)'
                ></path>
                <path
                  strokeWidth='0.71'
                  d='M2797.69 2272.03v21.61'
                  transform='matrix(-.64978 0 0 1.50945 18768.48 -2122.3)'
                ></path>
                <path
                  strokeWidth='0.71'
                  d='M2797.69 2309.8v4.2'
                  transform='matrix(-.64978 0 0 1.50945 18766.067 -2153.05)'
                ></path>
                <path
                  strokeWidth='0.71'
                  d='M2797.69 2289.99V2314'
                  transform='matrix(-.64978 0 0 1.50945 18766.067 -2163.85)'
                ></path>
                <path
                  strokeWidth='0.71'
                  d='M2797.69 2289.99v19.81'
                  transform='matrix(-.64978 0 0 1.50945 18766.067 -2180.2)'
                ></path>
              </g>
              <g opacity='0.25'>
                <path
                  strokeWidth='0.71'
                  d='M2797.69 2272.03v29.96'
                  transform='matrix(-.64978 0 0 1.50945 18802.314 -2153.05)'
                ></path>
                <path
                  strokeWidth='0.71'
                  d='M2797.69 2272.03v29.96'
                  transform='matrix(-.64978 0 0 1.50945 18802.314 -2134.9)'
                ></path>
                <path
                  strokeWidth='1.21'
                  d='M2797.69 2272.03V2314'
                  transform='matrix(-.64978 0 0 .4084 18799.9 348.65)'
                ></path>
                <path
                  strokeWidth='1.21'
                  d='M2797.69 2272.03v20.99'
                  transform='matrix(-.64978 0 0 .4084 18799.9 370.85)'
                ></path>
                <path
                  strokeWidth='1.21'
                  d='M2797.69 2243.01V2314'
                  transform='matrix(-.64978 0 0 .4084 18799.9 394.85)'
                ></path>
                <path
                  strokeWidth='0.71'
                  d='M2797.69 2272.03v4.15'
                  transform='matrix(-.64978 0 0 1.50945 18797.48 -2153.05)'
                ></path>
                <path
                  strokeWidth='0.71'
                  d='M2797.69 2272.03v11.36'
                  transform='matrix(-.64978 0 0 1.50945 18797.48 -2143.9)'
                ></path>
                <path
                  strokeWidth='0.71'
                  d='M2797.69 2272.03v21.61'
                  transform='matrix(-.64978 0 0 1.50945 18797.48 -2122.3)'
                ></path>
                <path
                  strokeWidth='0.71'
                  d='M2797.69 2309.8v4.2'
                  transform='matrix(-.64978 0 0 1.50945 18795.067 -2153.05)'
                ></path>
                <path
                  strokeWidth='0.71'
                  d='M2797.69 2289.99V2314'
                  transform='matrix(-.64978 0 0 1.50945 18795.067 -2163.85)'
                ></path>
                <path
                  strokeWidth='0.71'
                  d='M2797.69 2289.99v19.81'
                  transform='matrix(-.64978 0 0 1.50945 18795.067 -2180.2)'
                ></path>
              </g>
              <g opacity='0.25'>
                <path
                  strokeWidth='0.71'
                  d='M2797.69 2272.03v29.96'
                  transform='matrix(-.64978 0 0 1.50945 18811.914 -2162.15)'
                ></path>
                <path
                  strokeWidth='0.71'
                  d='M2797.69 2272.03v29.96'
                  transform='matrix(-.64978 0 0 1.50945 18811.914 -2144)'
                ></path>
                <path
                  strokeWidth='1.21'
                  d='M2797.69 2272.03V2314'
                  transform='matrix(-.64978 0 0 .4084 18809.5 339.55)'
                ></path>
                <path
                  strokeWidth='1.21'
                  d='M2797.69 2272.03v20.99'
                  transform='matrix(-.64978 0 0 .4084 18809.5 361.75)'
                ></path>
                <path
                  strokeWidth='1.21'
                  d='M2797.69 2243.01V2314'
                  transform='matrix(-.64978 0 0 .4084 18809.5 385.75)'
                ></path>
                <path
                  strokeWidth='0.71'
                  d='M2797.69 2272.03v4.15'
                  transform='matrix(-.64978 0 0 1.50945 18807.08 -2162.15)'
                ></path>
                <path
                  strokeWidth='0.71'
                  d='M2797.69 2272.03v11.36'
                  transform='matrix(-.64978 0 0 1.50945 18807.08 -2153)'
                ></path>
                <path
                  strokeWidth='0.71'
                  d='M2797.69 2272.03v21.61'
                  transform='matrix(-.64978 0 0 1.50945 18807.08 -2131.4)'
                ></path>
                <path
                  strokeWidth='0.71'
                  d='M2797.69 2309.8v4.2'
                  transform='matrix(-.64978 0 0 1.50945 18804.667 -2162.15)'
                ></path>
                <path
                  strokeWidth='0.71'
                  d='M2797.69 2289.99V2314'
                  transform='matrix(-.64978 0 0 1.50945 18804.667 -2172.95)'
                ></path>
                <path
                  strokeWidth='0.71'
                  d='M2797.69 2289.99v19.81'
                  transform='matrix(-.64978 0 0 1.50945 18804.667 -2189.3)'
                ></path>
              </g>
            </g>
          </g>
          <path
            fill='none'
            stroke='#FFF'
            strokeWidth='1.63'
            d='M16963.7 1313.51v72.57'
            transform='matrix(1.27672 0 0 1.1698 -19298.22 -1445.654)'
          ></path>
          <path
            fill='none'
            stroke='#FFF'
            strokeWidth='1.63'
            d='M16963.7 1313.51v72.57'
            transform='matrix(1.27672 0 0 1.1698 -19310.62 -1445.654)'
          ></path>
          <path
            fill='#ECA19A'
            d='M16944 1287h50v25h-50z'
            transform='matrix(1.4 0 0 .80116 -21401.925 -959.28)'
          ></path>
          <path
            fill='none'
            stroke='#E57F78'
            strokeLinecap='butt'
            strokeOpacity='0.25'
            strokeWidth='0.71'
            d='M2797.69 2272.03v29.96'
            transform='matrix(0 1.07577 1.66602 0 -1465.451 -2933.405)'
          ></path>
          <path
            fill='none'
            stroke='#E57F78'
            strokeLinecap='butt'
            strokeOpacity='0.25'
            strokeWidth='0.71'
            d='M2797.69 2272.03v29.96'
            transform='matrix(0 1.07577 1.66602 0 -1445.451 -2933.405)'
          ></path>
          <path
            fill='none'
            stroke='#E57F78'
            strokeLinecap='butt'
            strokeOpacity='0.25'
            strokeWidth='1.21'
            d='M2797.69 2272.03V2314'
            transform='matrix(0 1.07577 .45075 0 1295.685 -2929.405)'
          ></path>
          <path
            fill='none'
            stroke='#E57F78'
            strokeLinecap='butt'
            strokeOpacity='0.25'
            strokeWidth='1.21'
            d='M2797.69 2272.03v20.99'
            transform='matrix(0 1.07577 .45075 0 1320.145 -2929.405)'
          ></path>
          <path
            fill='none'
            stroke='#E57F78'
            strokeLinecap='butt'
            strokeOpacity='0.25'
            strokeWidth='1.21'
            d='M2797.69 2243.01V2314'
            transform='matrix(0 1.07577 .45075 0 1346.685 -2929.405)'
          ></path>
          <path
            fill='none'
            stroke='#E57F78'
            strokeLinecap='butt'
            strokeOpacity='0.25'
            strokeWidth='0.71'
            d='M2797.69 2272.03v4.15'
            transform='matrix(0 1.07577 1.66602 0 -1465.451 -2925.405)'
          ></path>
          <path
            fill='none'
            stroke='#E57F78'
            strokeLinecap='butt'
            strokeOpacity='0.25'
            strokeWidth='0.71'
            d='M2797.69 2272.03v11.36'
            transform='matrix(0 1.07577 1.66602 0 -1455.451 -2925.405)'
          ></path>
          <path
            fill='none'
            stroke='#E57F78'
            strokeLinecap='butt'
            strokeOpacity='0.25'
            strokeWidth='0.71'
            d='M2797.69 2272.03v21.61'
            transform='matrix(0 1.07577 1.66602 0 -1431.54 -2925.405)'
          ></path>
          <path
            fill='none'
            stroke='#E57F78'
            strokeLinecap='butt'
            strokeOpacity='0.25'
            strokeWidth='0.71'
            d='M2797.69 2309.8v4.2'
            transform='matrix(0 1.07577 1.66602 0 -1465.451 -2921.405)'
          ></path>
          <path
            fill='none'
            stroke='#E57F78'
            strokeLinecap='butt'
            strokeOpacity='0.25'
            strokeWidth='0.71'
            d='M2797.69 2289.99V2314'
            transform='matrix(0 1.07577 1.66602 0 -1477.451 -2921.405)'
          ></path>
          <path
            fill='none'
            stroke='#E57F78'
            strokeLinecap='butt'
            strokeOpacity='0.25'
            strokeWidth='0.71'
            d='M2797.69 2289.99v19.81'
            transform='matrix(0 1.07577 1.66602 0 -1495.451 -2921.405)'
          ></path>
          <path
            fill='none'
            stroke='#ECA19A'
            strokeOpacity='0.5'
            strokeWidth='0.83'
            d='M17059 1425s4.6-8.83 17-7'
            transform='matrix(-2.53365 0 0 2.30412 45601.223 -3097.505)'
          ></path>
          <path
            fill='#DA4C3F'
            d='M909.799 1585.92c1.129-1.7 3.115-2.74 5.252-2.74 2.138 0 4.123 1.04 5.252 2.74 2.391 3.6 4.697 7.08 4.697 7.08h-19.898s2.306-3.48 4.697-7.08z'
            transform='matrix(1.1922 0 0 1.27168 1271.105 -1953.974)'
          ></path>
          <g transform='translate(1633.196 -1200.029) scale(.7948)'>
            <circle cx='917' cy='1575' r='6' fill='#ECA19A'></circle>
            <clipPath id='_clip2'>
              <circle cx='917' cy='1575' r='6'></circle>
            </clipPath>
            <g clipPath='url(#_clip2)'>
              <path
                fill='#DA4C3F'
                d='M815 1555.53h16v11.474h-16z'
                transform='rotate(-45 496.885 1916.855) scale(1.25818)'
              ></path>
            </g>
          </g>
          <path
            fill='#DA4C3F'
            d='M533.401 2554.29s-2.189 6.4-2.189 9.14c0 1.97.981 3.57 2.189 3.57 1.209 0 2.19-1.6 2.19-3.57 0-2.74-2.19-9.14-2.19-9.14z'
            transform='matrix(1.15631 2.0028 -1.22993 .7101 4882.543 -2829.105)'
          ></path>
          <path
            fill='none'
            stroke='#FFF'
            strokeWidth='2.02'
            d='M2789.05 2296.69l-.17.8'
            transform='matrix(1.07577 0 0 .89557 -636.29 -2004.294)'
          ></path>
        </g>
      </g>
    </svg>
  );
};
