import React from 'react';

const User = (props) => {
    const user = props.user.login;
    return (
        // <div className="container mt-5">
        //     <h3 className="text-center title">Welcome back {user.firstname}</h3>
        //     <div className="row align-items-center justify-content-center mt-5">
        //         <div className="col col-sm-8 col-md-6 col-lg-4 col-xl-4">
        //             <div className="card">
        //                 <img className="card-img-top" src="/images/avatar.png" alt="Card" style={{width:"100%"}}/>
        //                 <div className="card-body">
        //                     <h4 className="card-title"><span>Firstname:</span> {user.firstname}</h4>
        //                     <h4 className="card-text"><span>Lastname:</span> {user.lastname}</h4>
        //                     <div><span>Email:</span> {user.email}</div>
        //                 </div>
        //             </div>               
        //         </div>
        //     </div>
        // </div>
        <div className="container mt-5">
            <div className="prof_card">
                <h3 className="text-center title">Welcome back {user.firstname}</h3>
                <div className="row align-items-center justify-content-center mt-5">
                    <div className="col-md-6">
                        <div className="card profile-card">
                            <div className="background-block">
                                <img src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="profile-sample1" class="background"/>
                            </div>
                            <div className="profile-thumb-block">
                                <img src="https://randomuser.me/api/portraits/men/41.jpg" alt="profile-image" className="profile"/>
                            </div>
                            <div className="card-content">
                                <h2>{user.firstname} {user.lastname}</h2>
                                <p className="mt-3 w-100 float-left text-center"><strong>{user.email}</strong></p>
                                <div className="icon-block"><a href="#"><i className="fa fa-facebook"></i></a><a href="#"> <i className="fa fa-twitter"></i></a><a href="#"> <i class="fa fa-google-plus"></i></a></div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;