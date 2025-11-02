export const defaultMarkdown = `# Welcome to MarkIt 🎉

This is a **simple** markdown editor with *real-time* preview. Try editing this text to see it in action.

## Features

### Text Formatting
You can make text **bold**, *italic*, ***bold and italic***, ~~strikethrough~~, or even \`inline code\`.

### Headings
# H1 Heading
## H2 Heading
### H3 Heading
#### H4 Heading
##### H5 Heading
###### H6 Heading

---

## Lists

### Unordered List
- First item
- Second item
  - Nested item 1
  - Nested item 2
- Third item

### Ordered List
1. First step
2. Second step
   1. Sub-step A
   2. Sub-step B
3. Third step

### Task List
- [x] Completed task
- [ ] Pending task
- [ ] Another task

---

## Links and Images

[Visit GitHub](https://github.com)

![Placeholder Image](https://via.placeholder.com/400x200?text=Markdown+Image)

---

## Code

### Inline Code
Use \`console.log()\` to print to the console.

### Code Block
\`\`\`javascript
function greet(name) {
  console.log(\`Hello, \${name}!\`);
}

greet("World");
\`\`\`

\`\`\`python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(10))
\`\`\`

---

## Blockquotes

> "The best way to predict the future is to invent it."
> — Alan Kay

> Nested blockquote:
>> This is nested
>>> And this is even more nested

---

## Tables

| Feature | Supported | Notes |
|---------|-----------|-------|
| Headers | ✅ | H1 through H6 |
| Lists | ✅ | Ordered, unordered, and tasks |
| Code | ✅ | Inline and blocks |
| Tables | ✅ | With alignment |
| Links | ✅ | Internal and external |

### Aligned Tables

| Left Aligned | Center Aligned | Right Aligned |
|:-------------|:--------------:|--------------:|
| Left | Center | Right |
| Text | Text | Text |

---

## Horizontal Rules

Use three or more dashes, asterisks, or underscores:

---

***

___

---

## Special Characters

Emojis: 😀 🎉 🚀 💻 ⚡ 🌟

Math-like text: E = mc²

Superscript: x² (requires special formatting)

---

## HTML Support

<div style="background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
  <strong>Note:</strong> Some HTML tags work in markdown!
</div>

<details>
<summary>Click to expand</summary>

Hidden content goes here!

</details>

---

## Escape Characters

Use backslash to escape special characters:
\\* Not italic \\*
\\# Not a heading

---

Start typing to replace this example and create your own markdown document! 📝
`;
