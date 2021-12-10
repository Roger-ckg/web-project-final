import "./index.css";

const PrivacyPolicyScreen = () => {
    return (
        <div className="container-fluid vh-100 mt-2">
            <h1 className="pb-2">Privacy Policy</h1>

            <ul className="list-group">
                <li className="list-group-item">
                <div className="row privacy-li">
                    <div className="col-2 col-md-1">
                    <i className="fas fa-check-circle fa-3x"></i>
                    </div>
                    <div className="col-10 col-md-11 privacy-text">
                    <p>MoviesHub is public and reviews and comments are immediately viewable and searchable by anyone around the world. We give you non-public ways to communicate on MoviesHub too, through private profile and Direct Messages. You can also use MoviesHub under a pseudonym if you prefer not to use your name.</p>
                    </div>
                </div>
                </li>


                <li className="list-group-item">
                    <div className="row privacy-li">
                        <div className="col-2 col-md-1">
                            <i className="fas fa-check-circle fa-3x"></i>
                        </div>
                        <div className="col-10 col-md-11 privacy-text">
                            <p>When you use MoviesHub, you can choose to share additional information with us like your email address, phone number, address book contacts, and a public profile. We use this information for things like keeping your account secure and showing you more relevant contents.</p>
                        </div>
                    </div>
                </li>

                <li className="list-group-item">
                    <div className="row privacy-li">
                        <div className="col-2 col-md-1">
                            <i className="fas fa-check-circle fa-3x"></i>
                        </div>
                        <div className="col-10 col-md-11 privacy-text">
                            <p>We give you control through your settings to limit the data we collect from you and how we use it, and to control things like account security, marketing preferences, apps that can access your account, and address book contacts you’ve uploaded to MoviesHub. You can also download information you have shared on [].</p>
                        </div>
                    </div>
                </li>

                <li className="list-group-item">
                    <div className="row privacy-li">
                        <div className="col-2 col-md-1">
                            <i className="fas fa-check-circle fa-3x"></i>
                        </div>
                        <div className="col-10 col-md-11 privacy-text">
                            <p>In addition to information you share with us, we use your reviews and comments, content you’ve read or liked, and other information to determine what topics you’re interested in, your age, the languages you speak, and other signals to show you more relevant content. We give you transparency into that information, and you can modify or correct it at any time.</p>
                        </div>
                    </div>
                </li>

                <li className="list-group-item">
                    <div className="row privacy-li">
                        <div className="col-2 col-md-1">
                            <i className="fas fa-check-circle fa-3x"></i>
                        </div>
                        <div className="col-10 col-md-11 privacy-text">
                            <p>If you have questions about this policy, how we collect or process your personal data, or anything else related to our privacy practices, we want to hear from you. You can contact us at any time.</p>
                        </div>
                    </div>
                </li>

            </ul>
        </div>
    )
};
export default PrivacyPolicyScreen;