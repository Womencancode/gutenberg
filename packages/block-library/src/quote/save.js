/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { align, value, citation } = attributes;

	const className = classnames( {
		[ `has-text-align-${ align }` ]: align,
	} );

	return (
		<blockquote { ...useBlockProps.save( { className } ) }>
			<InnerBlocks.Content />
		</blockquote>
	);
}
