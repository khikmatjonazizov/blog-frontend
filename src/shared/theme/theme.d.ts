import "styled-components"
import theme from './light-theme.json'

type Theme = typeof theme;

declare module "styled-components" {
    export interface DefaultTheme extends Theme {}
}
