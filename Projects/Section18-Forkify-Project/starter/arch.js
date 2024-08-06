/* The MVC Architecture

Why do we need an architecture we build a software?

1- Will give our project the STRUCTURE in which we can then write the code, like a house, software needs a structure: the way we organize our code. (how we organize and divide code into different modules, classes and functions), all these will basically hold our code together and give it structure

2- MAINTAINABILITY: Thinking about the future, keeping in mind that the project is never really done! It's never finished! We will always need to change things in the future and we will need to MAINTAIN the project.
And that only works if the project is nicely structured.

Plus! we might event want to add new feature to the project!
which brings us to ...

3- EXPANDABILITY: The ability to easily add new features to the project.

And once again, that is only possible with a good STRUCTURE and good overall ARCHITECTURE.

So, the perfect architecture is basically one that allows for all these three aspects
*/

/*
Now, in order to achieve that perfect architecture,
we can of course create our own architecture from scratch.
And that's exactly what we did in the Mapty project.
However, that only works with a really small project like that one.
But when the project grows more complex, then it's going to be very hard to achieve a good architecture completely on our own.
And so instead, we can opt for a well-established architecture pattern that developers have been using for years, or even for decades. And examples of that are model view controller,
*/

/*
No matter where the architecture comes from and who developes it, there are some COMPONENTS that any architecture must have, And That is


1- BUSINESS LOGIC -> code that solves the actual business problem.(msgs)


2- STATE -> Essentially stores all the data about the application
that's running in the browser, so the data about the application's frontend basically (stores -> api data, user input, page current viewed by the user, etc..)



3- HTTP LIBRARY -> responsible for Making & Receiving AJAX requests.
Optional but almost necessary in real-world applications.(e.g. fetch fn)


4- APPLICATION LOGIC (ROUTER) -> Code that is only concerned about the implementation of the application itself. e.g -> handles navigation and UI events, called router basically mapping actions to the user's navigation.


5- PRESENTATION LOGIC (UI LAYER) -> Code that is concerned about the visible part of the application, essentially displays application state on the user interface in order to keep everything in sync.
*/

//  The MVC Architecture

/*


*/
