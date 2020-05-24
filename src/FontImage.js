import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'

class FontImage extends React.Component {
	render() {
		return (
			<div>
				<FontAwesomeIcon icon={faImage} />
			</div>
		);
	}
}

export default FontImage;