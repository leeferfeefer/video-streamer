/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import notifee, { AndroidImportance } from '@notifee/react-native';

// start screen capturing:
// try {
// 	const channelId = await notifee.createChannel( {
// 		id: 'screen_capture',
// 		name: 'Screen Capture',
// 		lights: false,
// 		vibration: false,
// 		importance: AndroidImportance.DEFAULT
// 	} );

// 	await notifee.displayNotification( {
// 		title: 'Screen Capture',
// 		body: 'This notification will be here until you stop capturing.',
// 		android: {
// 			channelId,
// 			asForegroundService: true
// 		}
// 	} );
// } catch( err ) {
// 	// Handle Error
// };

// stop capturing: 
// try {
// 	await notifee.stopForegroundService();
// } catch( err ) {
// 	// Handle Error
// };

notifee.registerForegroundService( notification => {
	return new Promise( () => {

	} );
} );

AppRegistry.registerComponent(appName, () => App);
