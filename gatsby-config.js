module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://shijua.netlify.app/`,
    // Your Name
    name: 'Weijun Huang',
    // Main Site Title
    title: `Weijun's Personal Site`,
    // Description that goes under your name in main bio
    description: `4th Year Master of Computing Student at Imperial College London`,
    // Optional: Twitter account handle
    author: `@weijunhuang5`,
    // Optional: Github account URL
    github: `https://github.com/shijua`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/weijun-huang-793b3224b/`,
    // Content of the About Me section
    about: `I am a third-year MEng Computing student at Imperial College London with a strong foundation in engineering, computer systems, and algorithmic thinking. My academic training has equipped me with solid problem-solving skills, a deep understanding of core computing principles, and the ability to quickly learn and apply new technologies. I am particularly passionate about building clean, efficient, and scalable software, and I enjoy working in collaborative environments where technical challenges drive innovation.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'WACC compiler',
        description:
          '•	Led a team as Leader, effectively managing tasks and ensuring deadlines were met•	Developed and implemented the parser, semantic checker, and code generator in Rust•	Tested and validated the compiler on complex codebases like hash table and Tic-Tac-Toe, identifying edge cases and optimizing performance•	Enhanced and optimized the compiler to support advanced features like dynamic type inference, constant folding, and control flow analysis',
        link: 'https://github.com/shijua/WACC-project',
      },
      {
        name: 'Pintos',
        description:
          '• Implemented core OS features such as priority scheduling, user program support, and virtual memory management, enhancing overall system functionality• Conducted extensive debugging and testing to ensure accuracy, stability, and reliability• Deepened understanding of OS principles through hands-on experience, applying concepts like process management and memory handling in real-world scenarios',
        link: 'https://github.com/shijua/pintos',
      },
      {
        name: 'C Project',
        description:
          '• Coordinated team efforts in planning and execution, ensuring collaboration and project delivery• Successfully developed an AArch64 emulator and assembler, crucial for debugging and testing A64 assembly program that flashes the LED light on Raspberry Pi• Developed a piano simulator on Raspberry Pi, showcasing embedded systems programming skills',
        link: 'https://github.com/shijua/c-project',
      },
      {
        name: 'Bouncing Ball Game',
        description:
          '•	Created a bouncing ball game with 40 levels from easy to hard•	Included 8 different types of blocks that let ball reacts in different way',
        link: 'https://github.com/shijua/bouncing-ball',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Dolby, London, UK',
        description: 'Software Engineering Internship, April 2024 - Sep 2024• Developing high-performance tools for image processing as part of the Content Creation team• Designed and implemented a compiler in C++ to translate Color Transformation Language (CTL) into Halide, enabling efficient and scalable image processing pipelines• Collaborated with engineers across teams to align on project requirements, engage in sprint planningand backlog refinement, and communicate progress through daily scrum meetings• Authored technical reports and delivered internal presentations to document project outcomes',
        link: '',
      },
      {
        name: 'PATH Start-up, London, UK',
        description: 'Software Engineering Internship, Jun 2024 - Sep 2024• Collaborated with a cross-functional team to design and develop an educational app using Flutter • Integrated OpenAI APIs and Google TTS/STT APIs to implement advanced features like story generation, AI mentoring, and audio capabilities, enhancing app interactivity and user engagement • Engaged directly with users during the alpha release phase to gather feedback, identify issues, and implement improvements, contributing to a more robust product',
        link: '',
      },
      {
        name: 'CassTime, Shenzhen, China',
        description: 'Data Analyst Internship, August 2021• Collaborated with a peer to gather and fulfill program requirements from colleagues • Developed a data collection program to capture task data from Jira users, enabling efficient data analysis and visualization as graphs or tables, with output in Excel• Designed a user-friendly interface and created comprehensive documentation to ensure ease of use',
        link: '',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Python, C, C++, Java, Dart, C#, PHP, Haskell, SQL, Rust, Kotlin, Prolog, Halide, Flutter, Flask',
      },
      {
        name: 'Languages',
        description:
          'English (Fluent), Mandarin (Native), Japanese (Basic)',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 80,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { frontmatter: { date: DESC } }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Your Site's RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
