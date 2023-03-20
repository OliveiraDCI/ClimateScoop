function NotFound() {
  return (
    <div className="not-found">
      <h1 className="not-found__title">Oops!</h1>
      <p className="not-found__text">
        Looks like this page has been lost to the rising sea levels ...
      </p>

      <a href="/" className="not-found__button">
        back to ScoopyLand
      </a>
    </div>
  );
}

export default NotFound;
