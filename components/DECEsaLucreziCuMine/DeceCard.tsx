import DeCEClass from "../../Classes/CardContent/DECE"



const DeceCard=(props: DeCEClass)=>{

    return(<>
    <div className='deceCard'>
    
    <h5 className='text-center'>{props.title}</h5>
   <div  className='text-center' >{props.SVG}</div> 
        <p className='m-2'>{props.text}</p>
    </div>

    <style jsx>{`
        .deceCard{
            margin-right:1rem;
            background-color:white;
            border-radius: 2px;
            transition:all;
            transition-duration:.5s;
            cursor:default;
            
        }
        .deceCard:hover {
            box-shadow: 2px 2px 2px 2px gray;
            transform:scale(1.01);
        }
        `}

    </style>
    </>)
}

export default DeceCard