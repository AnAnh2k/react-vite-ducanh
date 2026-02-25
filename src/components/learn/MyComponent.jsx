import "./style.css";
const MyComponent = () => {
  const name = "Đức Anh";

  const arr = [1, 2, 3];

  const object = {
    name: "An Đức ANh",
    age: "22",
  };
  return (
    <>
      <h1>Cố lên có công mài sắt có ngày nên duyên</h1>
      <h2>Tên tôi là: {name}</h2>
      <h3>Mảng: {JSON.stringify(arr)}</h3>
      <h3>Object: {JSON.stringify(object)}</h3>
      <div style={{ border: "1px solid #ccc" }} className="child">
        HEHEHEH
      </div>
    </>
  );
};

export default MyComponent;
