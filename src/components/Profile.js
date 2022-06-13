function Profile(props){
    console.log(props);
    //destructuring props
    const{name, lastname} = props;
    return (
    <h1>
        Name: Abhra and {name}{lastname}
    </h1>
    );
}

export default Profile;