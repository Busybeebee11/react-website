### About 
First react assignment on the following topics learned.
- Introduction to React
- JSX In React

### Section A (done in react)

### Section B 
* Answer the following questions in the readme.md file inside your project above

### Q. List five significant features of React
#### 1. JSX 
- JSX is a syntax extension for JavaScript that allows developers to write HTML-like code within their JavaScript code. This makes it easier to create and manage UI components, as the HTML-like syntax is more intuitive and easier to read than pure JavaScript.

#### 2. Performance
- React helps to improve the speed and efficiency of web applications. React achieves this by using a virtual DOM (Document Object Model) to efficiently update the user interface in response to changes in state or props.

#### 3. Debugging
- React helps developers to diagnose and fix errors in their code. It provides several tools and techniques for debugging, including error messages, browser extensions, and a built-in development mode.

#### 4. Virtual DOM 
- React uses a virtual DOM (Document Object Model) to efficiently render changes to the UI. The virtual DOM is a lightweight copy of the real DOM that React uses to keep track of changes to the UI. By minimizing the number of actual changes made to the real DOM, React is able to render changes faster and more efficiently than traditional DOM manipulation techniques.

### 5. One-way data binding
- Is a significant feature of React that allows developers to build complex user interfaces in a more organized and predictable way. In React, data flows in a single direction: from parent components to child components. This is known as "one-way data binding."
- One-way data binding means that the parent component is responsible for managing the state of the application and passing that state down to its child components as props. Child components can then use those props to render their own UI based on the current state of the application.
- Benefits
    - First, it makes it easier to reason about the state of the application because there is a clear flow of data from top to bottom. 
    - Second, it helps to prevent bugs and maintain a consistent UI by ensuring that child components always receive the latest state from the parent. 
    - Third, it makes it easier to build reusable components because they can be designed to accept props and render themselves based on those props, without needing to know about the internal state of the application.

### Q. List five major advantages of React
1. Reusuable components
2. Improved performance
3. It is easy to learn
4. It is used for both web and mobile apps development
5. It is used for easy creation of dynamic applications, as well as easy debugging.

### Q. What is the name of the Software Engineer that created React? Also, which company owns React?
- React was created by Jordan Walke, a software engineer at Facebook. React is currently maintained by Facebook and a community of developers. 

### Q. What are the notable differences between HTML & JSX? Give at least 3 of them
#### a. Syntax: 
HTML and JSX have different syntax. HTML uses tag-based syntax, where tags are used to define elements and attributes are used to set their properties. JSX, on the other hand, uses a combination of HTML-like syntax and JavaScript expressions. JSX tags are similar to HTML tags, but they are enclosed in curly braces and can contain JavaScript expressions. In other words, JSX allows you to write HTML-like code within your JavaScript code.
HTML:
```
<div class="my-class">Hello, React World!</div>
```
JSX: 
```
<div className="my-class">Hello, React World!</div>
```

#### b. Attributes and Props: 
In HTML, attributes are used to define the properties of an element, whereas in JSX, these properties are referred to as props. Additionally, in JSX, you need to use camelCase for props, rather than kebab-case (written in lowercase and separated by hyphens (e.g. "class" or "data-attribute")) in HTML. This is because JSX attributes are converted into JavaScript objects, and in JavaScript, object properties are typically written in camelCase. All props must be closed.
HTML:
```
<img src="path/to/image.jpg" alt="A beautiful landscape" width="500" height="300">
```
JSX: 
```
<MyImageComponent src="path/to/image.jpg" alt="A beautiful landscape" width={500} height={300} />
```
#### c. Tags: 
In HTML, all tags are created equal. In JSX, there are two types of tags: HTML tags and custom React component tags. HTML tags are written in lowercase, while custom React component tags are written in uppercase. For example, in HTML you might write:
HTML: 
```
<button>Click me</button>
```
JSX:
```
<MyButton onClick={handleClick}>Click me</MyButton>
```
#### Q. Why can’t browsers read JSX?
- Browsers can't read JSX directly because it is not valid JavaScript. JSX is a syntax extension for JavaScript that allows developers to write HTML-like code in their JavaScript files. However, browsers can only interpret pure JavaScript code, and JSX must be transpiled into plain JavaScript before it can be executed in the browser.

- To transpile JSX into JavaScript, developers typically use a tool like Babel, which converts JSX syntax into plain JavaScript code that can be understood by browsers. Babel can be configured to transpile JSX into various versions of JavaScript, depending on the targeted browser or environment.

- By transpiling JSX into JavaScript, developers can take advantage of the benefits of using JSX, such as the ability to write declarative UI components and easily manage state, without sacrificing browser compatibility.

#### Live link
- react-website-assignment.netlify.app

