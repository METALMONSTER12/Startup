# CS 260 Notes

[My startup - Startup](https://startup.nexusfour.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS

My IP address is 54.225.198.108 went super smoothly no problems
Command to run to deploy the new information - ./deployReact.sh -k C:\Users\Elijah\OneDrive\Documents\CS260-Key\Shardblade.pem -h nexusfour.click -s startup

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

This was a lot of fun to see it all come together. I had to keep remembering to use React state instead of just manipulating the DOM directly.

Handling the toggling of the checkboxes was particularly interesting.

```jsx
<div className="input-group sound-button-container">
  {calmSoundTypes.map((sound, index) => (
    <div key={index} className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        value={sound}
        id={sound}
        onChange={() => togglePlay(sound)}
        checked={selectedSounds.includes(sound)}
      ></input>
      <label className="form-check-label" htmlFor={sound}>
        {sound}
      </label>
    </div>
  ))}
</div>
```





## Notes for the exam
In the following code, what does the link element do?
**Answer:** The Link (or NavLink) component from React Router creates a clickable navigation link that changes the URL and renders a different component WITHOUT reloading the entire page. It's like an `<a>` tag but for single-page applications - it keeps the app running smoothly and maintains state while just swapping out the content. NavLink is a special version that also adds an "active" class when you're on that page.

**Example:**
```jsx
<NavLink className="nav-link" to="/play">Play</NavLink>
```
This creates a clickable "Play" link that navigates to the `/play` route without refreshing the page.

In the following code,  what does a div tag do?
In the following code, what is the difference between the #title and .grid selector?
In the following code, what is the difference between padding and margin?
Given this HTML and this CSS how will the images be displayed using flex?
What does the following padding CSS do?
What does the following code using arrow syntax function declaration do?
What does the following code using map with an array output?
What does the following code output using getElementByID and addEventListener?
What does the following line of Javascript do using a # selector?
Which of the following are true? (mark all that are true about the DOM)
By default, the HTML span element has a default CSS display property value of: 
How would you use CSS to change all the div elements to have a background color of red?
How would you display an image with a hyperlink in HTML?
In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
Given the following HTML, what CSS would you use to set the text "trouble" to green and leave the "double" text unaffected?
What will the following code output when executed using a for loop and console.log?
How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
How do you declare the document type to be html?
What is valid javascript syntax for if, else, for, while, switch statements?
What is the correct syntax for creating a javascript object?
Is it possible to add new properties to javascript objects?
If you want to include JavaScript on an HTML page, which tag do you use?
Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
Which of the following correctly describes JSON?
What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?
Which of the following console command creates a remote shell session?
Which of the following is true when the -la parameter is specified for the ls console command?
Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
Is a web certificate is necessary to use HTTPS.
Can a DNS A record can point to an IP address or another A record.
Port 443, 80, 22 is reserved for which protocol?
What will the following code using Promises output when executed?
