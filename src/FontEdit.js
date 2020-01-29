import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

class FontEdit extends React.Component {
	render() {
		return (
			<div>
				<FontAwesomeIcon icon={faEdit} />
			</div>
		);
	}
}

export default FontEdit;