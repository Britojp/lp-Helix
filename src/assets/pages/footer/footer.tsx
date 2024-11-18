import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react'

export default function CompactFooter() {
  return (
    <footer className="bg-[#2a2a3e] text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold">HelixAI</h3>
            <p className="text-sm text-gray-300">Revolucionando a gestão de leads com IA</p>
          </div>
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="/sobre" className="text-sm text-gray-300 hover:text-[#714ADC]">Sobre</a>
            <a href="/servicos" className="text-sm text-gray-300 hover:text-[#714ADC]">Serviços</a>
            <a href="/contato" className="text-sm text-gray-300 hover:text-[#714ADC]">Contato</a>
          </div>
          <div className="flex space-x-4">
            <a href="mailto:contato@helixai.com" className="text-gray-300 hover:text-[#714ADC]">
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </a>
            <a href="https://linkedin.com" className="text-gray-300 hover:text-[#714ADC]">
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://twitter.com" className="text-gray-300 hover:text-[#714ADC]">
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="https://facebook.com" className="text-gray-300 hover:text-[#714ADC]">
              <Facebook className="w-5 h-5" />
              <span className="sr-only">Facebook</span>
            </a>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-700 text-center">
          <p className="text-xs text-gray-300">
            © {new Date().getFullYear()} HelixAI. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}