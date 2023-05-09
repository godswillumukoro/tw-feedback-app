// you can create React components using classes or hooks
function App() {
  const title = "Twinwaters Lagos";
  const body = "The best lifestyle and dining experience";
  const comments = [
    { id: 1, text: "Hey" },
    { id: 1, text: "There" },
    { id: 1, text: "Kells" },
  ];

  const loading = false;
  const showComments = false;
  const commentBlock = (
    <div>
      <h3>Comments: ({comments.length})</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <h1>{title}</h1>
      <p>{body}</p>
      {showComments && commentBlock}
    </>
  );
}

export default App;
