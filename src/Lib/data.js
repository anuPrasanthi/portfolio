import LogoJavascript  from '../Images/logos/js.svg';
import LogoTypescript  from '../Images/logos/typescript.svg';
import LogoReact       from '../Images/logos/react.svg';
import LogoNodejs      from '../Images/logos/node.svg';
import LogoExpress     from '../Images/logos/express.svg';
import LogoExpressLight from '../Images/logos/express-light.svg';
import LogoMongoDB     from '../Images/logos/mongodb.svg';
import LogoSass        from '../Images/logos/sass.svg';
import LogoFigma       from '../Images/logos/figma.svg';
import LogoHtml        from '../Images/logos/html.svg';
import LogoMaterial    from '../Images/logos/material.svg';
import LogoRedux       from '../Images/logos/redux.svg';
import LogoGit         from '../Images/logos/git.svg';

export const TECHNOLOGIES = [
  { label: 'JavaScript', logo: LogoJavascript,   url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { label: 'TypeScript', logo: LogoTypescript,   url: 'https://www.typescriptlang.org/' },
  { label: 'React',      logo: LogoReact,         url: 'https://react.dev/' },
  { label: 'Redux',      logo: LogoRedux,         url: 'https://redux.js.org/' },
  { label: 'Node.js',    logo: LogoNodejs,        url: 'https://nodejs.org/en' },
  { label: 'Express',    logo: LogoExpress, darkModeLogo: LogoExpressLight, url: 'https://expressjs.com/' },
  { label: 'MongoDB',    logo: LogoMongoDB,       url: 'https://www.mongodb.com/' },
  { label: 'Sass/SCSS',  logo: LogoSass,          url: 'https://sass-lang.com/' },
  { label: 'Material UI',logo: LogoMaterial,      url: 'https://mui.com/material-ui/' },
  { label: 'HTML5',      logo: LogoHtml,          url: 'https://html.com/' },
  { label: 'Figma',      logo: LogoFigma,         url: 'https://www.figma.com/' },
  { label: 'Git',        logo: LogoGit,           url: 'https://git-scm.com/' },
];
