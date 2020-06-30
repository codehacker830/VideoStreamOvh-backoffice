import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import Settings from './Settings';
import Auth from './Auth';
import Common from './Common';
import Category from './Category';
import Video from './Video';


export default (history) => combineReducers({
  router: connectRouter(history),
  settings: Settings,
  auth: Auth,
  commonData: Common,
  category: Category,
  video: Video,
});
