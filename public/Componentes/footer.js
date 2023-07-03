
// rodape componetizado
class footer extends HTMLElement {
      constructor() {
        super();
      }
    
      connectedCallback() {
        this.innerHTML = `
        <style> 

        .rodape{
            width: 100%;
            height: auto;
            background-color: #544541;
            display: flex;
            align-items: flex-start;
            margin-top: 40px;
            color: #ccc;
        }
        
        .rodape--container{
            width:700px;
            height: auto;
            display: grid;
            grid-column: 1 / 1;
            grid-row: 1 / 2;
            justify-content: flex-start;
            margin-left: 30px;
            margin-right: 210px;
        }
        
        .rodape--below{
            width: 100%;
            height: auto;
            display: flex;
            margin-bottom: 30px;
        }
        
        .number{
            display: flex;
            width: 250px;
            align-items: center;
            margin-right: 20px;
        }
        
        .number .text1{
            margin-right: 20px;
            font-size: 14px;
        }
        
        .social{
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 200px;
            height: auto;
        }
        
        .social img{
            width: 30px;
            height: 30px;
        }
        
        .social--3 img{
            border-radius: 50%;
        }
        
        .rodape--right{
            align-self: flex-end;
            margin-bottom: 20px;
        }
        
        .rodape--right p{
            font-size: 12px;
            color: #ccc;
          }
        
        .social img{
            color: gray;
        }
        
        .instagram:hover{
            transition: 0.4;
            transform: translateY(-5px);
        }
        
        .facebook:hover{
            transition: 0.4;
            transform: translateY(-5px);
        }
        
        .linkedin:hover{
            transition: 0.4;
            transform: translateY(-5px);
        }
        </style>
        <footer>
        <div class="rodape">
            <div class="rodape--container">
            <div class="logo">
                <img src="images/logo.png" alt="">
            </div>
            <div class="rodape--below">
            <div class="number">
            <div class="text1">
                <h1>Contato:</h1>
            </div>
            <div class="text2">
                <strong><p>0800-80909</p></strong>
            </div>
            </div>
           
                <div class="social">
                <a href="" class="instagram">
                    <i><img src="images/5279112_camera_instagram_social media_instagram logo_icon.png" alt=""> </i>
                </a>
                        <a href="" class="facebook">
                        <i><img src="images/5305154_fb_facebook_facebook logo_icon.png" alt=""></i>
                    </a>
                        <a href="" class="linkedin">
                            <i><img src="images/icons8-linkedin-100-2.png" alt=""></i>
                        </a>
                    </div>
        </div>
    </div>
    <div class="rodape--right">
        <p>© Copyright 2021. Todos os direitos reservados. Projeto BrownNow.</p>
    </div>
    </div>
    </footer>

    `;

  }
}

customElements.define("footer-1", footer);