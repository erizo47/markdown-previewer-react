function DefaultText() {
    return (
        `# A demo of \`react-markdown-previewer\` 

  👉 Changes are re-rendered as you type.
  
  👈 Try writing some markdown on the left.
  
  
  
  # This is a sub-heading 1 level #
  ## sub-heading h2
  ### sub-heading h3
  #### sub-heading h4
  ##### sub-heading h5
  ###### sub-heading h6  
  
  Heres some code, \`\`<div></div>\`\`, between 2 backticks.
  
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  \`\`\`js
  import React from 'react'
  import ReactDOM from 'react-dom'
  import ReactMarkdown from 'react-markdown'
  import reactGfm from 'remark-gfm'
  
  ReactDOM.render(
    <ReactMarkdown children={text} remarkPlugins={reactGfm}></ReactMarkdown>,
    document.querySelector('#content')
  )
  \`\`\`
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://github.com/erizo47), and
  
  > Block Quotes!
  
  Pretty neat, eh?
  
  ## GitHub flavored markdown (GFM)
  
  For GFM, you can *also* use a plugin:
  [\`remark-gfm\`](https://github.com/remarkjs/react-markdown#use).
  It adds support for GitHub-specific extensions to the language:
  tables, strikethrough, tasklists, and literal URLs.
  
  These features **do not work by default**.
  👆 Use the toggle above to add the plugin.
  
  | Feature    | Support              |
  | ---------: | :------------------- |
  | CommonMark | 100%                 |
  | GFM        | 100% w/ \`remark-gfm\` |
  
  ~~strikethrough~~
  
  * [ ] task list
  * [x] checked item
  
  https://github.com/erizo47
  
  ## Components
  
  You can pass components to change things:
  
  \`\`\`js
  import React from 'react'
  import ReactDOM from 'react-dom'
  import ReactMarkdown from 'react-markdown'
  import MyFancyRule from './components/my-fancy-rule.js'
  
  ReactDOM.render(
    <ReactMarkdown
      components={{
        // Use h2s instead of h1s
        h1: 'h2',
        // Use a component instead of hrs
        hr: ({node, ...props}) => <MyFancyRule {...props} />
      }}
    >
      # Your markdown here
    </ReactMarkdown>,
    document.querySelector('#content')
  )
  \`\`\`
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
         - That look like this.
  
  
  1. And there are numbered lists too.
     1. Use just 1s if you want!
     2. And last but not least, let's not forget embedded images:
  
  ![github Logo](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png) `

    )
}
export default DefaultText;