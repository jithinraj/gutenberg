/**
 * WordPress Dependencies
 */
import { Component } from '@wordpress/element';
import { withDraggable } from '@wordpress/components';

class BlockDraggable extends Component {
	render() {
		const { clientId, elementId, index, initDragging, layout, rootClientId } = this.props;

		const transferData = {
			type: 'block',
			fromIndex: index,
			rootClientId,
			clientId,
			layout,
		};

		return (
			<div
				className={ 'editor-block-list__block-draggable' }
				onDragStart={ initDragging( elementId, transferData ) }
				draggable
			>
			</div>
		);
	}
}
export default withDraggable( BlockDraggable );
