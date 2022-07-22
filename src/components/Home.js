import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import foto from "../image/foto.png"
import logo from "../image/logo.png"
import back from "../image/back.png"


const GlobalStyle = createGlobalStyle`

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
 
  overflow-x: hidden;

}


`

const Texto = styled.li`
  margin:0 15px;
  font-size:40px;
  display:inline-block;
	cursor:pointer;
  font-family:Arial;
	font-size:20px;
	font-weight:bold;
	padding:50px;
	text-decoration:none;
	text-shadow:0px 1px 0px #9752cc;
 
`
const Nave = styled.nav`

display: flex;
justify-content: space-between;
margin:10px 50px;


`




const Principal = styled.div`
background-image:url(${back});

.logo1{
  width:7vw;
  height:15vh;

}


           
ul{
  list-style:none;
  display: flex;
  

}

a{
  text-decoration:none;
  color:black; 
  font-family:font-family: 'Amatic SC', cursive;
  font-family: 'Edu VIC WA NT Beginner', cursive;
  font-size:20px;
}

 h2{
  display: flex;
  margin-left:10%;
  font-size:2em;
  letter-spacing:2px;
  color:#8f453f;
  opacity: 1;
  font-family: 'Edu VIC WA NT Beginner', cursive;

 }

.fotinha{
  width:30vw;
  height:50vh;
  box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;
  background-color: #a4508b;
  background-image: linear-gradient(326deg, #a4508b 0%, #5f0a87 74%);
  margin-top:5px;
  margin-bottom:5%;
  margin-left:50%;
  border-radius:px;

}

`

const Profile = styled.h1`

  
  padding-top:2em;
  font-size:3em;
  letter-spacing:5px;
  color:#4a1726;
  opacity: 1;
  font-family: Arial, Helvetica, sans-serif;
  margin-left:50%;
  text-shadow: #FFFCA8 2px 2px 0px, #9C9C9C 4px 4px 0px, 2px 2px 2px rgba(206,89,55,0);




`
const Rodape = styled.div`
  left: 0px;
  width: 100%;
  height: 8vh;
  background: #446061 0% 0% no-repeat padding-box;
  text-align: center;
  font: normal normal normal 16px/32px Roboto;
  letter-spacing: 1.68px;
  color: #ffffff;
  opacity: 0.5;
`;

const Me = styled.div`
  margin-left: 15%;
  width: 10%;
  height: 8vh;
  background: #446061 0% 0% no-repeat padding-box;
  text-align: center;
  font: normal normal normal 16px/32px Roboto;
  letter-spacing: 1.68px;
  background-color:#c123de;
  border-radius:6px;
  font-size:3.5em;
  font-weight:bold;
  margin-top:5px;

  
`;


export default function Header(){
  return(
      <>

     <GlobalStyle />
    
     <Principal>
   <body>
  
   <div>
      <Nave>
    
        <img src={logo} alt="minhalogo" className="logo1"/>
          
        <ul>
          <Texto>
            <a href="https://github.com/josytech?tab=repositories" target="_blank" >Portfólio</a>
          </Texto>

          <Texto>
          <a href="https://www.linkedin.com/feed/" target="_blank">Contato</a>
          </Texto>


          <Texto>
          <a href="https://projetoonu.netlify.app/" target="_blank">MY.ONU</a>
          </Texto>

            </ul>
      </Nave >

        <Profile>Sou Joseane<br/>Desenvolvedora<br/> Front end</Profile>
        
        <h2>Como desenvolvedora busco <br/>trazer soluções e <br/>inovações para transformar<br/> a vidas das pessoas!</h2>
        <Me>
          <a href="https://www.linkedin.com/feed/" target="_blank">Saiba Mais</a>
        </Me>
        
    
            <img src={foto} alt="foto" className="fotinha" />
          

           

        </div>
   
       
</body>

<Rodape>
        <p>
          Trabalho concluido como projeto final VNW. 
          Aluna Joseane Vieira Rodrigues
        </p>
      </Rodape>
</Principal>

    
    </>
  )

}






