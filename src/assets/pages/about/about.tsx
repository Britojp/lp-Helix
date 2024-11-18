import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card"
import { Badge } from "../../../../components/ui/badge"
import { Lightbulb, Users, Rocket } from 'lucide-react'

export default function HelixAIAboutUs() {
  return (
    <section className="w-full py-12 bg-[#1a1a2e] text-white">
      <div className="container mx-auto px-4 lg:px-48 md:px-10">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center mb-8">
            <Badge variant="outline" className="px-3 py-1 text-sm border-none bg-[#714ADC]/10 text-[#714ADC] font-normal">
              Sobre Nós
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter">Helix: Inovação com Fundamento</h2>
            <p className="text-gray-300">
              Transformamos ideias inovadoras em soluções tecnológicas aplicáveis, em parceria com a Ctrl+Play.
            </p>
          </div>
          <Card className="mb-6 bg-[#2a2a3e] border-[#4B53DB]">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-white">Nossa Missão</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-300">
                Desenvolver soluções tecnológicas avançadas e acessíveis, impulsionados pela excelência da Ctrl+Play e focados em alavancar as vendas de nossos clientes.
              </p>
            </CardContent>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="flex flex-col items-center text-center p-4 bg-[#2a2a3e] border-[#4B53DB]">
              <Lightbulb className="h-8 w-8 text-[#714ADC] mb-2" />
              <h3 className="font-semibold mb-1 text-white">Inovação Contínua</h3>
              <p className="text-xs text-gray-300">
                Buscamos constantemente a vanguarda tecnológica em IA.
              </p>
            </Card>
            <Card className="flex flex-col items-center text-center p-4 bg-[#2a2a3e] border-[#4B53DB]">
              <Users className="h-8 w-8 text-[#714ADC] mb-2" />
              <h3 className="font-semibold mb-1 text-white">Colaboração</h3>
              <p className="text-xs text-gray-300">
                Parceria enriquecedora com a Ctrl+Play e nossos clientes.
              </p>
            </Card>
            <Card className="flex flex-col items-center text-center p-4 bg-[#2a2a3e] border-[#4B53DB]">
              <Rocket className="h-8 w-8 text-[#714ADC] mb-2" />
              <h3 className="font-semibold mb-1 text-white">Excelência em IA</h3>
              <p className="text-xs text-gray-300">
                Equipe especializada em soluções de IA para vendas.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}