export const Comment = ({ coment, name, date }) => {
  return (
    <>
      <div className="comment mt-5">
        <h5>{name}</h5>
        <p>{coment}</p>
        <p><b>{date}</b></p>
      </div>
    </>
  );
};
