import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portugal',
  templateUrl: './portugal.page.html',
  styleUrls: ['./portugal.page.scss'],
})
export class PortugalPage implements OnInit {
public portugal =[
  {title: "Museu do Vinho do Porto", description:"O Museu do Vinho do Porto é um dos núcleos museológicos do Museu da Cidade do Porto, em Portugal. Inaugurado em 2004, o Museu do Vinho do Porto esteve instalado, até Dezembro de 2018, no Armazém do Cais Novo, nas margens do rio Douro, onde funcionou um armazém vinícola e depósito da Alfândega Nova.", image:"https://lifecooler.com/files/registos/imagens/386411/208989.jpg"},
  {title: "Porto Domus Hotel", description: "Este hotel oferece um excelente serviço para o seu preço de apenas 80 euros por noite para duas pessoas, também se localiza no centro do Porto dando um maior acesso a pontos de turismo e lazer", image:"https://q-xx.bstatic.com/images/hotel/max1024x768/263/263357190.jpg"}
]

  constructor() { }

  ngOnInit() {
  }

}
