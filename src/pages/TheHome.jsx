import ToDo from "../components/ToDo";

export default function Home() {
  return (
    <>
      <h2 style={{textAlign: "center"}}>Home</h2>
      <div style={{display: "flex"}}>
        <ToDo title={"Groceries"} />
        <ToDo title={"Chores"} />
        <ToDo title={"Work"} />
      </div>
    </>
  );
}
