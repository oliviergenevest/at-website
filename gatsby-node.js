/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 /* => load locales from main config file */
const config = require ('./src/config/SiteConfig.js')
const locales = config.locales
 
const path = require('path')

 
exports.onCreatePage = async ({ page, actions }) => {
  
  const { createPage, deletePage } = actions

  return new Promise(resolve => {
    deletePage(page)

    Object.keys(locales).map(lang => {
      const localizedPath = locales[lang].default
        ? page.path
        : locales[lang].path + page.path

 
      return createPage({
        ...page,
        path: localizedPath,
        context: {
          locale: lang
        }
      })

    })

    resolve()
  })
}


exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const loadProjects = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulProject(
          sort: { fields: [updatedAt], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              node_locale
              slug
              updatedAt
              title
              
            }
          }
        }
      }
    `).then(result => {
      console.log(result)
      const projects = result.data.allContentfulProject.edges
      const projectsPerFirstPage = /*config.projectsPerHomePage*/ 10
      const projectsPerPage = /*config.projectsPerPage*/ 10
      const numPages = Math.ceil(

        projects.slice(projectsPerFirstPage).length / projectsPerPage
      )

      // Create main project-listing page
      //  locale: projects[0].node.node_locale = en-us
      //  locale: projects[1].node.node_locale = fr
      //  locale: projects[2].node.node_locale = en
      // ... car changement de locale (en-us => en) dans contentful space et contentful garde l'enregistrement de l'ancienne locale (en-us)

        Object.keys(locales).map(lang => {
          const localizedPath = locales[lang].default
            ? ""
            : locales[lang].path 

           createPage({
              path: `${localizedPath}/projects/`,
              component: path.resolve(`./src/templates/project-list.js`),
              context: {
                locale: locales[lang].path,
                limit: projectsPerFirstPage,
                skip: 0,
                numPages: numPages + 1,
                currentPage: 1,
              },
            })


            // Create additional pagination on home page if needed
            Array.from({ length: numPages }).forEach((_, i) => {
              createPage({
                path: `${localizedPath}/projects/${i + 2}/`,
                component: path.resolve(`./src/templates/project-list.js`),
                context: {
                   locale: locales[lang].path,
                  limit: projectsPerPage,
                  skip: i * projectsPerPage + projectsPerFirstPage,
                  numPages: numPages + 1,
                  currentPage: i + 2,
                },
              })
            })

   })




      // Create each individual project
      projects.forEach((edge, i) => {
        const prev = i === 0 ? null : projects[i - 1].node
        const next = i === projects.length - 1 ? null : projects[i + 1].node
        //console.log('project detail createPages createPage : ' + `${edge.node.slug}/`)
        

        Object.keys(locales).map(lang => {
          const localizedPath = locales[lang].default
            ? ""
            : locales[lang].path   
            createPage({
              path: `${localizedPath}/project/${edge.node.slug}/`,
              component: path.resolve(`./src/templates/project.js`),
              context: {
               locale: locales[lang].path,
                slug: edge.node.slug,
                prev,
                next,
              
              },
            })
        })


      })
      resolve()
    })
  })

  /*const loadTags = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulTag {
          edges {
            node {
              slug
              post {
                id
              }
            }
          }
        }
      }
    `).then(result => {
      const tags = result.data.allContentfulTag.edges
      const postsPerPage = config.postsPerPage

      // Create tag pages with pagination if needed
      tags.map(({ node }) => {
        const totalPosts = node.post !== null ? node.post.length : 0
        const numPages = Math.ceil(totalPosts / postsPerPage)
        Array.from({ length: numPages }).forEach((_, i) => {
          createPage({
            path:
              i === 0 ? `/tag/${node.slug}/` : `/tag/${node.slug}/${i + 1}/`,
            component: path.resolve(`./src/templates/tag.js`),
            context: {
              slug: node.slug,
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages: numPages,
              currentPage: i + 1,
            },
          })
        })
      })
      resolve()
    })
  })
*/
 /* const loadPages = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPage {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      const pages = result.data.allContentfulPage.edges
      pages.map(({ node }) => {
        createPage({
          path: `${node.slug}/`,
          component: path.resolve(`./src/templates/page.js`),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })
*/
  return Promise.all([loadProjects/*, loadTags, loadPages*/])
}
