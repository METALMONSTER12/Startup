# CS 260 Notes

[My startup - Startup](https://startup.nexusfour.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS

My IP address is 54.225.198.108 went super smoothly no problems
Command to run to deploy the new information - ./deployFiles.sh -k C:\Users\Elijah\OneDrive\Documents\CS260-Key\Shardblade.pem -h nexusfour.click -s startup

Command to ssh into my AWS server - ssh -i C:\Users\Elijah\OneDrive\Documents\CS260-Key\Shardblade.pem ubuntu@nexusfour.click

## Caddy

No problems worked just like it said in the [instruction](https://github.com/webprogramming260/.github/blob/main/profile/webServers/https/https.md).

## HTML

This was pretty staightforward. The hardest part was getting my enviorment set up and running and then also deploying it with the deployFiles.sh. But overall that was doable after a bit of pain. All you have to do is navigate into the directory you want to push and run the correct command. I do not know why it took me so long but I figured it out eventually. Other than that everything went pretty well the Simon was super helpful and gave me an idea of what to do. In the actual coding the hardest part was trying to work out the graph and what elements I should do in HTML and what I should do in CSS. 

I needed to have the image as a jpg for some reason for the icon took forever to figure out I am going to try that earlier next time. 

## CSS

I spent a little while on this part of the project it was super fun and informative. There were a few problems with getting things from bootstrap but I just had to remember the order of operations type thing but for CSS. I still need to figure out how to make it look better and center the images and quotes on the background better. 

## React Part 1: Routing

Setting up Vite and React was pretty simple. I had a bit of trouble because of conflicting CSS. This isn't as straight forward as you would find with Svelte or Vue, but I made it work in the end. If there was a ton of CSS it would be a real problem. It sure was nice to have the code structured in a more usable way.

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
