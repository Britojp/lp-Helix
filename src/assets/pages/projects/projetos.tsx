import { Button } from "../../../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../../components/ui/card"
import { Users, TrendingUp, Zap, BarChart2, Shield } from 'lucide-react'

export default function Projetos() {
  return (
    <div className="min-h-screen bg-[#1a1a2e] text-white py-12 lg:pl-48  lg:pr-48 md:pl-10 md:pr-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4 text-center">HelixAI: Inteligência Artificial para alavancar as suas vendas e diminuir seus custos com colaboradores da área comercial</h1>
        <p className="text-xl text-center mb-12 text-gray-300">Revolucionando a gestão de leads com tecnologia de ponta</p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Sobre o HelixAI</h2>
            <p className="text-gray-300 mb-6">
              O HelixAI é nossa solução de ponta que utiliza inteligência artificial avançada para otimizar todo o processo de gestão de seus clientes potenciais. 
              Desde a captação até a conversão, nossa IA conversa com os clientes potenciais como se fosse um de seus vendedores humanos, 
              permitindo que as empresas maximizem suas taxas de conversão e ROI.
            </p>
            <Button className="bg-[#714ADC] hover:scale-105 transition-transform hover:bg-[#4B53DB] text-white">Agende uma Demo</Button>
          </div>
          <div className="bg-[#2a2a3e] rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Principais Recursos</h3>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <feature.icon className="w-5 h-5 mr-2 text-[#A14BDB]" />
                  <span>{feature.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
              
        <h2 className="text-3xl font-bold mb-8 text-center">Como o HelixAI Transforma seu Negócio</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-[#1a1a2e] border-[#4B53DB] rounded-lg">
              <CardHeader>
                <benefit.icon className="w-12 h-12 mb-4 text-[#714ADC]" />
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">{benefit.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para Aumentar suas Vendas?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Descubra como o HelixAI pode impulsionar suas conversões e otimizar seu funil de vendas.
          </p>
        </div>
      </div>
    </div>
  )
}

const features = [
  //{ name: "Análise preditiva de leads", icon: Brain }, //pode aparecer no futuro
  { name: "Segmentação automática", icon: Users },
  { name: "Pontuação dinâmica de leads", icon: TrendingUp },
  { name: "Automação de engajamento", icon: Zap },
  { name: "Insights em tempo real", icon: BarChart2 },
  { name: "Integração com CRM", icon: Shield },
]

const benefits = [
  {
    title: "Aumento nas Taxas de Conversão",
    description: "Melhore significativamente suas taxas de conversão com leads altamente qualificados e priorizados.",
    icon: TrendingUp
  },
  {
    title: "Otimização do Tempo da Equipe de Vendas e diminuição dos custos de colaboradores",
    description: "Permita que sua equipe de vendas foque nos clientes mais promissores, aumentando a eficiência.",
    icon: Users
  },
  {
    title: "Insights Acionáveis",
    description: "Obtenha insights profundos sobre o comportamento dos clientes para refinar suas estratégias de marketing e vendas. Desenvolvimentos de prompts mais direcionado ao seu público-alvo.",
    icon: BarChart2
  }
]
