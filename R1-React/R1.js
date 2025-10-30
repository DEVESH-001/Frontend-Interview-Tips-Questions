// React is a JavaScript library for building user interfaces, developed by Facebook. Features:

//1. JSX (JavaScript XML): Allows writing HTML-like syntax in JavaScript
//2. Components: Reusable building blocks for UI
//3. Virtual DOM: Efficiently updates and renders components
//4. One-Way Data Flow: Data flows from parent to child components via props

// Virtual DOM:

// The Virtual DOM is an in-memory representation of the real DOM. React uses it for efficient updates.

//1. Optimize Performance: Only updates changed elements instead of re-rendering the entire page
//2. Efficient Diffing: Compares the previous and current Virtual DOM to determine the minimal set of changes needed
//3. Groups multiple changes together to reduce the number of updates to the real DOM

// What's the difference between state and props?

// Aspect	State	                                 Props
// Purpose	Internal component data that can change	 Data passed from parent to child
// Mutability	Mutable (can be updated)	         Immutable (read-only)
// Ownership	Owned by the component	             Owned by parent component
// Updates	Triggers re-render when changed	         Component re-renders when props change

// Function Comp vs Class Comp
// Functional Component (Modern approach)
// function Welcome({ name }) {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>Hello, {name}</h1>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Click</button>
//     </div>
//   );
// }

// // Class Component (Legacy)
// class Welcome extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, {this.props.name}</h1>
//         <p>Count: {this.state.count}</p>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Click
//         </button>
//       </div>
//     );
//   }
// }

// Keys help React identify which items have changed in lists.

// Controlled vs Uncontrolled Components:

// Controlled Components: Form data is handled by React component state
// Uncontrolled Components: Form data is handled by the DOM itself (uncontrolled use refs)

// function ControlledForm() {
//   const [value, setValue] = React.useState("");
//   return (
//     <input
//       type="text"
//       value={value}
//       onChange={(e) => setValue(e.target.value)}
//     />
//   );
// }

// function UncontrolledForm() {
//   const inputRef = React.useRef(null);
//   const handleSubmit = () => {
//     alert(inputRef.current.value);
//   };

//   return (
//     <div>
//       <input type="text" ref={inputRef} />
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// }

// React Fragments let you group elements without adding extra DOM nodes <> </>

// State is data managed within a component that can change over time.​

// useState lets you add state to functional components.

// useEffect handles side effects like data fetching require dependency arrays to control when they run.​

// useContext allows accessing context values without prop drilling.

const UserContext = React.createContext();

function App() {
  const user = { name: "Devesh", age: 23 };
  return (
    <UserContext.Provider value={user}>
      <Profile />
    </UserContext.Provider>
  );
}

// what is Prop Drilling ?
// A : Prop drilling is the process of passing data from a parent component to deeply nested child components through multiple layers of intermediate components that do not need the data themselves.

// useReducer manages complex state logic in functional components. #

// useRef creates mutable refs for DOM elements or values that persist across renders.

function TextInput() {
  const inputRef = useRef(null);
  const countRef = useRef(0);

  useEffect(() => {
    inputRef.current.focus(); // Focus on mount
  }, []);

  const handleClick = () => {
    countRef.current++; // Doesn't cause re-render
    console.log("Clicked:", countRef.current);
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

// React.memo prevents unnecessary re-renders of functional components
