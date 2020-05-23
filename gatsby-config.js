const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Rašeliniště - MUNI`,
    description:
    `Naše skupina se dlouhodobě věnuje výzkumu rašelinišť se zvláštním důrazem na tzv. slatiniště (vápnitá rašeliniště). Skupinu tvoří botanici, zoologové a paleoekologové, 
    což nám umožňuje propojovat výsledky jednotlivých specializací a získávat komplexní poznatky o ekosystémech rašelinišť, ale i dalších biotopů.`,
    url: "https://botzool-mirecol.netlify.com", // No trailing slash allowed!
    image: "/mainLogo.png", // Path to your image you placed in the 'static' folder
  },
  plugins: [
    `gatsby-plugin-eslint`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images/`,
    },
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  ],
  pathPrefix: "/mirecol"
}
