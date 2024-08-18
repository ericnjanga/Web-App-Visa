# App features
- Custom Hook
- Small expenses tracker
- Fetching users' information from a random API source
- Form validation
- Feedback form
- Translation
- Light-dark theme switcher

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Additional resources
### Rendering Lists
- [Map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
 allows you to create new arrays populated with the results of calling a transformation function on every element. 
- [Rendering lists on official React docs website](https://beta.reactjs.org/learn/rendering-lists#rendering-data-from-arrays)
 dives deeper into how to display multiple similar components from a collection of data, providing examples of both filtering and transformations.
- [React keys on official docs](https://beta.reactjs.org/learn/rendering-lists#where-to-get-your-key)
 offers a comprehensive set of memotecnic rules to reinforce how to use keys properly.

### Forms
- [Forms from the official React docs](https://reactjs.org/docs/forms.html) illustrate some examples of how React deals with certain form fields compared to traditional HTML tags, like the text area, select and file input tags. It also showcases how to handle multiple inputs by leveraging event.target.name and the implications of using null as a value in a controlled input.
- [Formik](https://formik.org/) is the most popular open source form library for React. It saves you lots of time when building forms and offers a declarative, intuitive and adoptable paradigm. 
- [Yup](https://github.com/jquense/yup) is an open-source library that integrates perfectly with Formik. It allows you to set all your form validation rules declaratively.
- [React-hook-form](https://github.com/jquense/yup) is another popular library to easily manage your form state and validation rules.

### React Context
- [React.memo from the official React docs](https://reactjs.org/docs/react-api.html#reactmemo), an API that can be used in conjunction with Context Providers to prevent unnecessary re-renders in top-level components in the tree. 

- [useMemo from the official React docs](https://reactjs.org/docs/hooks-reference.html#usememo), a hook to guarantee referential equality on objects across rendering passes.

### React Hooks
- The article on [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) assignment describes how the destructuring assignment, which allows you to get values out of the array that gets returned when the useState hook is invoked, works in more detail. 

- [The read props inside the child component](https://beta.reactjs.org/learn/passing-props-to-a-component#step-2-read-props-inside-the-child-component) link on the Beta version of React docs discusses how to use destructuring assignment to get values out of the props object. 

- The [useState reference on official React docs website](https://beta.reactjs.org/apis/react/useState#usestate) helps you understand how to work with this hook and some of the caveats involved. 

- The [useEffect reference on official React docs website](https://beta.reactjs.org/apis/react/useEffect#useeffect) helps you understand the syntax of this hook and goes into some depth to explain how to use and troubleshoot the useEffect hook. 

### Rules of Hooks and Fetching Data with Hooks
- The 
[Rules of Hooks reading on Reactjs.org](https://reactjs.org/docs/hooks-rules.html) website gives you an overview of how to work with the hooks as recommended by the React Core team at Meta. 

- The [Fetching data with Effects](https://beta.reactjs.org/apis/react/useEffect#fetching-data-with-effects)
 article on React docs discusses fetching data using a few different approaches, including using async / await syntax. 

- [How to use promises](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises) is a resource that describes the "behind-the-scenes" of how data fetching works in greater depth. 

- [async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) is a resource on MDN that discusses the use of the async and await keywords as a more recent way to handle API requests in JavaScript. 





## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
