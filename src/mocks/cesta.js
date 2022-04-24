import logo from '../../assets/fazendaIcon.png';
import carambola from '../../assets/frutas/carambola.jpg'
import cacau from '../../assets/frutas/cacau.jpg'
import lichia from '../../assets/frutas/lichia.jpg'
import maracuja from '../../assets/frutas/maracuja.jpg'
import pitaia from '../../assets/frutas/pitaia.jpg'


const cesta = {
    topo:{
    titulo: "Detalhes da Cesta",
    },
    detalhes:{
        nome: "Cesta de Frutas",
        logoFazenda: logo,
        nomeFazenda: "Fazenda do Fred",
        descricao: "Produtos selecionados por mim, o melhor agricultor da zona leste de Belo Horizonte, diretamente para a sua cozinha",
        preco: "R$400,00",
        botao: "Comprar"
    },
    itens:{
        titulo: "Itens da Cesta",
        lista:[
            {
                nome: "Carambola",
                imagem: carambola,

            },
            {
                nome: "Cacau",
                imagem: cacau,

            },
            {
                nome: "Lichia",
                imagem: lichia,

            },
            {
                nome: "Maracujá",
                imagem: maracuja,

            },
            {
                nome: "Pitaia",
                imagem: pitaia,
            },
        ]
    }
}

export default cesta;