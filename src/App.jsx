const App = ({ userDetails }) => {
  return (
    <div className="app">
      <h1>Github Users</h1>
      <div className="container">
        <div className="user-container">
          {userDetails.map((user) => {
            return (
              <div className="user">
                <div className="img-container">
                  <img src={user.avatar_url} alt="Not Found" />
                </div>
                <div className="info-container">
                  <h4 className="user-name">${user.login}</h4>
                  <a href={user.html_url} className="profile">
                    Profile
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
