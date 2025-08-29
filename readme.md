
1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?    
*1. getElementById: Retrieves elements by specified id*  
*2. getElementByClassName: Extracts elements according to a specific class*  
*3. querySelector: Finds the first matching element using a CSS selector.*
    *querySelectorAll: Finds all matching elements using CSS selector*  

---

2. How do you **create and insert a new element into the DOM**?    
*There are 2 steps to creating and inserting a new element into the DOM:*
*Creating an element → document.createElement()*
*Adding an element (insert) → such as appendChild(), append(), prepend(), or insertBefore()*  

---

3. What is **Event Bubbling** and how does it work?      
*When an event occurs on an element (e.g., a click on a button), the event first fires on the target element, then gradually climbs up to its parent → grandparent → document → window. This is called Event Bubbling.*

---

4. What is **Event Delegation** in JavaScript? Why is it useful?     
*Event Delegation is a technique where, instead of setting up separate event listeners for child elements, we set up an event listener on a parent element and catch events that occur in the child through event bubbling.*  
*It is useful:*  
*Doesn't require much code writing.*  
*Dynamic elements can be handled.*  
*Code is easy to understand.*  

---

5. What is the difference between **preventDefault() and stopPropagation()** methods?     
*1. preventDefault()*
*Function: Stops a default browser action.*
*That is, prevents the browser from doing what it would normally do.*
*Does not stop event flow (bubbling/capturing).*  
*2. stopPropagation()*
*Function: Prevents the event from propagating (bubble/capture) to parent elements.*
*That is, the event will only stay on the current target, not go up (to the parent).*
*Does not affect the default action.*  

---
