import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

class FontLink extends React.Component {
	render() {
		return (
			<div>
				<FontAwesomeIcon icon={faLink} />
			</div>
		);
	}
}

export default FontLink;