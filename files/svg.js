
const SVG = ({svg, classprop, color}) => {

  const selectSVG = (svg) => {
    switch(svg){

      case 'user_2':
        return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 63.64">
          <g data-name="Layer 2"><g data-name="male employee protection">
          <path d="M63.63 41a1 1 0 0 0-.63-.77l-10.92-4.11a1 1 0 0 0-.71 0l-5 1.9a23.43 23.43 0 0 0-8.79-4.81 13.57 13.57 0 0 0 4.23-9.54v-8.3c0-6.66-4-12-10.6-14.35C26.08-.79 20.9-.14 18.43 2.57c-5.72 1.21-8.29 7.77-8.22 11.92l.06 3.64v5.54a13.61 13.61 0 0 0 4.25 9.55C5 36.42.2 42.72 0 52.41a1 1 0 0 0 .67 1 77.78 77.78 0 0 0 21.8 3.93h.26q1.75.07 3.5.07c1.19 0 2.38 0 3.56-.09h.27a82.85 82.85 0 0 0 12.16-1.42 18.41 18.41 0 0 0 3.64 4.28 27 27 0 0 0 5.44 3.4 1 1 0 0 0 .81 0 27.05 27.05 0 0 0 5.44-3.4C62.82 55.6 64.92 49 63.63 41zM19.12 4.47a1 1 0 0 0 .61-.36c1.78-2.23 6.43-2.75 10.82-1.21 2.17.76 9.26 3.91 9.26 12.47v1.75H28.34c-4.28 0-5.32-1.35-7.46-4.67A1 1 0 0 0 20 12a1 1 0 0 0-.84.46l-.74 1.17c-1.72 2.76-2.18 3.5-4.87 3.5h-1.3v-2.66c-.1-3.08 1.88-9.15 6.87-10zm-6.86 19.2v-4.55h1.32c3.73 0 4.75-1.52 6.48-4.29 1.9 2.75 3.68 4.29 8.28 4.29h11.47v4.56c0 3.77-2.19 7.49-5.85 9.93A14.19 14.19 0 0 1 26 36.07c-7.17-.07-13.74-5.96-13.74-12.4zm4 11.09a16.86 16.86 0 0 0 4.82 2.49l1.49 4L19.71 51a1 1 0 0 0 0 .65l1.41 3.56A75.55 75.55 0 0 1 2 51.73C2.45 43 7.13 37.48 16.29 34.76zm7.06 20.58-1.62-4.08 2.89-9.71a1 1 0 0 0 0-.63l-1.14-3.1a16 16 0 0 0 2.57.24h.1a15 15 0 0 0 2.88-.3l-1 3.21a1 1 0 0 0 0 .54l2.54 9.54-1.41 4.27q-2.87.12-5.79.02zm8-.1 1.26-3.82a1 1 0 0 0 0-.57l-2.55-9.56 1.23-4.13a17 17 0 0 0 3.79-1.89l.69-.49a23.09 23.09 0 0 1 8.47 4.05l-3.79 1.44a1 1 0 0 0-.63.78 22.14 22.14 0 0 0 1.43 13 80.77 80.77 0 0 1-9.9 1.19zm24.93 3.4a26.22 26.22 0 0 1-4.54 2.9 26.24 26.24 0 0 1-4.54-2.9 16.46 16.46 0 0 1-3.63-4.42c-1.9-3.4-2.52-7.51-1.85-12.28l4.83-1.83 5.18-2 10 3.8c1.05 7.09-.8 12.71-5.44 16.73z"/>
          <path fill={color} d="M56 45.7 50.8 52l-2.35-2.27a1 1 0 0 0-1.39 1.44l3.13 3a1 1 0 0 0 .69.28h.05a1 1 0 0 0 .71-.36L57.55 47A1 1 0 1 0 56 45.7z"/></g></g>
          </svg> 
        break;
        
      case 'arrow-up':
        return <svg version="1.1" className={classprop} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
          <title>Arrow Up</title>
          <path fill={color} d="M64 .3C28.7.3 0 28.8 0 64s28.7 63.7 64 63.7 64-28.5 64-63.7S99.3.3 64 .3zm0 121C32.2 121.3 6.4 95.7 6.4 64 6.4 32.3 32.2 6.7 64 6.7s57.6 25.7 57.6 57.3c0 31.7-25.8 57.3-57.6 57.3zM38.4 58.9V66c0 2.2 1.8 3.9 3.9 3.9l15.3-12.2v28.7c0 2.2 2.3 3.2 4.4 3.2h4c2.2 0 3.9-1.8 3.9-3.9V57.2l15.8 12.7c2.2 0 3.9-1.8 3.9-3.9v-7.1L64 32.2 38.4 58.9z"/>
        </svg>  
        break;

      case 'admins':
        return <svg version="1.1" className={classprop} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
          <title>Admins</title>
          <g id="Business_Team">
            <path style={{ fill: 'transparent', stroke: '#37474f',strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 3}} className="st0" d="M50.5 15.5h5M57.5 15.5h1M13.5 15.5h-5M6.5 15.5h-1"/>
            <circle style={{ fill: 'transparent', stroke: '#37474f',strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 3}} className="st0" cx="32" cy="8.5" r="8"/>
            <path style={{ fill: color, stroke: '#37474f',strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 3}}  className="st1" d="m37.5 3.9.6-.5C36.6 1.6 34.4.5 32 .5c-4.4 0-8 3.6-8 8h.8c4.6 0 9.2-1.6 12.7-4.6z"/>
            <path style={{ fill: 'white', stroke: '#37474f',strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 3}}  className="st0" d="M32 16.5c-1.1 0-2.1-.2-3-.6v1.6l3 4.5 3-4.5v-1.6c-.9.4-1.9.6-3 .6zM39 27.5v7M25 27.5v7"/>
            <path style={{ fill: 'white', stroke: '#37474f',strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 3}}  className="st0" d="m29 17.5-.5 4.5h7l-.5-4.5-3 4.5z"/>
            <path style={{ fill: 'transparent', stroke: '#37474f',strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 3}} className="st0" d="M44 28.9v-4.2c0-2-1.2-3.8-3-4.6l-6-2.7-3 4.6-3-4.5-6 2.7c-1.8.8-3 2.6-3 4.6v4.1"/><g>
              
            <circle style={{ fill: 'white', stroke: '#37474f',strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 3}} className="st0" cx="12.5" cy="35.5" r="8"/>
            <path style={{ fill: color, stroke: '#37474f',strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 3}} className="st1" d="m18 30.9.6-.5c-1.5-1.8-3.7-2.9-6.1-2.9-4.4 0-8 3.6-8 8h.8c4.6 0 9.2-1.6 12.7-4.6z"/><g>
            <path style={{ fill: 'white', stroke: '#37474f',strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 3}} className="st0" d="M12.5 43.5c-1.1 0-2.1-.2-3-.6v1.6l3 4.5 3-4.5v-1.6c-.9.4-1.9.6-3 .6zM19.5 54.5v7M5.5 54.5v7"/>
            <path style={{ fill: 'white', stroke: '#37474f',strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 3}} className="st0" d="M9.5 44.5 9 49h7l-.5-4.5-3 4.5z"/>
            <path style={{ fill: 'transparent', stroke: '#37474f',strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 3}} className="st0" d="M24.5 61.5v-9.8c0-2-1.2-3.8-3-4.6l-6-2.7-3 4.5-3-4.5-6 2.7c-1.8.8-3 2.6-3 4.6v9.8"/></g></g><g>
              
            <circle style={{ fill: 'white', stroke: '#37474f',strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 3}} className="st0" cx="51.5" cy="35.5" r="8"/>
            <path style={{ fill: color, stroke: '#37474f',strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 3}} className="st1" d="m57 30.9.6-.5c-1.5-1.8-3.7-2.9-6.1-2.9-4.4 0-8 3.6-8 8h.8c4.6 0 9.2-1.6 12.7-4.6z"/><g>
            <path style={{ fill: 'white', stroke: '#37474f',strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 3}} className="st0" d="M48.5 44.5 48 49h7l-.5-4.5-3 4.5z"/>
            <path style={{ fill: 'white', stroke: '#37474f',strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 3}} className="st0" d="M63.5 61.5v-9.8c0-2-1.2-3.8-3-4.6l-6-2.7-3 4.5-3-4.5-6 2.7c-1.8.8-3 2.6-3 4.6v9.8"/></g></g><g>
            <path style={{ fill: 'white', stroke: '#37474f',strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 3}} className="st0" d="M32 39v6"/></g>
            <path style={{ fill: 'transparent', stroke: '#37474f',strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 3}} className="st0" d="M26.4 48.6 32 45l5.6 3.6"/>

            <path style={{ fill: 'transparent', stroke: '#37474f',strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 3}}className="st0" d="M51.5 43.5c-1.1 0-2.1-.2-3-.6v1.6l3 4.5 3-4.5v-1.6c-.9.4-1.9.6-3 .6zM58.5 54.5v7M44.5 54.5v7"/>
            <path  style={{ fill: color, stroke: '#37474f',strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10}} d="m15 61-2.5 2.5L10 61l1.5-12h2z"/>
            <path style={{ fill: color, stroke: '#37474f',strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10, zIndex: '5000 !important'}} d="M34.5 34 32 36.5 29.5 34 31 22h2z"/>
            <path  style={{ fill: color, stroke: '#37474f',strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10}} d="m54 61-2.5 2.5L49 61l1.5-12h2z"/>
          </g>
        </svg>  
        break;

      case 'dropdown':
        return <svg version="1.1" className={classprop} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>Dropdown</title>
          <path d="M6.984 9.984h10.031l-5.016 5.016z"></path>
        </svg>  
        break;
        
      case 'members':
        return <svg version="1.1" className={classprop} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 28">
          <title>Members</title>
          <path d="M9.266 14c-1.625 0.047-3.094 0.75-4.141 2h-2.094c-1.563 0-3.031-0.75-3.031-2.484 0-1.266-0.047-5.516 1.937-5.516 0.328 0 1.953 1.328 4.062 1.328 0.719 0 1.406-0.125 2.078-0.359-0.047 0.344-0.078 0.688-0.078 1.031 0 1.422 0.453 2.828 1.266 4zM26 23.953c0 2.531-1.672 4.047-4.172 4.047h-13.656c-2.5 0-4.172-1.516-4.172-4.047 0-3.531 0.828-8.953 5.406-8.953 0.531 0 2.469 2.172 5.594 2.172s5.063-2.172 5.594-2.172c4.578 0 5.406 5.422 5.406 8.953zM10 4c0 2.203-1.797 4-4 4s-4-1.797-4-4 1.797-4 4-4 4 1.797 4 4zM21 10c0 3.313-2.688 6-6 6s-6-2.688-6-6 2.688-6 6-6 6 2.688 6 6zM30 13.516c0 1.734-1.469 2.484-3.031 2.484h-2.094c-1.047-1.25-2.516-1.953-4.141-2 0.812-1.172 1.266-2.578 1.266-4 0-0.344-0.031-0.688-0.078-1.031 0.672 0.234 1.359 0.359 2.078 0.359 2.109 0 3.734-1.328 4.062-1.328 1.984 0 1.937 4.25 1.937 5.516zM28 4c0 2.203-1.797 4-4 4s-4-1.797-4-4 1.797-4 4-4 4 1.797 4 4z"></path>
        </svg>  
        break;

      case 'close':
        return <svg version="1.1" className={classprop} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <title>Close</title>
          <path d="M10 8.586l-7.071-7.071-1.414 1.414 7.071 7.071-7.071 7.071 1.414 1.414 7.071-7.071 7.071 7.071 1.414-1.414-7.071-7.071 7.071-7.071-1.414-1.414-7.071 7.071z"></path>
        </svg>  
        break;

      case 'eye':
        return <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <title>Eye</title>
          <path d="M0.2 10c1.86-3.592 5.548-6.004 9.8-6.004s7.94 2.412 9.771 5.943l0.029 0.061c-1.86 3.592-5.548 6.004-9.8 6.004s-7.94-2.412-9.771-5.943l-0.029-0.061zM10 14c2.209 0 4-1.791 4-4s-1.791-4-4-4v0c-2.209 0-4 1.791-4 4s1.791 4 4 4v0zM10 12c-1.105 0-2-0.895-2-2s0.895-2 2-2v0c1.105 0 2 0.895 2 2s-0.895 2-2 2v0z"></path>
        </svg>  
        break;

      case 'eye-closed':
        return <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <title>Eye Closed</title>
          <path d="M12.81 4.36l-1.77 1.78c-0.311-0.087-0.668-0.137-1.037-0.137-2.209 0-4 1.791-4 4 0 0.369 0.050 0.726 0.143 1.065l-0.007-0.028-2.76 2.75c-1.32-1-2.42-2.3-3.18-3.79 1.86-3.591 5.548-6.003 9.799-6.003 0.996 0 1.96 0.132 2.878 0.38l-0.077-0.018zM16.61 6.21c1.33 1 2.43 2.3 3.2 3.79-1.859 3.594-5.549 6.007-9.802 6.007-1.002 0-1.973-0.134-2.895-0.385l0.077 0.018 1.77-1.78c0.311 0.087 0.668 0.137 1.037 0.137 2.209 0 4-1.791 4-4 0-0.369-0.050-0.726-0.143-1.065l0.007 0.028 2.76-2.75zM16.36 2.22l1.42 1.42-14.14 14.14-1.42-1.42 14.14-14.14z"></path>
        </svg>  
        break;

      case 'checkmark':
        return <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <title>Checkmark</title>
          <path d="M31.706 7.133l-2.839-2.839c-0.393-0.393-1.026-0.393-1.419 0l-14.515 15.324-8.32-8.324c-0.397-0.397-1.041-0.397-1.438 0l-2.876 2.878c-0.397 0.396-0.397 1.040 0 1.438l11.833 12.108c0.229 0.23 0.54 0.309 0.839 0.27 0.309 0.046 0.631-0.032 0.868-0.27l17.867-19.165c0.392-0.392 0.392-1.028 0-1.42z"></path>
        </svg>  
        break;

      case 'keyboard-right':
        return <svg version="1.1" className={classprop} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>Keyboard Right</title>
        <path d="M8.578 16.594l4.594-4.594-4.594-4.594 1.406-1.406 6 6-6 6z"></path>
        </svg>
        break;

      case 'user':
        return <svg version="1.1" className={classprop} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
        <title>User</title>
        <path d="M23.797 20.922c-0.406-2.922-1.594-5.516-4.25-5.875-1.375 1.5-3.359 2.453-5.547 2.453s-4.172-0.953-5.547-2.453c-2.656 0.359-3.844 2.953-4.25 5.875 2.172 3.063 5.75 5.078 9.797 5.078s7.625-2.016 9.797-5.078zM20 10c0-3.313-2.688-6-6-6s-6 2.688-6 6 2.688 6 6 6 6-2.688 6-6zM28 14c0 7.703-6.25 14-14 14-7.734 0-14-6.281-14-14 0-7.734 6.266-14 14-14s14 6.266 14 14z"></path>
        </svg>

      case 'password':
        return <svg version="1.1" className={classprop} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <title>Password</title>
        <path d="M29 32h-26c-0.552 0-1-0.447-1-1v-16c0-0.553 0.448-1 1-1h3v-4c0-5.523 4.477-10 10-10s10 4.477 10 10v4h3c0.553 0 1 0.447 1 1v16c0 0.553-0.447 1-1 1zM22 9.5c0-3.038-2.687-5.5-6-5.5s-6 2.462-6 5.5v4.5h12v-4.5z"></path>
        </svg>
        break;

      case 'email':
        return <svg version="1.1" className={classprop} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <title>Password</title>
        <path d="M0 38c0 2.21 1.79 4 4 4h40c2.21 0 4-1.79 4-4l-0-27c0-2.21-1.79-4-4-4l-40 0c-2.21 0-4 1.79-4 4v27zM14.72 24.53l-9.15-9.21c-0.759-0.76-0.759-1.99 0-2.75 0.761-0.76 1.991-0.76 2.75 0l14.6 14.619c0.59 0.58 1.561 0.58 2.141 0l14.619-14.619c0.76-0.76 1.99-0.76 2.75 0s0.76 1.99 0 2.75l-9.16 9.21 9.16 9.149c0.76 0.76 0.76 1.99 0 2.75s-1.99 0.76-2.75 0l-9.15-9.14c0 0-2.859 2.91-3.379 3.43-0.811 0.791-1.931 1.281-3.151 1.281-1.24 0-2.36-0.5-3.17-1.311-0.53-0.52-3.37-3.399-3.37-3.399l-9.141 9.14c-0.759 0.76-1.989 0.76-2.75 0-0.759-0.76-0.759-1.99 0-2.75l9.151-9.15z"></path>
        </svg>
        break;

      case 'remotely':
        return <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="882.34637" height="778.99856" viewBox="0 0 882.34637 778.99856">
          <title>Remotely</title>
          <path d="M501.18877,80.56067l3.46953-5.362a80.3872,80.3872,0,0,0-3.55952-8.33251l-2.24352,1.81205,1.77642-2.74534c-1.69294-3.3325-3.02505-5.43215-3.02505-5.43215s-6.95827,10.96511-9.283,22.57466l4.45222,6.88072-4.9288-3.981a32.52249,32.52249,0,0,0-.27041,4.0782c0,13.74959,4.49056,24.89583,10.03,24.89583s10.03-11.14624,10.03-24.89583a42.818,42.818,0,0,0-2.29454-12.84723Z" transform="translate(-158.82681 -60.50072)" fill="#e6e6e6"/>
          <path d="M525.74665,92.48079l6.24485-1.33818a80.386,80.386,0,0,0,3.375-8.40894l-2.86772-.30508,3.19738-.68514c1.15933-3.55352,1.70207-5.98014,1.70207-5.98014s-12.67374,2.83326-22.52676,9.39864l-1.71721,8.01359-.67022-6.30016a32.52414,32.52414,0,0,0-3.07493,2.69252c-9.72242,9.72242-14.4287,20.77932-10.51174,24.69627s14.97385-.78932,24.69627-10.51174a42.81769,42.81769,0,0,0,7.46188-10.70686Z" transform="translate(-158.82681 -60.50072)" fill="#e6e6e6"/>
          <path d="M528.02764,145.68472c-14.48118.92631-30.25994-.05387-47.04589,0V107.25287c14.79122,2.30262,30.56472,2.06615,47.04589,0Z" transform="translate(-158.82681 -60.50072)" fill="#e6e6e6"/>
          <path d="M631.62843,175.65222l2.26263-3.49679a52.42392,52.42392,0,0,0-2.32132-5.434l-1.46308,1.18172,1.15847-1.79036c-1.104-2.17326-1.97276-3.54253-1.97276-3.54253a50.2414,50.2414,0,0,0-6.05381,14.72187l2.90347,4.4872-3.21427-2.59615a21.20987,21.20987,0,0,0-.17635,2.65956c0,8.96667,2.92849,16.2356,6.541,16.2356s6.541-7.26893,6.541-16.2356a27.92338,27.92338,0,0,0-1.49636-8.37821Z" transform="translate(-158.82681 -60.50072)" fill="#e6e6e6"/>
          <path d="M647.64364,183.42582l4.07252-.87269a52.42092,52.42092,0,0,0,2.201-5.48381l-1.87016-.199,2.08514-.44681c.756-2.31739,1.11-3.89989,1.11-3.89989a50.241,50.241,0,0,0-14.69062,6.12924l-1.11987,5.226-.43707-4.10859a21.20826,21.20826,0,0,0-2.00529,1.7559c-6.3404,6.34039-9.40955,13.55105-6.85515,16.10546s9.76507-.51475,16.10546-6.85515a27.92314,27.92314,0,0,0,4.8662-6.98238Z" transform="translate(-158.82681 -60.50072)" fill="#e6e6e6"/>
          <path d="M649.13117,218.12229c-9.44378.60408-19.73376-.03513-30.68057,0v-25.063a110.58424,110.58424,0,0,0,30.68057,0Z" transform="translate(-158.82681 -60.50072)" fill="#e6e6e6"/>
          <path d="M643.29962,292.39872c-8.33889.53341-17.425-.031-27.091,0V270.268a97.6466,97.6466,0,0,0,27.091,0Z" transform="translate(-158.82681 -60.50072)" fill="#e6e6e6"/>
          <rect x="167.50834" y="82.48131" width="364.54703" height="10.18288" fill="#e6e6e6"/>
          <rect x="167.50834" y="154.77974" width="364.54703" height="10.18288" fill="#e6e6e6"/>
          <rect x="167.50834" y="227.07818" width="364.54703" height="10.18288" fill="#e6e6e6"/>
          <circle cx="470.9581" cy="197.54783" r="20.36576" fill="#e6e6e6"/>
          <circle cx="470.9581" cy="197.54783" r="16.2926" fill="#fff"/>
          <circle cx="470.9581" cy="197.54783" r="4.07315" fill="#e6e6e6"/>
          <rect x="634.87636" y="249.90225" width="2.03658" height="16.2926" transform="translate(735.11638 -438.34681) rotate(90)" fill="#e6e6e6"/>
          <rect x="628.76663" y="243.79252" width="2.03658" height="16.2926" transform="translate(1100.74302 443.37693) rotate(180)" fill="#e6e6e6"/><rect x="339.72544" y="105.10421" width="13.47506" height="53.33878" fill="#e6e6e6"/>
          <rect x="339.72544" y="113.52612" width="13.47506" height="6.17607" fill="#ccc"/>
          <rect x="339.72544" y="140.47624" width="13.47506" height="6.17607" fill="#ccc"/>
          <rect x="318.95139" y="105.10421" width="13.47506" height="53.33878" fill="#e6e6e6"/>
          <rect x="318.95139" y="113.52612" width="13.47506" height="6.17607" fill="#ccc"/>
          <rect x="318.95139" y="140.47624" width="13.47506" height="6.17607" fill="#ccc"/>
          <rect x="522.69507" y="165.60493" width="13.47506" height="53.33878" transform="translate(-189.17144 194.36555) rotate(-26.3396)" fill="#e6e6e6"/>
          <rect x="515.96897" y="175.60069" width="13.47506" height="6.17607" transform="translate(-183.84194 189.97078) rotate(-26.3396)" fill="#ccc"/>
          <rect x="527.92649" y="199.75285" width="13.47506" height="6.17607" transform="translate(-193.3166 197.7837) rotate(-26.3396)" fill="#ccc"/><rect x="219.56748" y="177.40264" width="13.47506" height="53.33878" fill="#e6e6e6"/>
          <rect x="219.56748" y="185.82455" width="13.47506" height="6.17607" fill="#ccc"/>
          <rect x="219.56748" y="212.77467" width="13.47506" height="6.17607" fill="#ccc"/>
          <rect x="198.79343" y="177.40264" width="13.47506" height="53.33878" fill="#e6e6e6"/>
          <rect x="198.79343" y="185.82455" width="13.47506" height="6.17607" fill="#ccc"/>
          <rect x="198.79343" y="212.77467" width="13.47506" height="6.17607" fill="#ccc"/>
          <rect x="402.53712" y="237.90336" width="13.47506" height="53.33878" transform="translate(-233.72439 148.5586) rotate(-26.3396)" fill="#e6e6e6"/>
          <rect x="395.81101" y="247.89913" width="13.47506" height="6.17607" transform="translate(-228.39489 144.16384) rotate(-26.3396)" fill="#ccc"/>
          <rect x="407.76853" y="272.05128" width="13.47506" height="6.17607" transform="translate(-237.86955 151.97676) rotate(-26.3396)" fill="#ccc"/>
          <rect x="345.83517" y="177.40264" width="13.47506" height="53.33878" fill="#e6e6e6"/>
          <rect x="345.83517" y="185.82455" width="13.47506" height="6.17607" fill="#ccc"/>
          <rect x="345.83517" y="212.77467" width="13.47506" height="6.17607" fill="#ccc"/>
          <rect x="325.06112" y="177.40264" width="13.47506" height="53.33878" fill="#e6e6e6"/>
          <rect x="325.06112" y="185.82455" width="13.47506" height="6.17607" fill="#ccc"/>
          <rect x="325.06112" y="212.77467" width="13.47506" height="6.17607" fill="#ccc"/>
          <rect x="528.8048" y="237.90336" width="13.47506" height="53.33878" transform="translate(-220.61527 204.58241) rotate(-26.3396)" fill="#e6e6e6"/>
          <rect x="522.0787" y="247.89913" width="13.47506" height="6.17607" transform="translate(-215.28577 200.18764) rotate(-26.3396)" fill="#ccc"/>
          <rect x="534.03622" y="272.05128" width="13.47506" height="6.17607" transform="translate(-224.76043 208.00056) rotate(-26.3396)" fill="#ccc"/><rect x="449.98737" y="32.64567" width="53.55594" height="53.55594" fill="#e6e6e6"/>
          <rect x="460.69856" y="43.35686" width="32.13357" height="32.13357" fill="#ccc"/>
          <polygon points="470 54.143 476.814 65.944 483.627 77.745 470 77.745 456.373 77.745 463.187 65.944 470 54.143" fill="#e6e6e6"/>
          <polygon points="481.839 56.398 488.653 68.199 495.466 80 481.839 80 468.212 80 475.026 68.199 481.839 56.398" fill="#e6e6e6"/>
          <circle cx="486.63091" cy="48.99433" r="3.94623" fill="#e6e6e6"/><rect x="179.12282" y="32.64567" width="53.55594" height="53.55594" fill="#e6e6e6"/>
          <rect x="189.83401" y="43.35686" width="32.13357" height="32.13357" fill="#ccc"/>
          <polygon points="199.136 54.143 205.949 65.944 212.763 77.745 199.136 77.745 185.509 77.745 192.322 65.944 199.136 54.143" fill="#e6e6e6"/>
          <polygon points="210.975 56.398 217.788 68.199 224.601 80 210.975 80 197.348 80 204.161 68.199 210.975 56.398" fill="#e6e6e6"/>
          <circle cx="215.76636" cy="48.99433" r="3.94623" fill="#e6e6e6"/>


          {/* ///////////// PLANT //////////////// */}
          <path d="M230.32422,458.34544l3.46953-5.362a80.3871,80.3871,0,0,0-3.55953-8.33251l-2.24351,1.812,1.77642-2.74534c-1.69294-3.3325-3.02505-5.43215-3.02505-5.43215s-6.95827,10.96511-9.283,22.57466l4.45222,6.88072-4.92881-3.981a32.52438,32.52438,0,0,0-.27041,4.0782c0,13.74959,4.49057,24.89583,10.03,24.89583s10.03-11.14624,10.03-24.89583a42.818,42.818,0,0,0-2.29454-12.84723Z" transform="translate(-158.82681 -60.50072)" fill={color}/>
          <path d="M254.8821,470.26556l6.24485-1.33818a80.386,80.386,0,0,0,3.375-8.40894l-2.86772-.30508,3.19737-.68514c1.15934-3.55352,1.70208-5.98014,1.70208-5.98014s-12.67374,2.83326-22.52676,9.39864l-1.71721,8.01359-.67022-6.30016a32.52414,32.52414,0,0,0-3.07493,2.69252c-9.72243,9.72242-14.4287,20.77932-10.51175,24.69627s14.97385-.78932,24.69628-10.51174a42.818,42.818,0,0,0,7.46188-10.70686Z" transform="translate(-158.82681 -60.50072)" fill={color}/>
          <path d="M257.16309,523.46949c-14.48118.92631-30.25994-.05387-47.04589,0V485.03764c14.79122,2.30262,30.56472,2.06615,47.04589,0Z" transform="translate(-158.82681 -60.50072)" fill="#3f3d56"/>
          <rect x="500.99759" y="475.03125" width="195.51126" height="253.55366" fill="#e6e6e6"/>
          <rect x="92.66419" y="488.269" width="10.18288" height="240.31592" fill="#e6e6e6"/>
          <rect y="457.72036" width="696.50885" height="20.36576" fill="#e6e6e6"/>
          <rect x="87.57275" y="478.08612" width="20.36576" height="20.36576" fill="#e6e6e6"/>
          <polygon points="614.155 489.796 613.009 494.379 584.497 494.379 582.779 489.796 510.162 489.796 510.162 536.638 687.344 536.638 687.344 489.796 614.155 489.796" fill="#3f3d56"/>
          <polygon points="614.155 548.857 613.009 553.439 584.497 553.439 582.779 548.857 510.162 548.857 510.162 595.698 687.344 595.698 687.344 548.857 614.155 548.857" fill="#3f3d56"/>
          <polygon points="614.155 607.918 613.009 612.5 584.497 612.5 582.779 607.918 510.162 607.918 510.162 654.759 687.344 654.759 687.344 607.918 614.155 607.918" fill="#3f3d56"/>
          <polygon points="614.155 666.979 613.009 671.561 584.497 671.561 582.779 666.979 510.162 666.979 510.162 713.82 687.344 713.82 687.344 666.979 614.155 666.979" fill="#3f3d56"/>
          <polygon points="377.785 454.665 317.706 454.665 319.742 428.19 375.748 428.19 377.785 454.665" fill="#e6e6e6"/>
          <rect x="314.65093" y="451.61063" width="67.20699" height="6.10973" fill="#e6e6e6"/>
          <path d="M621.63862,318.12753H392.01472a6.10973,6.10973,0,0,0-6.10973,6.10973V464.25183H627.74834V324.23726A6.10973,6.10973,0,0,0,621.63862,318.12753Z" transform="translate(-158.82681 -60.50072)" fill="#3f3d56"/>
          <path d="M385.905,464.25183V487.1633a6.10973,6.10973,0,0,0,6.10973,6.10973h229.6239a6.10973,6.10973,0,0,0,6.10972-6.10973V464.25183Z" transform="translate(-158.82681 -60.50072)" fill="#e6e6e6"/>
          <rect x="239.29763" y="270.35541" width="217.91359" height="122.19453" fill="#fff"/>
          <circle cx="348.25442" cy="418.00714" r="6.10973" fill="#3f3d56"/>
          <path d="M1023.86229,787.5582c-22.25416,1.42352-46.50239-.08278-72.29843,0V728.49751c22.73061,3.53859,46.97076,3.17519,72.29843,0Z" transform="translate(-158.82681 -60.50072)" fill="#3f3d56"/>
          <polygon points="831.432 673.3 825.322 673.3 827.359 553.949 829.395 553.949 831.432 673.3" fill="#3f3d56"/>
          <polygon points="858.926 674.107 852.816 674.107 854.853 554.755 856.889 554.755 858.926 674.107" fill="#3f3d56"/>
          <polygon points="806.993 674.107 800.883 674.107 802.92 554.755 804.956 554.755 806.993 674.107" fill="#3f3d56"/>

          {/* /////// COLORED PLANTS ON RIGHT ////////// */}
          <path d="M995.35023,538.07769l9.8628-15.24249a228.51376,228.51376,0,0,0-10.11861-23.68669l-6.3776,5.1511,5.0498-7.80416c-4.81251-9.47323-8.59926-15.44187-8.59926-15.44187s-19.78017,31.17033-26.3886,64.17264L971.435,564.78593l-14.011-11.31664a92.45186,92.45186,0,0,0-.76869,11.593c0,39.08574,12.76527,70.771,28.51206,70.771s28.512-31.68526,28.512-70.771c0-12.117-2.74124-24.794-6.52266-36.52063Z" transform="translate(-158.82681 -60.50072)" fill={color}/>
          <path d="M1022.844,540.11427l9.8628-15.2425a228.5147,228.5147,0,0,0-10.11861-23.68669l-6.3776,5.15111,5.0498-7.80416c-4.81251-9.47323-8.59926-15.44188-8.59926-15.44188s-19.78017,31.17034-26.3886,64.17264l12.65626,19.55972-14.011-11.31664a92.45186,92.45186,0,0,0-.76869,11.593c0,39.08574,12.76527,70.771,28.51206,70.771s28.51206-31.68526,28.51206-70.771c0-12.117-2.74125-24.794-6.52267-36.52064Z" transform="translate(-158.82681 -60.50072)" fill={color}/>
          <path d="M970.91133,540.11427l9.8628-15.2425a228.51678,228.51678,0,0,0-10.11862-23.68669l-6.3776,5.15111,5.0498-7.80416c-4.8125-9.47323-8.59926-15.44188-8.59926-15.44188s-19.78017,31.17034-26.3886,64.17264l12.65626,19.55972-14.011-11.31664a92.45186,92.45186,0,0,0-.76869,11.593c0,39.08574,12.76527,70.771,28.51206,70.771s28.51206-31.68526,28.51206-70.771c0-12.117-2.74125-24.794-6.52266-36.52064Z" transform="translate(-158.82681 -60.50072)" fill={color}/>
          <rect x="309.96395" y="304.84783" width="58.75616" height="3.37283" fill="#3f3d56"/>

          {/* /////// SCREEN COLORED LINES /////////// */}
          <rect x="309.96395" y="317.15098" width="90.7323" height="3.37283" fill={color}/>
          <rect x="309.96395" y="328.74233" width="73.94482" height="3.37283" fill={color}/>
          <rect x="309.96395" y="340.28988" width="43.16779" height="3.37283" fill="#3f3d56"/>
          <rect x="309.96395" y="351.83743" width="65.15139" height="3.37283" fill="#3f3d56"/>
          <rect x="283.18393" y="303.64873" width="7.19463" height="7.19463" fill="#3f3d56"/>

          {/* ////////////// SCREEN COLORED BOX //////////////// */}
          <rect x="283.18393" y="315.24008" width="7.19463" height="7.19463" fill={color}/>
          <rect x="283.18393" y="326.83143" width="7.19463" height="7.19463" fill={color}/>
          <rect x="283.18393" y="338.42278" width="7.19463" height="7.19463" fill="#3f3d56"/>
          <rect x="283.18393" y="350.01413" width="7.19463" height="7.19463" fill="#3f3d56"/>


          {/* //////////// COLORED STICKER //////////////// */}
          <path d="M605.94216,358.96335H575.109a107.84044,107.84044,0,0,1,0-36.76267h30.8332A66.14839,66.14839,0,0,0,605.94216,358.96335Z" transform="translate(-158.82681 -60.50072)" fill={color}/>
          <path d="M381.59071,432.64519l-12.68484-3.092a32.65651,32.65651,0,0,1-32.05067-39.12409v0a42.68467,42.68467,0,0,1,42.631-42.73825h.00008a42.68468,42.68468,0,0,1,42.73825,42.631v.00006C429.41674,415.35014,406.89108,438.81238,381.59071,432.64519Z" transform="translate(-158.82681 -60.50072)" fill="#2f2e41"/>
          <circle cx="236.61974" cy="345.24334" r="31.36369" fill="#ffb8b8"/>
          <path d="M374.992,422.10773s-9.54547,32.72733-15,35.4546,43.63644,6.8182,43.63644,6.8182-1.36364-31.36369,1.36364-34.091S374.992,422.10773,374.992,422.10773Z" transform="translate(-158.82681 -60.50072)" fill="#ffb8b8"/>
          <path d="M424.083,623.92626s61.36374-5.45456,69.54557,15S488.174,780.74471,488.174,780.74471H462.26485V681.19908s-110.4725-31.40179-110.4725-42.31089S424.083,623.92626,424.083,623.92626Z" transform="translate(-158.82681 -60.50072)" fill="#2f2e41"/>
          <path d="M484.08307,775.29015l13.63639,5.45456s16.36366-1.36364,9.54547,10.90911A27.00366,27.00366,0,0,1,488.174,805.29021s-25.90914,9.54547-27.27278,0,6.8182-28.63642,6.8182-28.63642Z" transform="translate(-158.82681 -60.50072)" fill="#2f2e41"/>
          <path d="M389.992,623.92626s61.36374-5.45456,69.54557,15S454.083,780.74471,454.083,780.74471H428.17388V681.19908s-78.4181-18.164-78.4181-29.07315c0-5.12492-5.34348-31.171,4.07315-36.65836C364.45693,609.27432,389.992,623.92626,389.992,623.92626Z" transform="translate(-158.82681 -60.50072)" fill="#2f2e41"/>
          <path d="M449.9921,775.29015l13.63639,5.45456s16.36367-1.36364,9.54547,10.90911A27.00366,27.00366,0,0,1,454.083,805.29021s-25.90914,9.54547-27.27277,0,6.81819-28.63642,6.81819-28.63642Z" transform="translate(-158.82681 -60.50072)" fill="#2f2e41"/>
          <path d="M361.35559,453.47142l40.98018,4.45436a30.18224,30.18224,0,0,1,26.26893,23.76669L444.53755,557.108s5.45455,75.00013-5.45456,79.091-25.90913-16.36366-46.36371-13.63638-47.04554,8.86365-47.04554,8.86365S341.451,497.179,340.901,486.19875C339.80142,464.24769,361.35559,453.47142,361.35559,453.47142Z" transform="translate(-158.82681 -60.50072)" fill="#575a89"/>
          <path d="M458.42733,627.82255l16.82365,9.9078s30.18279-4.33064,29.24058,6.278-33.8887,8.55886-33.8887,8.55886l-20.275-12.493Z" transform="translate(-158.82681 -60.50072)" fill="#ffb8b8"/>
          <circle cx="175.7429" cy="299.47504" r="20.25966" fill="#2f2e41"/>
          <path d="M353.26293,349.08471a20.2502,20.2502,0,0,0-24.24652-19.836,20.25023,20.25023,0,1,1,12.63025,38.16451A20.243,20.243,0,0,0,353.26293,349.08471Z" transform="translate(-158.82681 -60.50072)" fill="#2f2e41"/>
          <path d="M370.64347,360.57471l27.313-5.02907,21.00491,13.16494a31.86273,31.86273,0,0,1,14.6776,31.09515l-21.0372-5.33225-4.71074-11.81208-5.61047,9.196-29.33406,37.75029-16.46978-10.48815-14.68292-23.00931Z" transform="translate(-158.82681 -60.50072)" fill="#2f2e41"/>
          <path d="M393.13569,465.07123l13.63639-6.8182s28.63641,4.09092,34.091,23.18186,30,151.3639,30,151.3639L447.68124,643.7079l-32.72733-80.45468Z" transform="translate(-158.82681 -60.50072)" fill="#575a89"/>
          <polygon points="245.917 458.23 259.565 511.205 283.767 570.701 282.928 572.761 254.063 512.199 245.917 458.23" opacity="0.2"/>
          <polygon points="144.084 750.379 139.271 748.721 185.896 610.231 192.636 612.553 144.084 750.379" fill="#3f3d56"/>
          <polygon points="322.291 750.379 327.105 748.721 280.479 610.231 273.74 612.553 322.291 750.379" fill="#3f3d56"/>
          <polygon points="223.77 778.981 228.861 778.999 230.443 617.107 223.315 617.082 223.77 778.981" fill="#3f3d56"/>


          {/* /////////// COLORED CHAIR ////////////// */}
          <path d="M291.12655,589.35709l13.96582,56.44513a44.82625,44.82625,0,0,0,32.64214,32.72145l.00008,0a238.26046,238.26046,0,0,0,118.54694-.7638l20.8512-5.49922c12.11558-3.19531,21.22652-13.60111,22.0886-26.10127a25.68469,25.68469,0,0,0-2.323-12.8718q-.12219-.25966-.24559-.51476a34.06444,34.06444,0,0,0-29.59817-19.13845l-22.08892-.71254L364.521,577.28177s-27.66705-14.0531-50.4117-15.62629C299.08852,560.61654,287.51024,574.74121,291.12655,589.35709Z" transform="translate(-158.82681 -60.50072)" fill={color}/>
          <rect x="543.25654" y="351.30929" width="79.42645" height="107.93851" fill="#e6e6e6"/>
          <rect x="552.42113" y="363.76373" width="61.09727" height="83.02962" fill="#fff"/>
          <rect x="576.46734" y="385.49176" width="29.60198" height="3.37283" fill="#3f3d56"/>
          <rect x="559.8702" y="383.62466" width="7.19463" height="7.19463" fill="#3f3d56"/>
          <rect x="576.46734" y="399.74779" width="29.60198" height="3.37283" fill="#3f3d56"/>
          <rect x="559.8702" y="397.88069" width="7.19463" height="7.19463" fill="#3f3d56"/>
          <rect x="576.46734" y="414.00382" width="29.60198" height="3.37283" fill="#3f3d56"/>
          <rect x="559.8702" y="412.13672" width="7.19463" height="7.19463" fill="#3f3d56"/>
          <rect x="579.9149" y="354.36415" width="6.10973" height="6.10973" rx="3.05486" fill="#3f3d56"/>
        </svg>  

      default:
        break
    }
  }
  
  return (
    <>
      {selectSVG(svg)}
    </>
  )
}

export default SVG
