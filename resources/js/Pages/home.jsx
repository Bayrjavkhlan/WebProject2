// resources/js/Pages/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">{__('Dashboard')}</div>

            <div className="card-body">
              {auth.user.is_admin === 1 ? (
                <a href="/admin/routes">Admin</a>
              ) : (
                <div className="panel-heading">Normal User</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
