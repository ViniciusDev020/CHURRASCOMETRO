var adulto;
var crianca;
var duracao;
var carne;
var cerveja;
var refrigerante;





 function calcular(){
    let quilo = document.getElementById('num_kg');
    let latas = document.getElementById('num_latas');
    let refri = document.getElementById('num_refri');


    let ad = document.getElementById('adulto').value;
    let cr = document.getElementById('crianca').value;
    let dr = document.getElementById('duracao').value;

    let r = document.getElementById('resultado');

    r.style.display = 'block';

    //variáveis
        carne = 400/1000;    
        cerveja = 1200/350;
        refrigerante = 1000/1000;

        adulto_qnt = ad;
        cria_qnt = cr;
        duracao = dr;
      
    //condições    

        if (duracao > 6 ){

            carne = 650/1000;    
            cerveja = 2000/350;
            refrigerante = 1500/1000;
    
            
    
    
    
    
        }

    //cálculo adulto

   adulto_carne = Math.ceil((adulto_qnt * carne)) 
   adulto_cerveja = Math.ceil((adulto_qnt * cerveja))
   adulto_refri = adulto_qnt * refrigerante
        

    //calculo criança

    cria_carne = cria_qnt * (carne/2) 
    cria_refri = cria_qnt * (refrigerante/2)


  //soma total

  soma_total_carne = (adulto_carne + cria_carne)
  soma_total_refri = Math.ceil((adulto_refri + cria_refri)/2)


    quilo.innerHTML = soma_total_carne;
    latas.innerHTML = adulto_cerveja;
    refri.innerHTML = soma_total_refri;
}

