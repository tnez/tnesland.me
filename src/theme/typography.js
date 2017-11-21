import Typography from 'typography'
import ghTheme from 'typography-theme-github'

export const resumeTypography = new Typography(ghTheme, {
  baseFontSize: '12px',
})

const defaultFontFamily = [
  'Avenir Next',
  'Helvetica Neue',
  'Segoe UI',
  'Helvetica',
  'Arial',
  'sans-serif',
]

export default new Typography({
  baseFontSize: '18px',
  baseLineHeight: 2,
  bodyFontFamily: defaultFontFamily,
  headerFontFamily: defaultFontFamily,
  headerWeight: 200,
  bodyWeight: 300,
})
