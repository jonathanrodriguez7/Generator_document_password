import formGeraSenha from './modules/formGeraSenha';
import GeraCPF from './modules/GeraCPF';
import './assets/css/style.css';

(function() {
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.geraNovoCpf();
  })();
  

formGeraSenha();