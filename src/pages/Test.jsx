const Jalali = () => {
  const date = new Date();
  const option = {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };
  return (
    <>
      <div>{date.toLocaleDateString("fa-IR", option)}</div>
    </>
  );
};

export default Jalali;
