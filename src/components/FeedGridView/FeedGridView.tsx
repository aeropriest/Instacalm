import {FlatList, Image} from 'react-native';
import FeedGridItem from './FeedGridItem';

interface IFeedGridView{
  data: IPost[];
  ListHeaderComponent?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;
};

export default function FeedGridView({data, ListHeaderComponent}: IFeedGridView) {
  return (
    <FlatList 
     data={data}
     numColumns={3}
     renderItem={({item}) => <FeedGridItem post={item}/>}
     showsVerticalScrollIndicator={false}
     ListHeaderComponent={ListHeaderComponent}
     style={{ marginHorizontal:-1}}
    />
    );
}