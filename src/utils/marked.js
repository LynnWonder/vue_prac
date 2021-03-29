import marked from 'marked'
import hljs from 'highlight.js'

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function(code, language) {
    const validLanguage = hljs.getLanguage(language) ? language : 'plaintext'
    return hljs.highlight(validLanguage, code).value
  },
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false,
})

const template =
  '> 流程图部分尚未接入，后续若有需求可以考虑接入 mermaid\n' +
  '# H1\n' +
  '## H2\n' +
  '### H3\n' +
  '#### H4\n' +
  '##### H5\n' +
  '###### H6\n' +
  '\n' +
  'Alternatively, for H1 and H2, an underline-ish style:\n' +
  '\n' +
  'Alt-H1\n' +
  '======\n' +
  '\n' +
  'Alt-H2\n' +
  '------\n' +
  '\n' +
  'Emphasis, aka italics, with *asterisks* or _underscores_.\n' +
  '\n' +
  'Strong emphasis, aka bold, with **asterisks** or __underscores__.\n' +
  '\n' +
  'Combined emphasis with **asterisks and _underscores_**.\n' +
  '\n' +
  'Strikethrough uses two tildes. ~~Scratch this.~~\n' +
  '1. First ordered list item\n' +
  '2. Another item\n' +
  '⋅⋅* Unordered sub-list.\n' +
  "1. Actual numbers don't matter, just that it's a number\n" +
  '⋅⋅1. Ordered sub-list\n' +
  '4. And another item.\n' +
  '\n' +
  "⋅⋅⋅You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).\n" +
  '\n' +
  '⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅\n' +
  '⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅\n' +
  '⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)\n' +
  '\n' +
  '* Unordered list can use asterisks\n' +
  '- Or minuses \n' +
  '+ Or pluses \n' +
  "[I'm an inline-style link](https://www.google.com)\n" +
  '\n' +
  '[I\'m an inline-style link with title](https://www.google.com "Google\'s Homepage")\n' +
  '\n' +
  "[I'm a reference-style link][Arbitrary case-insensitive reference text]\n" +
  '\n' +
  "[I'm a relative reference to a repository file](../blob/master/LICENSE)\n" +
  '\n' +
  '[You can use numbers for reference-style link definitions][1]\n' +
  '\n' +
  'Or leave it empty and use the [link text itself]\n' +
  '\n' +
  'Some text to show that the reference links can follow later.\n' +
  '\n' +
  '[arbitrary case-insensitive reference text]: https://www.mozilla.org\n' +
  '[1]: http://slashdot.org\n' +
  '[link text itself]: http://www.reddit.com\n' +
  "Here's our logo (hover to see the title text):\n" +
  '\n' +
  'Inline-style:\n' +
  '![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")\n' +
  '\n' +
  'Reference-style:\n' +
  '![alt text][logo]\n' +
  '\n' +
  '[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"\n' +
  '```javascript\n' +
  'var s = "JavaScript syntax highlighting";\n' +
  'alert(s);\n' +
  '```\n' +
  '\n' +
  '```python\n' +
  's = "Python syntax highlighting"\n' +
  'print s\n' +
  '```\n' +
  '\n' +
  '```\n' +
  'No language indicated, so no syntax highlighting.\n' +
  "But let's throw in a <b>tag</b>.\n" +
  '```\n' +
  'Colons can be used to align columns.\n' +
  '\n' +
  '| Tables        | Are           | Cool  |\n' +
  '| ------------- |:-------------:| -----:|\n' +
  '| col 3 is      | right-aligned |  |\n' +
  '| col 2 is      | centered      |    |\n' +
  '| zebra stripes | are neat      |     |\n' +
  '\n' +
  "The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.\n" +
  '\n' +
  'Markdown | Less | Pretty\n' +
  '--- | --- | ---\n' +
  '*Still* | `renders` | **nicely**\n' +
  '1 | 2 | 3\n' +
  '> Blockquotes are very handy in email to emulate reply text.\n' +
  '> This line is part of the same quote.\n' +
  '\n' +
  'Quote break.\n' +
  '\n' +
  "> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.\n" +
  '<dl>\n' +
  '    <dt>Definition list</dt>\n' +
  '    <dd>Is something people use sometimes.</dd>\n' +
  '\n' +
  '    <dt>Markdown in HTML</dt>\n' +
  '    <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>\n' +
  '</dl>\n' +
  'Three or more...\n' +
  '\n' +
  '---\n' +
  '\n' +
  'Hyphens\n' +
  '\n' +
  '***\n' +
  '\n' +
  'Asterisks\n' +
  '\n' +
  '___\n' +
  '\n' +
  'Underscores\n' +
  "Here's a line for us to start with.\n" +
  '\n' +
  'This line is separated from the one above by two newlines, so it will be a *separate paragraph*.\n' +
  '\n' +
  'This line is also a separate paragraph, but...\n' +
  "This line is only separated by a single newline, so it's a separate line in the *same paragraph*.  \n" +
  '<a href="http://www.youtube.com/watch?feature=player_embedded&v=YOUTUBE_VIDEO_ID_HERE\n' +
  '" target="_blank"><img src="http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg"\n' +
  'alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>\n' +
  '```flow\n' +
  'st=>start: 开始\n' +
  'op=>operation: My Operation\n' +
  'cond=>condition: Yes or No?\n' +
  'e=>end\n' +
  'st->op->cond\n' +
  'cond(yes)->e\n' +
  'cond(no)->op\n' +
  '&```\n' +
  '- [x] Completed task\n' +
  '- [ ] Incomplete task\n' +
  '    - [ ] Sub-task 1\n' +
  '    - [x] Sub-task 2\n' +
  '    - [ ] Sub-task 3'
export { marked, template }
