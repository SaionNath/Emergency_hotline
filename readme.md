6. Answer the following questions clearly:

#Q1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

#A1. getElementById selects a single element by it's "ID", 
    getElementsByClassName selects all elements with the specific "class" name, 
    querySelector selects the first element of the selected "tag", 
    querySelectorAll selects all elements of the selected "tag".

#Q2. How do you **create and insert a new element into the DOM**?

#A2. Create element: document.createElement("tag").
insert into DOM: appendChild(), prependChild(), insertBefore().

#Q3. What is **Event Bubbling** and how does it work?

#A3. Event Bubbling means when an event take place on a element, it first run on that element then it bubbles up to its parent, then to its parent's parent, and then up to the document.

#Q4. What is **Event Delegation** in JavaScript? Why is it useful?

#A4. Event Delegation means adding a single EventListener to a parent element instead of adding multiple EventListener to multiple child elements. its happen because of event bubbling. it is useful because of fewer EventListener.

#Q5. What is the difference between **preventDefault() and stopPropagation()** methods?

#A5. preventDefault(): stops default action(like form submit).
stopPropagation(): stops event bubbling.

