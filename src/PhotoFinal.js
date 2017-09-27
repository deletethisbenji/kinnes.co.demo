import React, {Component} from 'react';

class PhotoFinal extends Component {
    // componentDidMount() {
    //     var currentPhoto = null;
    //     var currentPath = this.props.location.pathname;
    //     if (currentPath === "/redmercedes/"){
    //         currentPhoto = <img src="https://images.genius.com/b2fcba2db9cc8eace656aa81500c005e.1000x936x1.jpg" alt="Red Mercedes Cover" />;
    //     }
    //     else if (currentPath === "/heebiejeebies/"){
    //         currentPhoto = <img src="https://www.akeemofzamunda.com/wp-content/uploads/2017/05/akeemofzamunda-amine-kehlani-heebiejeebies-0.jpeg" alt="HeebieJeebies Cover"/>;
    //     }
    // }
    render(){
        var currentPhoto = null;
        var currentTitle = null;
        var currentDescription = null;
        var currentPath = this.props.location.pathname;
        if (currentPath === "/redmercedes/"){
            currentTitle = <h4>AMINÉ - REDMERCEDES</h4>;
            currentDescription = <h4>SINGLE</h4>;
            currentPhoto = <img src="https://res.cloudinary.com/benjidurden/image/upload/v1506458553/b2fcba2db9cc8eace656aa81500c005e.1000x936x1_leg1om.jpg" className="aminePhoto" alt="Red Mercedes Cover" />;
        }
        else if (currentPath === "/heebiejeebies/"){
            currentTitle = <h4>AMINÉ FEAT. KEHLANI - HEEBIEJEEBIES</h4>; 
            currentDescription = <h4>SINGLE</h4>;
            currentPhoto = <img src="https://res.cloudinary.com/benjidurden/image/upload/v1506458549/akeemofzamunda-amine-kehlani-heebiejeebies-0_rzl3bz.jpg" className="aminePhoto" alt="HeebieJeebies Cover"/>;
        }

        return (
            <div>
                {/* Goal: Use conditional rendering to render the content of the page based on the page location */}
            {currentTitle}
            {currentDescription}
            {currentPhoto}
            </div>
        )
    }
}

export default PhotoFinal;