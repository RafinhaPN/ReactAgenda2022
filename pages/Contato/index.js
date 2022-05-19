import React,{useState,useEffect} from 'react'
import './contato.css'
import { Link } from 'react-router-dom';
function Contato (){

  const [data , setData]=useState([]);

  const [status, setStatus] = useState({
    type:'',
    msg:''  
})


  const  getContato = async ()=>{
      fetch('http://localhost/API-PHP/index.php')
     .then((response) => response.json())
     .then((responsejson)=>(
       //console.log(responsejson),
       setData(responsejson.results)
     ))
  }
  useEffect(()=>{
     getContato();
  },[]);

  const ApagarContato =  async (idContato) =>{
   console.log(idContato);
   await fetch('http://localhost/API-PHP/apagar.php?id='+idContato)
    .then((response)=> response.json())
    .then((responseJson)=>{
        console.log(responseJson);
     
    }).catch(()=>{

    })
    getContato();
  }

    return(
      <div className='container'>
         <h1>Listar</h1>
         <Link className='angora' to={"/cadastrar"}>Cadastrar</Link>
         <hr/>
         <table className="table table-bordered table-dark">
  <thead>
    <tr  className='text-center'>
      <td>id</td>
      <td>Nome</td>
      <td>Sobrenome</td>
      <td>Acões</td>
    </tr>
  </thead>
  {Object.values(data).map(contato =>(
  <tbody key={contato.id}  className='text-center'>
    <tr className='text-center'>
       <td>{contato.id}</td>
      <td>{contato.nome}</td>
      <td>{contato.sobrenome}</td>
      <td>
        <Link className='angora' to={"/visualizar/" + contato.id}>Visualizar</Link>
        <Link className='angora' to={"/editar/" + contato.id}>Editar</Link>
        <Link className='risco' to={"#"}  onClick={()=>ApagarContato(contato.id)} >Apagar</Link>
      </td>
    </tr>
 </tbody>

))}

</table>


         <Link className='angora' to={"/"} >Sair</Link>
         <hr/>
       
      </div>
    )
  }



export default Contato;
