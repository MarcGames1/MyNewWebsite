const AdsSvg = (props: {
    color: string | undefined;
    height: number | undefined;
   } ) => {

const pixelHeigth = props.height+ 'px'




return (<> 

<svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 60 60"
      version="1.1"
      viewBox="0 0 60 60"
      xmlSpace="preserve"
      height={pixelHeigth}
    >
      <path fill={props.color} d="M59 11.5h-6v2h5v4h-5v2h5v37H2v-37h5v-2H2v-4h5v-2H1c-.6 0-1 .4-1 1v45c0 .6.4 1 1 1h58c.6 0 1-.4 1-1v-45c0-.6-.4-1-1-1z"></path>
      <path fill={props.color} d="M6 45.5v2h48v-2h-3v-43c0-.6-.4-1-1-1H10c-.6 0-1 .4-1 1v43H6zm37 0H17v-14h26v14zm-32-42h7v3h-2v2h6v-2h-2v-3h9v3h-2v2h6v-2h-2v-3h9v3h-2v2h6v-2h-2v-3h7v42h-4v-14h2v-2H13v2h2v14h-4v-42z"></path>
      <path fill={props.color} d="M17 20.5h5v6h2v-14c0-.6-.4-1-1-1h-7c-.6 0-1 .4-1 1v14h2v-6zm5-7v5h-5v-5h5zM27 26.5h4.5c1.4 0 2.5-1.3 2.5-3v-9c0-1.7-1.1-3-2.5-3H27c-.6 0-1 .4-1 1v13c0 .6.4 1 1 1zm1-13h3.5c.1 0 .5.4.5 1v9c0 .6-.4 1-.5 1H28v-11zM40 26.5h1c2.2 0 4-1.8 4-4v-1c0-2.2-1.8-4-4-4h-1c-1.1 0-2-.7-2-1.6V15c0-.9.9-1.6 2-1.6h1c1.1 0 2 .7 2 1.6v.5h2V15c0-2-1.8-3.6-4-3.6h-1c-2.2 0-4 1.6-4 3.6v.9c0 2 1.8 3.6 4 3.6h1c1.1 0 2 .9 2 2v1c0 1.1-.9 2-2 2h-1c-1.1 0-2-.9-2-2v-1h-2v1c0 2.2 1.8 4 4 4z"></path>
    </svg>
  
</>)

   }


   export default AdsSvg