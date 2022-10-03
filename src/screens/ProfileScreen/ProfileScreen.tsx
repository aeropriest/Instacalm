import {View, Image, FlatList} from 'react-native';
import UserData from '../../assets/data/user.json';
import ProfileHeader from './ProfileHeader';
import FeedGridView from '../../components/FeedGridView';

export default function ProfileScreen() {
  return (
    <FeedGridView 
    data={UserData.posts}
    ListHeaderComponent={ProfileHeader}
    />  
    )
}