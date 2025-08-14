import "./App.css";

const App = () => {
  let data = {
    userName: "batman",
    age: 44,
  };

  return (
    <div>
      <h1 style={{ color: "red", backgroundColor: "yellow" }}>hello world </h1>
      <h2 className="heading">heading 2</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In illum quia
        exercitationem? Accusamus quia consequatur cupiditate eum asperiores
        totam quibusdam nostrum. Fuga cum repudiandae eaque distinctio quasi,
        harum ullam excepturi?
      </p>
      <p>Name:{data.userName}</p>
      <p>Age: {data.age}</p>
    </div>
  );
};

export default App;
