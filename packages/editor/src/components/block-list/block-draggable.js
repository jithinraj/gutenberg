/**
 * WordPress Dependencies
 */
import { Component } from '@wordpress/element';
import { withDraggable } from '@wordpress/components';

class BlockDraggable extends Component {
	constructor( ) {
		super( ...arguments );
		this.onDragStart = this.onDragStart.bind( this );
		this.onDragEnd = this.onDragEnd.bind( this );
	}

	onDragStart( event ) {
		const { clientId, elementId, index, initDragging, onDragStart, layout, rootClientId } = this.props;
		const transferData = {
			type: 'block',
			fromIndex: index,
			rootClientId,
			clientId,
			layout,
		};
		initDragging( elementId, transferData )( event );
		onDragStart( event );
	}

	onDragEnd( event ) {
		this.props.onDragEnd( event );
	}

	render() {
		return (
			<div
				className={ 'editor-block-list__block-draggable' }
				onDragStart={ this.onDragStart }
				onDragEnd={ this.onDragEnd }
				draggable
			>
			</div>
		);
	}
}
export default withDraggable( BlockDraggable );
