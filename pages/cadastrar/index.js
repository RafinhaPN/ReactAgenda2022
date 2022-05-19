import React,{useState} from 'react'
import './cadastrar.css'
import { Link } from 'react-router-dom';
function Cadastrar() {

    const [contato, setContato] = useState({
        nome: '',
        sobrenome: '',
        cpf: '',
        email: '',
        telefone: ''
      })
    
      const enviarInput = e => setContato({ ...contato, [e.target.name]: e.target.value });
    
    
      const Enviar = async e => {
        e.preventDefault();
         await fetch('http://localhost/API-PHP/cadastrar.php',{
          method:'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          
          body: JSON.stringify({contato})
        
        })
        
        .then((response)=> response.json())
        .then((responsejson)=>(
            console.log(responsejson)
        )).catch((err)=>{
            
        })
    
    
      }
    




    return (
        <div className='container'>
            <h1>Novo contato</h1>
            <hr />
            <form onSubmit={Enviar}>
                <div className="form-row">
                    <div className="col">
                        <input type="text"
                               name='nome'
                          className="form-control" 
                         placeholder="nome..." 
                        
                         onChange={enviarInput}
                         />
                    </div>
                    <div className="col">
                        <input type="text"
                               name='sobrenome' 
                               className="form-control"
                               placeholder="sobrenome..."
                               onChange={enviarInput} 
                               />
                    </div>
                    <div className="col">
                        <input type="text"
                               name='cpf' 
                               className="form-control"
                               placeholder="Cpf..." 
                               maxLength={11}
                               onChange={enviarInput}
                               />
                    </div>
                    <div className="col">
                        <input type="text"
                               name='email'
                               className="form-control"
                               placeholder="e-mail..." 
                               onChange={enviarInput}
                               />
                    </div>
                    <div className="col">
                        <input type="text"
                               name='telefone' 
                               className="form-control" 
                               placeholder="telefone..." 
                               onChange={enviarInput}
                               />
                    </div>
                    <div className="col text-center">
                    <button type="submit" className="btn btn-secondary">cadastrar Contato</button>
                   </div>                 
                </div>
            </form>
            <hr />
            <Link className='angora' to={"/contato"} >Voltar</Link>
            <hr />

        </div>
    )
}



export default Cadastrar;
