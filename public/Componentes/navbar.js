// aba de navegacao componetizado

class Header extends HTMLElement {
     constructor() {
      super();
     }
    
     connectedCallback() {
      this.innerHTML = `
    <style>
    .navbar{
        background-color: #3D2F2B;
        height: 150px;
    }
    
    .logo-pesquisa{
        width: 100%;
        height: 70%;
        display: flex;
    }
    
    .logo{
        width: 180px;
        height: 105px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 25px;
    }
    
    .logo img{
        width: 180px;
        height: 105px;
    }
    
    .logo-pesquisa .pesquisa{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex: 1;
    }
    
    .logo-pesquisa .pesquisa input{
        height: 30px;
        width: 200px;
        padding: 15px;
        background-color: #3D2F2B;
    }
    
    .logo-pesquisa .pesquisa label{
        margin-right: 20px;
        padding-bottom: 9px;
        width: 200px;
        border-bottom: 2px solid #FFF;
        background-color: #3D2F2B;
    
    }
    
    .logo-pesquisa .pesquisa input::placeholder{
        color: #FFF;
        background-color: #3D2F2B;
    }
    
    .menu{
        display: flex;
        align-items: center;
        width: 100%;
        height: 30%;
        background-color: #FFF;
    }
    
    .options{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 45px;
        width: 750px;
    }
    
    .car-conta{
        height: 45px;
        width: 750px;
        display: flex;
        justify-content: flex-end;
        
    }
    
    .conta{
        height: 45px;
        margin-right: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .conta a{
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        color: #000;
    }
    
    .conta img{
        margin-right: 10px;
        height: 25px;
        overflow: cover;
    }
    
    
    .menu .options ul, .menu .options li{
        display: flex;
        list-style: none;
        margin-left: 50px;
    }
    
    .menu .options li a{
        display: block;
        color: #000;
        text-decoration: none;
        padding-left: 10px;
        text-transform: uppercase;
        font-weight: 500;
    
    }

    </style>

    <header>
    <div class="navbar">
        <div class="logo-pesquisa">
            <div class="logo">
                <a href="home.html"><img src="images/logo.png" alt=""></a>
            </div>
            <div class="pesquisa">
                <label for="pesquisa">
                    <input type="search" placeholder="O que você deseja?">
                </label>
            </div>
            </div>
        <div class="menu">
        <div class="options">
            <ul>
                <li><a href="home.html">home</a></li>
                <li><a href="produtos.html">Produtos</a></li>
                <li><a href="qsn.html">Quem nós somos?</a></li>
            </ul>
        </div>
        <div class="car-conta">
        <div class="conta">
           <a href="login.html"><img src="images/perfil-removebg-preview.png" alt="" >
            <span>Minha Conta</span>
            </a>
        </div>
        


        
        
    </div>
    </div>

</header> 
    `;

  }
}

customElements.define("navbar-1", Header);


    