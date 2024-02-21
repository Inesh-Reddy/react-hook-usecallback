## React Hook : UseCallback [Memoize Functions]

- `useCallback` is a hook provided by React a javascript library for building user interfaces, that is used to memoize functions. It returns a memoized version of the callback function that only changes if one of the dependencies has changed. This can be useful in optimizing performance, particularly in scenarios where the function is passed down to child components.


## Good have knowledge

- Use `useCallback` for caching `functions` (e.g., event handlers).
- Use `useMemo` for caching `computed values of functions` (e.g., expensive calculations).
- `Both hooks contribute to optimizing performance in React! 🚀🧠`
## Hooks in React.
- `Hooks are feature introduced in React 16.8 that allows you to use state and other React features without wrting a class. They enable fuctional components to have access to stateful logic and lifecylce features, which were previously only available in class components. This has lead to a more consice and more readable way of writing components in React.`
- The Functions that start with use are called hooks.
- Hooks in react are fuctions that allow you to `hook into` React State and LifeCycle features from function components.

useEffect is a hook in React that allows you to perform side effects in functional components. Side effects may include data fetching, subscriptions, or manually changing the DOM. It resembles componentDidMount, componentDidUpdate, and componentWillUnmount lifecycle methods combined in class components.

You pass a function to useEffect as its first argument. This function will be executed after the component has rendered to the screen.

By default, useEffect runs after every render, but you can specify dependencies as the second argument to control when it runs. If the dependencies change between renders, the effect will run again.

If you want the effect to only run once after the initial render, you can pass an empty array ([]) as the second argument.

useEffect can also return a cleanup function, which will be executed when the component unmounts or when the dependencies change and the effect re-runs.

It's important to manage side effects with useEffect to prevent memory leaks and ensure your component behaves as expected across different rendering cycles.



## Side Effects

- In React, the concept of side effect encompasses any operation that reach outside the fuctional scope of the React component. These operations can affect other components, interact with the browser, or perform asynchoronous data fetching.

Examples: 
    
    - SetTimeout
    - fetch
    - setinterval
    - document.getElementById("").innerHTML = "".