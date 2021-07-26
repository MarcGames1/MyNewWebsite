import DeCEClass from "../../Classes/CardContent/DECE"



const DeceCard=(props: DeCEClass)=>{

    return(<>
    <div className='deceCard'>
    
    <h5 className='text-center'>{props.title}</h5>
   <div><div>{props.SVG}</div>  <p className='text-justify'>{props.text}</p></div> 
       
    </div>

    <style jsx>{`
        .deceCard{
            margin:0em 1em 1em 1em;
        }
            .deceCard div{
                display:flex;
                flex-flow:row nowrap;
                justify-items:center;
                align-items:center
            }

            .deceCard div p{
                padding:1em;
            }

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