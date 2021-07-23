const CalitateSVG = (props: {
    color: string | undefined;
    height: number | undefined;
   } ) => {

const pixelHeigth = props.height+ 'px'




return (<> 

<svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 490 490"
      version="1.1"
      viewBox="0 0 490 490"
      xmlSpace="preserve"
      height={pixelHeigth}
      
    >
      <path  fill={props.color} d="M245 0C109.69 0 0 109.69 0 245s109.69 245 245 245 245-109.69 245-245S380.31 0 245 0zm0 459.375c-118.206 0-214.375-96.168-214.375-214.375 0-118.206 96.169-214.375 214.375-214.375S459.375 126.794 459.375 245c0 118.207-96.169 214.375-214.375 214.375z"></path>
      <path  fill={props.color} d="M95.583 258.914L203.967 306.033 203.967 275.528 128.362 245.546 203.967 216.641 203.967 185.911 95.583 232.82z"></path>
      <path  fill={props.color} d="M213.986 326.744L236.312 326.744 275.894 163.256 253.135 163.256z"></path>
      <path  fill={props.color}  d="M285.928 216.431L361.638 245.86 285.928 275.633 285.928 306.153 394.416 258.914 394.416 233.03 285.928 186.12z"></path>
    </svg>
  
</>)

   }


   export default CalitateSVG