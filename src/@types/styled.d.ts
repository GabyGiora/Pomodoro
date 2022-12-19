import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

// Criamos aqui uma variável para guardar as tipagens do TS
type ThemeType = typeof defaultTheme // O typeof é uma função específica do TS + o nome da variável do JS

// Oq esse declare module está fazendo?
// Ele está falando : "Olha, eu estou criando uma tipagem pro módulo styled-components"
// dai toda vez que importamos o styled-components ele vai puxar as tipagens daqui de dentro

// como eu estou querendo, apenas, sobrescrever alguma coisa lá de dentro e não criar uma tipagem nova, eu importo o styled aqui dentro e declaro ele
// Se eu não tivesse importado eu estaria criando do 0 a tipagem do styled
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
