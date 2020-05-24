import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnet } from '@fortawesome/free-solid-svg-icons'

class FontScraper extends React.Component {
	render() {
		return (
			<div>
				<FontAwesomeIcon icon={faMagnet} />
			</div>
		);
	}
}

export default FontScraper;