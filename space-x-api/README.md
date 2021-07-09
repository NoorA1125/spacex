Hello, my name is Noor Abdikadir. 

This was my approach for the challenge. 

Key things I kept in mind during this challenge was one of the troubles the company was facing/working on: 

Which were: 
Security, 
Re-useablity, 
Best Practices.

There really wasn't a whole lot for me to do anything security wise, 

if I needed a API KEY for this project, perhaps that would've been one case study I could've showed off but that wasn't the case.

Therefore, I impleneted React componenets as well as react file structure (though not the best example here).

React componenets allows you to break the entire front-end into chunks, so it's easy to read, debug, and implemented using custom hooks throughout the page, rather then rewritting the same code elsewhere. 

Some examples of Best practices: 

useState - basically listens to a components state and when it detects a chance, implements it where ever else that chance is called on. 

I implemented this with the API fetch. 

I created 1 card, and used the API data to auto fill in the data and using a react KEY to duplucate a card is needed, which is how I managed to created 4 rockets (all that was available in the API) with 1 card code.

What I used to pull this project off: 
Bulma - A CSS Framework
SpaceX API 

In terms of reworld examples: My approach in full effect would've been layed out like this: 

Turning a traditional code like this one down Below:

<!DOCTYPE html>
<html>
<head>
<links>
<links>
<links>
<links>
</head>
<body>
<header>
<navbar>
    <ul> 
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</navbar>
</header>
<section>
    <article>
</section>
<section>
    <article>
</section>
<section>
    <article>
</section>
</body>
</html>

Into a easily disgestible, reuseable, secure with best practices React app like this: 

return (
        <Navbar /> Where each of these is its own seperate file.
        <Hero />
        <FirstPage /> Easier to Read,
        <SecondPage /> Easier to Debug,
        <ContactPage /> Overall, very secure as when it comes to security when all sensitive data isnt in one single file. But thats for another time. Thanks for taking the time.
)