import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

class FontPlus extends React.Component {
	render() {
		return (
			<div>
				<FontAwesomeIcon icon={faPlus} />
			</div>
		);
	}
}

export default FontPlus;