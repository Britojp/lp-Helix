import {Card, CardContent} from "../../../../components/ui/card"
import {ExternalLink, Clock} from 'lucide-react'
import {Button} from "../../../../components/ui/button"

export default function Chamada() {


    return (
<Card className="bg-[#2a2a3e] border-[#4B53DB] mb-16">
<CardContent className="p-8">
  <div className="flex flex-col items-center text-center">
    <Clock className="w-16 h-16 mb-6 text-[#714ADC]" />
    <h2 className="text-3xl font-bold mb-4 text-white">
      O Poder da Resposta Rápida no E-commerce
    </h2>
    <div className="bg-[#1a1a2e] p-6 rounded-lg mb-6">
      <p className="text-2xl text-[#A14BDB] font-bold mb-2">
        <em>"Conversão no e-commerce cresce 70% quando clientes são respondidos em menos de 10 minutos"</em>
      </p>
      <p className="text-sm text-gray-400 flex items-center justify-center">
        Fonte: E-commerce Brasil
        <a href="https://www.ecommercebrasil.com.br/noticias/conversao-no-e-commerce-cresce-70-quando-clientes-sao-respondidos-em-menos-de-10-minutos" target="_blank" rel="noopener noreferrer" className="ml-2 text-[#714ADC] hover:text-[#4B53DB]">
          <ExternalLink className="w-4 h-4" />
        </a>
      </p>
    </div>
    <p className="text-xl text-gray-300 mb-8">
      Com o HelixAI, sua empresa pode responder instantaneamente, maximizando suas chances de conversão e superando a concorrência.
    </p>
    <Button className="bg-[#714ADC] hover:bg-[#4B53DB] hover:scale-105 transition-transform text-white text-lg py-4 px-6">
      Descubra Como Aumentar Suas Conversões
    </Button>
  </div>
</CardContent>
</Card>
);
}