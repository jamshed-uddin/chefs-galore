import React from "react";

const Blogs = () => {
  return (
    <div className="my-16 px-6 lg:px-16">
      <h1 className="text-5xl font-bold">Blogs</h1>
      <div className="mt-8">
        <h1 className="text-3xl font-semibold ">
          What is difference between uncontrolled and controlled component?
          <span className="block h-[2px] w-36 mt-2  bg-red-500"></span>
        </h1>
        <p className="pt-3 text-xl font-[350]">
          An uncontrolled component is one where the state is managed by the
          DOM, rather than the React component. In an uncontrolled component,
          the form data is handled by the browser, and the React component
          doesn't have direct access to it. Instead, you would typically use the
          ref attribute to get the value of the input or form element.
        </p>
        <h1 className="text-3xl font-semibold mt-7">
          How to validate props with propsType?
          <span className="block h-[2px] w-36 mt-2  bg-red-500"></span>
        </h1>
        <p className="pt-3 text-xl font-[350]">
          PropTypes provide built-in typechecking capabilities when writing a
          React app. Checking the type of prop in a React component in a large
          application helps catch bugs at run-time.PropTypes is React's internal
          mechanism for adding type checking to component props. React
          components use a special property called propTypes to set up type
          checking.
        </p>
        <h1 className="text-3xl font-semibold mt-7">
          Difference between Node js and Express js.
          <span className="block h-[2px] w-36 mt-2  bg-red-500"></span>
        </h1>
        <p className="pt-3 text-xl font-[350]">
          Node.js is a server-side JavaScript runtime environment, while
          Express.js is a web framework built on top of Node.js. Node.js
          provides a way to execute JavaScript code outside of the browser, and
          it includes a set of built-in modules that allow developers to perform
          tasks like file I/O and networking. Express.js, on the other hand, is
          a lightweight web framework that provides a set of tools for building
          web applications using Node.js.
        </p>
        <h1 className="text-3xl font-semibold mt-7">
          What is custom hook and why we will use custom hook.
          <span className="block h-[2px] w-36 mt-2  bg-red-500"></span>
        </h1>
        <p className="pt-3 text-xl font-[350]">
          A custom hook is a JavaScript function that uses built-in React hooks
          to provide reusable logic for a component.Custom hook is created by
          prefixing a function name with the word "use". For example, a custom
          hook for handling form inputs might be called useFormInput. Custom
          hooks are just plain functions, but they have the ability to use React
          hooks like useState and useEffect to manage state and lifecycle. Then
          comes why we will use custom hooks. <br />
          Custom hooks allow you to extract reusable logic into a separate
          function that can be used across multiple components.Custom hooks can
          help abstract away complex logic, making your code more modular and
          easier to understand.Custom hooks can make code easier to test, since
          the logic is isolated in a separate function.Custom hooks can help
          improve performance by reducing the amount of duplicated code and
          minimizing the number of renders that occur.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
