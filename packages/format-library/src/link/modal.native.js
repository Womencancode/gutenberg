/**
 * External dependencies
 */
import React from 'react';
/**
 * WordPress dependencies
 */

import { BottomSheet, withSpokenMessages } from '@wordpress/components';

/**
 * Internal dependencies
 */
import screens from './modal-screens/screens';
import LinkSettingsScreen from './modal-screens/link-settings-screen';
import LinkPickerScreen from './modal-screens/link-picker-screen';

const ModalLinkUI = ( { isVisible, ...restProps } ) => {
	return (
		<BottomSheet isChildrenScrollable isVisible={ isVisible } hideHeader>
			<BottomSheet.NavigationContainer animate main>
				<BottomSheet.NavigationScreen name={ screens.settings }>
					<LinkSettingsScreen { ...restProps } />
				</BottomSheet.NavigationScreen>
				<BottomSheet.NavigationScreen
					name={ screens.picker }
					fullScreen
				>
					<LinkPickerScreen />
				</BottomSheet.NavigationScreen>
			</BottomSheet.NavigationContainer>
		</BottomSheet>
	);
};

export default withSpokenMessages( ModalLinkUI );