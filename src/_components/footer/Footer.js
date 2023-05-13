import React from 'react';

class Footer extends React.Component {
	
    render() {
        const exclusionArray = [
			'/',
			'/register',
			'/register/',
			'/forgot-password',
			'/forgot-password/',
			'/error',
			'/blank-page'
		]
		if (exclusionArray.indexOf(this.props.location.pathname) >= 0) {
			return '';
		}
        return (
			<footer>
				<p>Copyright © 2022 StudentX.world.</p>					
			</footer>
        )
    }
}

export { Footer };