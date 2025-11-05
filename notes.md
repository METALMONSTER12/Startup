# CS 260 Notes

[My startup - Startup](https://startup.nexusfour.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS

My IP address is 54.225.198.108 went super smoothly no problems
Command to run to deploy the new information - ./deployService.sh -k C:\Users\Elijah\OneDrive\Documents\CS260-Key\Shardblade.pem -h nexusfour.click -s startup

Command to ssh into my AWS server - ssh -i C:\Users\Elijah\OneDrive\Documents\CS260-Key\Shardblade.pem ubuntu@nexusfour.click

## Caddy

No problems worked just like it said in the [instruction](https://github.com/webprogramming260/.github/blob/main/profile/webServers/https/https.md).

## HTML

This was pretty staightforward. The hardest part was getting my enviorment set up and running and then also deploying it with the deployFiles.sh. But overall that was doable after a bit of pain. All you have to do is navigate into the directory you want to push and run the correct command. I do not know why it took me so long but I figured it out eventually. Other than that everything went pretty well the Simon was super helpful and gave me an idea of what to do. In the actual coding the hardest part was trying to work out the graph and what elements I should do in HTML and what I should do in CSS. 

I needed to have the image as a jpg for some reason for the icon took forever to figure out I am going to try that earlier next time. 

## CSS

I spent a little while on this part of the project it was super fun and informative. There were a few problems with getting things from bootstrap but I just had to remember the order of operations type thing but for CSS. I still need to figure out how to make it look better and center the images and quotes on the background better. 

For the board it was just better to create two CSS selectors and set up everything under those two specifications. 

## React Part 1: Routing

This was pretty straightforward especially since I had already done it with simon. The hardest part was for some reason all my colors got switched so I had to go through the tree figuring out what did what until I changed the right thing. I also had a hard time working through were to put some files and I also had a hard time working through whether or not about.jsx needed to reference app.jsx which wasnt working. I ended up just editing the CSS slightly so that I did not have to. 

## React Part 2: Reactivity

This was so cool to figure out. I had a lot of fun specifically working through making a pop up come up and editing that and making sure it came up at the right times. I definatley had a lot of troubleshooting to do though it was mostly fun troubleshooting. One of the worst parts was remembering to commit everything. I forgot so many times. 
```





## Notes for the exam
**In the following code, what does the link element do?** <br> 
**Answer:** The Link (or NavLink) component from React Router creates a clickable navigation link that changes the URL and renders a different component WITHOUT reloading the entire page. It's like an `<a>` tag but for single-page applications - it keeps the app running smoothly and maintains state while just swapping out the content. NavLink is a special version that also adds an "active" class when you're on that page.

**Example:**
```jsx
<NavLink className="nav-link" to="/play">Play</NavLink>
```
This creates a clickable "Play" link that navigates to the `/play` route without refreshing the page.

---

**In the following code, what does a div tag do?** <br>
**Answer:** A `<div>` (division) tag is a generic container element used to group and organize other HTML elements. It's a block-level element that doesn't have any special meaning - it's just used for structure, styling, and layout purposes.

**Example:**
```html
<div class="container">
  <h1>Title</h1>
  <p>Content here</p>
</div>
```

---

**In the following code, what is the difference between the #title and .grid selector?** <br>
**Answer:** 
- `#title` is an **ID selector** - selects ONE specific element with `id="title"` (IDs must be unique on a page)
- `.grid` is a **class selector** - selects ALL elements with `class="grid"` (classes can be reused multiple times)

**Example:**
```css
#title { color: blue; }    /* Only one element with id="title" */
.grid { display: grid; }    /* All elements with class="grid" */
```

---

**In the following code, what is the difference between padding and margin?** <br>
**Answer:** 
- **Padding** = Space INSIDE the element, between content and border (gets the background color)
- **Margin** = Space OUTSIDE the element, between border and other elements (transparent)

**Example:**
```css
.box {
  padding: 20px;  /* Space inside - pushes content away from edges */
  margin: 30px;   /* Space outside - pushes other elements away */
}
```

---

**Given this HTML and this CSS how will the images be displayed using flex?** <br>
**Answer:** Flexbox will arrange the images in a flexible container. By default, items are placed in a row (horizontally) and can wrap, stretch, shrink, or align based on flex properties like `justify-content`, `align-items`, `flex-direction`, and `flex-wrap`.

---

**What does the following padding CSS do?** <br>
**Answer:** Padding adds space inside an element between the content and the border. The syntax can vary:
- `padding: 10px;` - all sides get 10px
- `padding: 10px 20px;` - top/bottom 10px, left/right 20px
- `padding: 10px 20px 30px 40px;` - top, right, bottom, left (clockwise)

---

**What does the following code using arrow syntax function declaration do?** <br>
**Answer:** Arrow functions (`=>`) provide a shorter syntax for writing functions. They also handle `this` differently than regular functions (they don't bind their own `this`).

**Example:**
```javascript
// Regular function
function add(a, b) { return a + b; }

// Arrow function
const add = (a, b) => a + b;

// With multiple statements
const greet = (name) => {
  const message = `Hello, ${name}!`;
  return message;
};
```

---

**What does the following code using map with an array output?** <br>
**Answer:** The `map()` function takes each element in an array, applies a function to it, and returns a NEW array with the transformed values. It doesn't modify the original array.

**Example:**
```jsx
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
// Output: [2, 4, 6, 8]

const names = ['alice', 'bob'];
const greetings = names.map(name => `Hello, ${name}!`);
// Output: ['Hello, alice!', 'Hello, bob!']
```
In React, `map()` is commonly used to render lists of components from arrays of data.

---

**What does the following code output using getElementByID and addEventListener?** <br>
**Answer:** `getElementById` selects a specific HTML element by its ID, and `addEventListener` attaches an event handler (like 'click', 'submit', etc.) to that element. When the event occurs, the specified function runs.

**Example:**
```javascript
const button = document.getElementById('myButton');
button.addEventListener('click', () => {
  console.log('Button clicked!');
});
```

---

**What does the following line of Javascript do using a # selector?** <br>
**Answer:** The `#` selector (used with jQuery or `querySelector`) selects an element by its ID. 

**Example:**
```javascript
// With querySelector
document.querySelector('#title').style.color = 'red';

// With jQuery
$('#title').css('color', 'red');
```

---

**Which of the following are true? (mark all that are true about the DOM)** <br>
**Answer:** The DOM (Document Object Model) is:
- A tree-like structure representing the HTML document
- Accessible and manipulable via JavaScript
- Updated dynamically without reloading the page
- An interface between your code and the web page

---

**By default, the HTML span element has a default CSS display property value of:** <br>
**Answer:** `inline` - Span elements flow with text and don't create line breaks before or after.

---

**How would you use CSS to change all the div elements to have a background color of red?** <br>
**Answer:**
```css
div {
  background-color: red;
}
```

---

**How would you display an image with a hyperlink in HTML?** <br>
**Answer:** Wrap an `<img>` tag inside an `<a>` tag:
```html
<a href="https://example.com">
  <img src="image.jpg" alt="Description">
</a>
```

---

**In the CSS box model, what is the ordering of the box layers starting at the inside and working out?** <br>
**Answer:** Content → Padding → Border → Margin

---

**Given the following HTML, what CSS would you use to set the text "trouble" to green and leave the "double" text unaffected?** <br>
**Answer:** You'd need to target the specific element containing "trouble". If it has a class or ID, use that:
```css
.trouble { color: green; }
/* or */
#trouble { color: green; }
```

---

**What will the following code output when executed using a for loop and console.log?** <br>
**Answer:** Depends on the specific code, but a typical for loop outputs each iteration's value:
```javascript
for (let i = 0; i < 3; i++) {
  console.log(i);
}
// Output: 0, 1, 2
```

---

**How would you use JavaScript to select an element with the id of "byu" and change the text color of that element to green?** <br>
**Answer:**
```javascript
document.getElementById('byu').style.color = 'green';
// or
document.querySelector('#byu').style.color = 'green';
```

---

**What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?** <br>
**Answer:**
- Paragraph: `<p>`
- Ordered list: `<ol>`
- Unordered list: `<ul>`
- First level heading: `<h1>`
- Second level heading: `<h2>`
- Third level heading: `<h3>`

---

**How do you declare the document type to be html?** <br>
**Answer:** `<!DOCTYPE html>` at the very top of the HTML file.

---

**What is valid javascript syntax for if, else, for, while, switch statements?** <br>
**Answer:**
```javascript
// if/else
if (condition) {
  // code
} else if (anotherCondition) {
  // code
} else {
  // code
}

// for
for (let i = 0; i < 10; i++) {
  // code
}

// while
while (condition) {
  // code
}

// switch
switch (value) {
  case 'option1':
    // code
    break;
  case 'option2':
    // code
    break;
  default:
    // code
}
```

---

**What is the correct syntax for creating a javascript object?** <br>
**Answer:**
```javascript
const obj = {
  key: 'value',
  name: 'John',
  age: 30,
  method: function() { return 'hello'; }
};

// or with shorthand
const person = {
  name: 'Alice',
  greet() { return 'Hi!'; }
};
```

---

**Is it possible to add new properties to javascript objects?** <br>
**Answer:** Yes! You can add properties at any time:
```javascript
const obj = { name: 'John' };
obj.age = 30;           // dot notation
obj['email'] = 'john@example.com';  // bracket notation
```

---

**If you want to include JavaScript on an HTML page, which tag do you use?** <br>
**Answer:** The `<script>` tag:
```html
<script src="script.js"></script>
<!-- or inline -->
<script>
  console.log('Hello');
</script>
```

---

**Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?** <br>
**Answer:** Target the specific element containing "animal":
```javascript
document.getElementById('animal').textContent = 'crow';
// or
document.querySelector('.animal').textContent = 'crow';
```

---

**Which of the following correctly describes JSON?** <br>
**Answer:** JSON (JavaScript Object Notation) is:
- A lightweight data format for storing and exchanging data
- Uses key-value pairs with strings as keys
- Supports strings, numbers, booleans, arrays, objects, and null
- Easy for humans to read and write, easy for machines to parse

**Example:**
```json
{
  "name": "John",
  "age": 30,
    "active": true
}
```

---

**What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo do?** <br>
**Answer:**
- `chmod` - Change file permissions
- `pwd` - Print working directory (show current location)
- `cd` - Change directory
- `ls` - List directory contents
- `vim` - Open Vim text editor
- `nano` - Open Nano text editor
- `mkdir` - Make directory (create folder)
- `mv` - Move or rename files
- `rm` - Remove (delete) files
- `man` - Display manual pages for commands
- `ssh` - Secure shell (remote login)
- `ps` - Process status (show running processes)
- `wget` - Download files from the web
- `sudo` - Execute command as superuser (administrator)

---

**Which of the following console command creates a remote shell session?** <br>
**Answer:** `ssh` (Secure Shell)

**Example:**
```bash
ssh username@hostname
ssh -i keyfile.pem ubuntu@nexusfour.click
```

---

**Which of the following is true when the -la parameter is specified for the ls console command?** <br>
**Answer:** `ls -la` shows:
- `-l` = Long format (detailed info: permissions, owner, size, date)
- `-a` = All files, including hidden files (those starting with `.`)

---

**Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?** <br>
**Answer:**
- **Top Level Domain (TLD)**: `.click`
- **Root Domain**: `bozo.click`
- **Subdomains**: `fruit.bozo.click` and `banana.fruit.bozo.click`

---

**Is a web certificate is necessary to use HTTPS?** <br>
**Answer:** Yes! An SSL/TLS certificate is required for HTTPS. It encrypts the connection between the browser and server and verifies the server's identity.

---

**Can a DNS A record can point to an IP address or another A record?** <br>
**Answer:** A DNS A record points to an **IP address only**, not another A record. To point to another domain name, you'd use a CNAME record instead.

---

**Port 443, 80, 22 is reserved for which protocol?** <br>
**Answer:**
- Port **443**: HTTPS (HTTP Secure) - Encrypted web traffic using SSL/TLS certificates. This is what you see when a website has a lock icon in the browser. All data sent between your browser and the server is encrypted, protecting passwords, credit cards, and personal information.
- Port **80**: HTTP (Hypertext Transfer Protocol) - Unencrypted web traffic. This is the default port for regular websites without HTTPS. Data is sent in plain text, which means anyone intercepting the traffic can read it. Modern browsers often warn users when visiting HTTP sites.
- Port **22**: SSH (Secure Shell) - Encrypted remote terminal access. Used to securely log into remote servers and execute commands. This is what you use when you SSH into your AWS server with commands like `ssh -i keyfile.pem ubuntu@nexusfour.click`.

---

**What will the following code using Promises output when executed?** <br>
**Answer:** Promises handle asynchronous operations. The output depends on the specific code, but generally:
```javascript
Promise.resolve('Success')
  .then(result => console.log(result))
  .catch(error => console.log(error));
// Output: "Success"

// With async/await
async function example() {
  const result = await Promise.resolve('Done');
  console.log(result);  // Output: "Done"
}
```
```
```


