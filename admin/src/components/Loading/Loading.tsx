import "./Loading.css";

const Loading = (props: { isShow: any}) => {
  const { isShow } = props;
  return (
    <div id="overlay" style={{ display: isShow ? "block" : "none" }}>
      <div id="loading"></div>
    </div>
  );
};

export default Loading;
