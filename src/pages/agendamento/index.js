import './index.scss';
import {useState} from 'react'
import { cadastrarr } from '../../api/AgendamentoApi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'



export default function index(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [data, setData] = useState('');
    

    async function salvarClick(){
            try{

                const r = await cadastrarr(nome,email,telefone,data);

                toast.dark('cadastro realizado!')
            }catch (err){
                    toast.dark('err.response.data.erro')
            }
    }

    return(
        <main className='pages-agendamento'>
            <ToastContainer/>
          
           <header>
        <nav>
            <ul class="e">
                <a href="/inicio"> <img src="/icon-home.svg" alt="home"  class='zg'/></a>

            </ul>
            <img src="./1650375712055.png" alt="" class="aa"/>
        </nav>
    </header>

    
    <div class="conteudoo">
        <div class="conteudo-formulario">
            <div  class="xaxa">
                <img src="./lili-removebg-preview.png" className=''/>
            </div>
        <div class="formulario">

                <label>
                    <input type="text" placeholder="nome completo" pattern="[a-zA-Z]*" class="campo" value={nome} onChange={e => setNome(e.target.value)}/>
                </label>
                <label>
                    <input type="text" placeholder="gmail"  class="campo" value={email} onChange={e => setEmail(e.target.value)}/>
                </label>
                <label>
                    <input type="number" placeholder="Telefone"  class="campo" value={telefone} onChange={e => setTelefone(e.target.value)}/>
                </label>
                <label>
                    <input type="date" placeholder="Data"  class="campo" value={data} onChange={e => setData(e.target.value)}/>
                </label>
                
              <input type="button" value="Agendamento" class="bnt" onClick={salvarClick} />
           
                

</div>

               

              
            
        </div>
       
    </div>


        </main>
   )    
}