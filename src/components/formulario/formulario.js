import React,{useState} from "react";
import Bttn from "../buttons/bttn"
import '../formulario/formulario.css'

const Formulario = ({ personagens , setPersonagens , label1 , label2 , label3 , label4}) => {
  

    const [nomePersonagem, setNomePersonagem] = useState("");
    const [resumoPersonagem, setResumoPersonagem] = useState("");
    const [imagemUrl, setImagemUrl] = useState("");
    const [videoPersonagem, setVideoPersonagem] = useState("");
    const [editando, setEditando] = useState(false);
    
    
   
    const handleChangeName = (e)=>{
        setNomePersonagem(e.target.value)
    }
  
    const handleChangeResumo = (e)=>{
        setResumoPersonagem(e.target.value)
    }
  
    const handleChangeUrl = (e)=>{
        setImagemUrl(e.target.value)
    }
    
    const handleChangeVideo = (e)=>{
        setVideoPersonagem(e.target.value)
    }

    const HandleSubmit = (e) =>{
        e.preventDefault()
        const ultimoPersonagem = personagens[personagens.length-1] 
        setPersonagens([
            ...personagens,
            {
                id:ultimoPersonagem.id+1,
                nome: nomePersonagem,
                lancamento: resumoPersonagem,
                imagem: imagemUrl,
                trailer: videoPersonagem
            },
        ]);
    };
    
  
    return (
    <div className="container-form">
      <form onSubmit={HandleSubmit}>
        <div className="form-div-space">
            <h1>Cadastre um filme</h1>
            <label>{label1} </label>
            <input value={nomePersonagem} onChange={handleChangeName} required></input>
            <br/>

            <label>{label2} </label>
            <input value ={resumoPersonagem} onChange = {handleChangeResumo} required></input>
            <br/>

            <label>{label3} </label>
            <input value ={imagemUrl} onChange ={handleChangeUrl} required></input>
            <br/>

            <label>{label4} </label>
            <input value ={videoPersonagem} onChange={handleChangeVideo} required></input>
            <br/>        
        </div>
        <Bttn texto="Enviar" type="submit" classname="bttn" />
        
      </form>
    </div>
  );
};

export default Formulario;